# classical-reader — 四大名著 reading app
Live: https://chineseclassics.netlify.app (Netlify, auto-deploys on git push).

## IN PROGRESS: migrating Netlify→GitHub Pages and Firebase→Supabase

**Stage A (chapter_cache + feedback → Supabase): DONE.** fsLoadCache/fsSaveCache
and the feedback functions now read/write Supabase (SUPABASE_URL/SUPABASE_KEY in
user.js). All 448 existing Firestore chapter_cache docs were copied over (script
was one-time, not committed). The three legacy one-time Firestore-cleanup
functions (applyOneTimeCacheFixes, wipeAllEnglishCacheOnce, wipeNavJunkOnce) and
their stripNavJunk helper were deleted — they existed only to repair corrupted
historical data, which doesn't exist in the fresh Supabase copy.

**Stage B (auth + per-user data → Supabase): NOT STARTED.** user.js's
signInWithGoogle/signOut/onAuthStateChanged/loadCloudData/saveCloudData and the
two remaining `_db.collection('users')...` calls in app.js (saveUserPrefs,
confirmReset) still run on Firebase — intentionally, until Google OAuth is
configured in Supabase (Authentication → Providers → Google, needs a Google
Cloud OAuth Client ID/Secret — can reuse the one Firebase Auth already has, or
make a new one) and its redirect URL is allowlisted. Don't migrate this half-way;
existing users' Firestore `users/{uid}` docs also need copying to the `user_data`
table (same pattern as the chapter_cache migration script) before cutover.

**GitHub Pages**: still blocked on repo Settings → Pages → Source: "GitHub
Actions" (manual toggle, not doable via git). Once done, flip
.github/workflows/deploy.yml's `on:` back to `push: branches: [master]` and
verify with curl before trusting brendanlok.github.io/classical-reader — it
404s until this is done. Whichever domain ends up live needs adding to
Firebase Console → Auth → Authorized domains (Supabase's auth domain
allowlist too, once Stage B lands) or sign-in breaks there.

manifest.json/sw.js already use relative paths so they work at either a root
domain or a /classical-reader/ subpath without changes.

## What it is
Vanilla JS single-page app (no framework, no build step) for reading the Four Great
Classical Novels in 繁体 / 简体 / English, with Google sign-in, per-user progress,
notes/highlights, flashcards, quizzes, an AI chatbot, and a feedback form.

## Files
- index.html — shell + PWA tags; scripts loaded with ?v= cache-buster query
- app.js     — everything: state, router, rendering, fetching, caching (~2300 lines)
- user.js    — Firebase init (auth + users/{uid}, Stage B pending), Supabase init
  (chapter_cache + feedback, Stage A done)
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
- Firebase Auth init keeps `experimentalAutoDetectLongPolling: true` on the Firestore
  instance (still used for auth's users/{uid} doc until Stage B) — without it the
  SDK hangs forever (no error) behind some ad-blockers.
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
