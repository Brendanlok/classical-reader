# classical-reader — 四大名著 reading app
Live: https://brendanlok.github.io/classical-reader/ (GitHub Pages, auto-deploys
via .github/workflows/deploy.yml on push to master). Backend: Supabase only
(Postgres + Auth). Netlify and Firebase are both fully retired — don't
reintroduce either without asking; this was a deliberate migration off both.

## History (context if something looks odd)
Originally Netlify (static host) + Firebase (Auth/Firestore). Migrated in two
stages: Firebase → Supabase first (chapter_cache/feedback, then auth/user_data),
then Netlify → GitHub Pages. Repo had to go **public** to enable GitHub Pages on
the free plan — a hardcoded Groq API key that was in the client JS (and thus
already exposed via the live site regardless of repo visibility) was removed
and revoked at console.groq.com as part of that switch; users now must paste
their own key for AI chatbot/flashcard features.

Google sign-in goes through Supabase's OAuth (Authentication → Providers →
Google in the Supabase dashboard, backed by a Google Cloud OAuth client under
the "classical-reader" GCP project — console.cloud.google.com/apis/credentials).
No admin-level migration of old Firebase users was done: Supabase mints a new
user id per Google account on first sign-in, so anyone who used the app before
the migration lost their *cloud-synced* progress (local-device data untouched).
OWNER_UID in app.js is your Supabase auth.users id (Dashboard → Authentication →
Users) — gates the admin feedback tab.

Netlify gotcha, in case a fallback host is ever needed again: its GitHub
connection can silently break (repo-access error) with every push failing
invisibly — check the Deploys tab, don't assume `git push` succeeding means it
went live. Also its dashboard "Publish directory" field can silently override
netlify.toml if left stale from a prior repo layout.

manifest.json/sw.js use relative paths so they'd work at a root domain or a
/classical-reader/ subpath without changes, if the host ever changes again.

## What it is
Vanilla JS single-page app (no framework, no build step) for reading the Four Great
Classical Novels in 繁体 / 简体 / English, with Google sign-in, per-user progress,
notes/highlights, flashcards, quizzes, an AI chatbot, and a feedback form.

## Files
- index.html — shell + PWA tags; scripts loaded with ?v= cache-buster query
- app.js     — everything: state, router, rendering, fetching, caching (~2300 lines)
- user.js    — Supabase init: auth (Google OAuth) + user_data table
- data.js    — book metadata, flashcards, quizzes; chapters.js — chapter lists
- styles.css — all styles; sw.js — network-first service worker (PWA)
- supabase-schema.sql — full schema, safe to rerun on a fresh project (all
  `create table if not exists` + policies); doesn't track incremental additions
  already applied to the live project (e.g. supabase-schema-feedback-addition.sql
  was one such addition, already applied and deleted after use)

## Architecture rules (violating these caused real outages)
- Chapter text cache: in-memory Map only (getCached/setCached). NEVER cache chapter
  text in localStorage — full novels blew the 5MB quota, every write silently failed,
  and the app hung in an infinite fetch loop. localStorage is for small user data only.
- Supabase `chapter_cache` table (id = "{bookId}_{chapterIdx}", columns ws/bh/en) is
  the permanent shared cache for ALL users. Check it before any external fetch (both
  fetchWenyan and fetchTranslation do this via fsLoadCache — keep it that way).
- Source text comes from zh.wikisource.org. All cleaning lives in cleanWikitext():
  -{...}- variant syntax must be resolved BEFORE {{...}} template stripping;
  {{header}}-type metadata templates are deleted, not unwrapped; ":"-prefixed lines
  are poem verses → one paragraph per line.
- EN translations annotate proper nouns with 繁体 in brackets: "Song Jiang（宋江）".
  Done post-translation in annotateNames(); surname list + place-suffix regex.
- Every fetch failure must land in the `_failed` Set so the UI shows a Retry button.
  A fetch that errors without recording failure = the eternal stuck spinner bug.
- Never call alert() from code that runs on page load / passive auth-state callbacks.
  A blocking alert froze the whole app for users with blocked storage (was a real
  Firebase-era bug; Supabase's onAuthStateChange callback follows the same rule).
- Book IDs are shuihu / xiyou / sanguoyanyi / hongloumeng (not English names).

## Conventions
- UI is bilingual: every user-facing string needs isZh ? '中文' : 'English'.
- Mode pills are labeled 繁体 / 简体 / EN (not 文言文/白话文).
- URL routing: nav() pushes ?page=&book=&ch= — new pages must go through nav().
- User prefs (lang, text mode, reading settings) persist via saveUserPrefs() to
  localStorage + Supabase (user_data.prefs); new settings should hook into it.
- Cache-busting: bump the ?v= query in index.html when shipping JS changes that
  must reach users immediately.

## Gotchas
- OWNER_UID in app.js gates the admin feedback tab.
- Supabase RLS: chapter_cache/cache_meta/feedback are public r/w; user_data is
  gated to `auth.uid()::text = uid`. New tables need a policy in supabase-schema.sql
  (or run directly in SQL Editor) before the app can read/write them.
- Groq API key in app.js powers only the chatbot/AI flashcards; translations use
  free Google Translate (translate.googleapis.com, chunked ≤600 chars).
- deploy.ps1 stages everything in this repo (git add .) and no-ops if nothing
  changed — safe to call after every edit.
