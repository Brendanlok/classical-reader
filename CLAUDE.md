# classical-reader — 四大名著 reading app
Live: https://chineseclassics.netlify.app (Netlify, auto-deploys on git push).

## IN PROGRESS: migrating Netlify→GitHub Pages and Firebase→Supabase
Two manual steps are blocking this, neither doable from code/git:
1. Enable Pages: repo Settings → Pages → Source: "GitHub Actions". Once done and
   a manual `workflow_dispatch` run succeeds, flip .github/workflows/deploy.yml's
   `on:` back to `push: branches: [master]`. Verify with curl before trusting the
   brendanlok.github.io/classical-reader URL — it 404s until this is done.
   Also add that domain to Firebase Console → Auth → Authorized domains (or its
   Supabase equivalent, once migrated) or sign-in will break there.
2. Create a Supabase project, run supabase-schema.sql (repo root) in its SQL
   Editor, and hand over the project URL + anon key. Only then rewrite user.js
   (auth + per-user data) and app.js's fsLoadCache/fsSaveCache/wipe functions
   (shared chapter_cache) to use Supabase instead of Firebase — don't half-migrate
   without both keys in hand, and don't touch the live Firebase-backed prod site
   until the Supabase path is verified working end-to-end (sign-in, chapter
   caching, existing-data read) in parallel, then cut over.
manifest.json/sw.js already use relative paths so they work at either a root
domain or a /classical-reader/ subpath without changes.

## What it is
Vanilla JS single-page app (no framework, no build step) for reading the Four Great
Classical Novels in 繁体 / 简体 / English, with Google sign-in, per-user progress,
notes/highlights, flashcards, quizzes, an AI chatbot, and a feedback form.

## Files
- index.html — shell + PWA tags; scripts loaded with ?v= cache-buster query
- app.js     — everything: state, router, rendering, fetching, caching (~2400 lines)
- user.js    — Firebase init, Google auth, per-user Firestore data (users/{uid})
- data.js    — book metadata, flashcards, quizzes; chapters.js — chapter lists
- styles.css — all styles; sw.js — network-first service worker (PWA)

## Architecture rules (violating these caused real outages)
- Chapter text cache: in-memory Map only (getCached/setCached). NEVER cache chapter
  text in localStorage — full novels blew the 5MB quota, every write silently failed,
  and the app hung in an infinite fetch loop. localStorage is for small user data only.
- Firestore `chapter_cache/{bookId}_{chapterIdx}` (fields ws/bh/en) is the permanent
  shared cache for ALL users. Check it before any external fetch (both fetchWenyan
  and fetchTranslation do this — keep it that way).
- Source text comes from zh.wikisource.org. All cleaning lives in cleanWikitext():
  -{...}- variant syntax must be resolved BEFORE {{...}} template stripping;
  {{header}}-type metadata templates are deleted, not unwrapped; ":"-prefixed lines
  are poem verses → one paragraph per line.
- One-time global cache migrations use marker docs in `chapter_cache_meta` plus a
  versioned MARKER_ID (navWipeV6, enWipeV3...). To rerun a migration, bump the
  version — never delete markers by hand.
- EN translations annotate proper nouns with 繁体 in brackets: "Song Jiang（宋江）".
  Done post-translation in annotateNames(); surname list + place-suffix regex.
- Every fetch failure must land in the `_failed` Set so the UI shows a Retry button.
  A fetch that errors without recording failure = the eternal stuck spinner bug.
- Firestore init keeps `experimentalAutoDetectLongPolling: true` — without it the SDK
  hangs forever (no error) behind some ad-blockers.
- Never call alert() from code that runs on page load (e.g. getRedirectResult catch).
  A blocking alert froze the whole app for users with blocked storage.
- Book IDs are shuihu / xiyou / sanguoyanyi / hongloumeng (not English names).

## Conventions
- UI is bilingual: every user-facing string needs isZh ? '中文' : 'English'.
- Mode pills are labeled 繁体 / 简体 / EN (not 文言文/白话文).
- URL routing: nav() pushes ?page=&book=&ch= — new pages must go through nav().
- User prefs (lang, text mode, reading settings) persist via saveUserPrefs() to
  localStorage + Firestore; new settings should hook into it.
- Cache-busting: bump the ?v= query in index.html when shipping JS changes that
  must reach users immediately.

## Gotchas
- OWNER_UID in app.js gates the admin feedback tab.
- Firestore rules: chapter_cache + chapter_cache_meta are public r/w; users/{uid}
  is auth-gated. New collections need a rule added in Firebase Console first.
- Groq API key in app.js powers only the chatbot/AI flashcards; translations use
  free Google Translate (translate.googleapis.com, chunked ≤600 chars).
- deploy.ps1 stages everything in this repo (git add .) and no-ops if nothing
  changed — safe to call after every edit.
