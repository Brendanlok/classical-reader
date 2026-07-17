-- Run this once in Supabase Dashboard -> SQL Editor, on a fresh project.
-- Mirrors the current Firestore structure:
--   Firestore users/{uid}          -> table user_data (one row per signed-in user)
--   Firestore chapter_cache/{id}   -> table chapter_cache (shared, public r/w)
--   Firestore chapter_cache_meta   -> table cache_meta (one-time migration markers)

create table if not exists user_data (
  uid text primary key,                    -- Supabase auth.users.id
  progress jsonb default '{}',             -- { bookId: chapterIndex }
  started_chapters jsonb default '{}',     -- { bookId: [chapterIndex, ...] }
  completed_chapters jsonb default '{}',
  bookmarks jsonb default '{}',
  notes jsonb default '{}',                -- { "bookId_idx": noteText }
  highlights jsonb default '{}',           -- { "bookId_idx": [{id,quote,note,date}] }
  quiz_history jsonb default '[]',
  chat_log jsonb default '[]',
  prefs jsonb default '{}',                -- lang, preferredTextMode, readingPrefs
  updated_at timestamptz default now()
);

create table if not exists chapter_cache (
  id text primary key,                     -- "{bookId}_{chapterIdx}", e.g. "shuihu_0"
  ws text,                                 -- 繁体 (Wikisource source)
  bh text,                                 -- 简体 (Google Translate)
  en text                                  -- English (Google Translate + name annotations)
);

create table if not exists cache_meta (
  id text primary key,                     -- marker name, e.g. "navWipeV6"
  started_at timestamptz default now()
);

create table if not exists feedback (
  id bigint generated always as identity primary key,
  rating int,
  comment text,
  email text,
  page text,
  book text,
  lang text,
  uid text,
  date timestamptz default now(),
  ua text
);

-- Row Level Security: chapter_cache + cache_meta are public read/write (matches
-- current Firestore rules — it's a shared translation cache, not sensitive data).
alter table chapter_cache enable row level security;
create policy "public read/write chapter_cache" on chapter_cache
  for all using (true) with check (true);

alter table cache_meta enable row level security;
create policy "public read/write cache_meta" on cache_meta
  for all using (true) with check (true);

-- feedback: anyone can submit; only read via the admin UI (gated client-side by
-- OWNER_UID in app.js), so allow public insert+select same as the other shared tables.
alter table feedback enable row level security;
create policy "public read/write feedback" on feedback
  for all using (true) with check (true);

-- user_data: each user can only read/write their own row.
alter table user_data enable row level security;
create policy "users manage own row" on user_data
  for all using (auth.uid()::text = uid) with check (auth.uid()::text = uid);

-- Explicit grants (belt-and-suspenders alongside RLS policies above).
grant select, insert, update on chapter_cache to anon, authenticated;
grant select, insert, update on cache_meta to anon, authenticated;
grant select, insert on feedback to anon, authenticated;
grant select, insert, update on user_data to authenticated;

