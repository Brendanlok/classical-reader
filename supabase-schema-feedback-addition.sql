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

alter table feedback enable row level security;
create policy "public read/write feedback" on feedback
  for all using (true) with check (true);

grant select, insert on feedback to anon, authenticated;
