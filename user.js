/* ══ user.js — Firebase Auth + Firestore user data ══
   Drop your firebaseConfig below once you have it from Firebase console.
   Until then, all data saves to localStorage as fallback.
*/

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBOe8vBVnmNrw8orcC4KNPEdIB2v3hbEzE",
  authDomain: "classical-reader.firebaseapp.com",
  databaseURL: "https://classical-reader-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "classical-reader",
  storageBucket: "classical-reader.firebasestorage.app",
  messagingSenderId: "910375679933",
  appId: "1:910375679933:web:cfa8b5279505fb53e244d4"
};

/* ── Bootstrap Firebase ── */
let _db = null;
let _auth = null;

function firebaseReady() { return !!_db && !!_auth; }

(function initFirebase() {
  if (!FIREBASE_CONFIG || typeof firebase === 'undefined') return;
  firebase.initializeApp(FIREBASE_CONFIG);
  _auth = firebase.auth();
  _db   = firebase.firestore();
  // Firestore's default WebChannel streaming transport can hang indefinitely
  // (no error, never resolves) behind some ad-blockers/privacy extensions or
  // restrictive proxies that block its long-lived connection pattern. This
  // makes the SDK detect that case and transparently fall back to long-polling.
  try {
    _db.settings({ experimentalAutoDetectLongPolling: true, useFetchStreams: false });
  } catch (e) { console.warn('Firestore settings failed:', e); }
})();

/* ── Bootstrap Supabase (backs shared chapter_cache + feedback — Stage A of
   the Netlify/Firebase -> GitHub Pages/Supabase migration; auth + per-user
   data stay on Firebase until Google OAuth is set up in Supabase) ── */
const SUPABASE_URL = "https://xcniaumeckvlfiwnafno.supabase.co";
const SUPABASE_KEY = "sb_publishable_Z3Fz_4k-J5NKNX1aUKDzCA_tAMCxd86";
let _sb = null;
(function initSupabase() {
  if (typeof supabase === 'undefined') return;
  _sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
})();

/* ── User state ── */
const USER = {
  uid:               null,
  name:              null,
  photo:             null,
  progress:          {},   // { bookId: chapterIndex }
  startedChapters:   {},   // { bookId: Set<number> }
  completedChapters: {},   // { bookId: Set<number> }
  bookmarks:         {},   // { bookId: Set<number> }
  notes:             {},   // { "bookId_idx": noteText }
  highlights:        {},   // { "bookId_idx": [{id, quote, note, date}] }
  quizHistory:       [],
  chatLog:           [],
};

/* ── LocalStorage helpers (fallback + offline cache) ── */
function lsGet(key, def) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

function loadLocalData() {
  USER.progress          = lsGet('reader_progress', {});
  USER.bookmarks         = lsGet('reader_bookmarks', {});
  USER.notes             = lsGet('reader_notes', {});
  USER.highlights        = lsGet('reader_highlights', {});
  USER.quizHistory       = lsGet('reader_quiz_history', []);
  USER.chatLog           = lsGet('reader_chat_log', []);
  const cc               = lsGet('reader_completed', {});
  const sc               = lsGet('reader_started', {});
  USER.completedChapters = {};
  USER.startedChapters   = {};
  Object.keys(USER.bookmarks).forEach(k => { USER.bookmarks[k] = new Set(USER.bookmarks[k]); });
  Object.keys(cc).forEach(k => { USER.completedChapters[k] = new Set(cc[k]); });
  Object.keys(sc).forEach(k => { USER.startedChapters[k] = new Set(sc[k]); });
}

function saveLocalData() {
  lsSet('reader_progress', USER.progress);
  const bm = {}, cc = {}, sc = {};
  Object.keys(USER.bookmarks).forEach(k => { bm[k] = [...USER.bookmarks[k]]; });
  Object.keys(USER.completedChapters).forEach(k => { cc[k] = [...USER.completedChapters[k]]; });
  Object.keys(USER.startedChapters).forEach(k => { sc[k] = [...USER.startedChapters[k]]; });
  lsSet('reader_bookmarks', bm);
  lsSet('reader_completed', cc);
  lsSet('reader_started', sc);
  lsSet('reader_notes', USER.notes);
  lsSet('reader_highlights', USER.highlights);
  lsSet('reader_quiz_history', USER.quizHistory);
  lsSet('reader_chat_log', USER.chatLog);
}

/* ── Firestore helpers ── */
async function loadCloudData(uid) {
  if (!firebaseReady()) return;
  try {
    const doc = await _db.collection('users').doc(uid).get();
    if (doc.exists) {
      const d = doc.data();
      USER.progress    = d.progress    || {};
      USER.quizHistory = d.quizHistory || [];
      USER.chatLog     = d.chatLog     || [];
      const bm = d.bookmarks || {}, cc = d.completedChapters || {}, sc = d.startedChapters || {};
      Object.keys(bm).forEach(k => { USER.bookmarks[k] = new Set(bm[k]); });
      Object.keys(cc).forEach(k => { USER.completedChapters[k] = new Set(cc[k]); });
      Object.keys(sc).forEach(k => { USER.startedChapters[k] = new Set(sc[k]); });
      USER.notes      = d.notes || {};
      USER.highlights = d.highlights || {};
      // Restore user preferences (lang, text mode, reading settings)
      if (d.prefs && typeof applyPrefsFromCloud === 'function') {
        applyPrefsFromCloud(d.prefs);
      }
      saveLocalData();
    }
  } catch(e) { console.warn('Cloud load failed, using local:', e); }
}

async function saveCloudData() {
  if (!firebaseReady() || !USER.uid) return;
  const bm = {}, cc = {}, sc = {};
  Object.keys(USER.bookmarks).forEach(k => { bm[k] = [...USER.bookmarks[k]]; });
  Object.keys(USER.completedChapters).forEach(k => { cc[k] = [...USER.completedChapters[k]]; });
  Object.keys(USER.startedChapters).forEach(k => { sc[k] = [...USER.startedChapters[k]]; });
  try {
    await _db.collection('users').doc(USER.uid).set({
      progress:          USER.progress,
      bookmarks:         bm,
      startedChapters:   sc,
      completedChapters: cc,
      notes:             USER.notes,
      highlights:        USER.highlights,
      quizHistory:       USER.quizHistory,
      chatLog:           USER.chatLog,
      updatedAt:         new Date().toISOString(),
      // prefs saved separately via saveUserPrefs() to avoid overwriting on every data save
    }, { merge: true });
  } catch(e) { console.warn('Cloud save failed:', e); }
}

/* ── Public API ── */

// Save reading position
function saveProgress(bookId, chapterIndex) {
  USER.progress[bookId] = chapterIndex;
  saveLocalData();
  saveCloudData();
}

// Get last-read chapter index (-1 if never read)
function getProgress(bookId) {
  return USER.progress[bookId] ?? -1;
}

// Mark a chapter as started (opened)
function markChapterStarted(bookId, chapterIdx) {
  if (!USER.startedChapters[bookId]) USER.startedChapters[bookId] = new Set();
  if (USER.startedChapters[bookId].has(chapterIdx)) return;
  USER.startedChapters[bookId].add(chapterIdx);
  saveLocalData(); saveCloudData();
}

function isChapterStarted(bookId, chapterIdx) {
  return USER.startedChapters[bookId]?.has(chapterIdx) ?? false;
}

// Mark a chapter as fully read (scrolled to end)
function markChapterComplete(bookId, chapterIdx) {
  if (!USER.completedChapters[bookId]) USER.completedChapters[bookId] = new Set();
  if (USER.completedChapters[bookId].has(chapterIdx)) return; // already saved
  USER.completedChapters[bookId].add(chapterIdx);
  saveLocalData();
  saveCloudData();
}

function isChapterComplete(bookId, chapterIdx) {
  return USER.completedChapters[bookId]?.has(chapterIdx) ?? false;
}

function getCompletedCount(bookId) {
  return USER.completedChapters[bookId]?.size ?? 0;
}

// Toggle bookmark on a chapter
function toggleBookmark(bookId, chapterIndex) {
  if (!USER.bookmarks[bookId]) USER.bookmarks[bookId] = new Set();
  const bm = USER.bookmarks[bookId];
  if (bm.has(chapterIndex)) { bm.delete(chapterIndex); }
  else { bm.add(chapterIndex); }
  saveLocalData();
  saveCloudData();
  return bm.has(chapterIndex);
}

function isBookmarked(bookId, chapterIndex) {
  return USER.bookmarks[bookId]?.has(chapterIndex) ?? false;
}

function getBookmarks(bookId) {
  return [...(USER.bookmarks[bookId] || [])].sort((a, b) => a - b);
}

// Notes
function saveNote(bookId, chapterIndex, text) {
  const key = `${bookId}_${chapterIndex}`;
  if (text.trim()) { USER.notes[key] = text.trim(); }
  else { delete USER.notes[key]; }
  saveLocalData();
  saveCloudData();
}

function getNote(bookId, chapterIndex) {
  return USER.notes[`${bookId}_${chapterIndex}`] || '';
}

function hasNote(bookId, chapterIndex) {
  return !!USER.notes[`${bookId}_${chapterIndex}`];
}

// Highlights (inline passage comments)
function saveHighlight(bookId, chapterIdx, quote, note) {
  const key = `${bookId}_${chapterIdx}`;
  if (!USER.highlights[key]) USER.highlights[key] = [];
  USER.highlights[key].push({ id: Date.now(), quote, note, date: new Date().toISOString() });
  saveLocalData(); saveCloudData();
}

function deleteHighlight(bookId, chapterIdx, id) {
  const key = `${bookId}_${chapterIdx}`;
  if (!USER.highlights[key]) return;
  USER.highlights[key] = USER.highlights[key].filter(h => h.id !== id);
  if (!USER.highlights[key].length) delete USER.highlights[key];
  saveLocalData(); saveCloudData();
}

function getHighlights(bookId, chapterIdx) {
  return USER.highlights[`${bookId}_${chapterIdx}`] || [];
}

// Quiz history
function saveQuizResult(bookId, score, total, mode) {
  USER.quizHistory.push({ bookId, score, total, mode: mode || 'Classic', date: new Date().toISOString() });
  if (USER.quizHistory.length > 200) USER.quizHistory = USER.quizHistory.slice(-200);
  saveLocalData();
  saveCloudData();
}

// Chat log
function saveChatEntry(bookId, chapterIdx, question, answer) {
  USER.chatLog.push({ bookId: bookId || null, chapterIdx: chapterIdx ?? null, question, answer, date: new Date().toISOString() });
  if (USER.chatLog.length > 100) USER.chatLog = USER.chatLog.slice(-100);
  saveLocalData();
  saveCloudData();
}

/* ── Auth ── */
function signInWithGoogle() {
  if (!firebaseReady()) {
    alert('Firebase not configured yet. Your data is saved locally on this device.');
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  _auth.signInWithPopup(provider).catch(e => {
    if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') {
      // Popup blocked, or the popup's storage/IndexedDB access was restricted
      // (common with Chrome's storage partitioning + some privacy extensions).
      // Redirect-based sign-in stays in the same browsing context and avoids
      // this class of storage-access error entirely.
      _auth.signInWithRedirect(provider).catch(re => {
        alert('Sign-in error: ' + re.message);
      });
    } else if (e.code === 'auth/unauthorized-domain') {
      alert('Sign-in failed: add "' + location.hostname + '" to Firebase Console → Authentication → Settings → Authorized domains.');
    } else if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
      alert('Sign-in error: ' + e.message);
    }
  });
}

function signOut() {
  if (firebaseReady()) _auth.signOut();
  USER.uid = null; USER.name = null; USER.photo = null;
  renderUserBadge();
}

/* ── Login prompt modal ── */
function showLoginPrompt() {
  let el = document.getElementById('login-modal');
  if (!el) {
    el = document.createElement('div');
    el.id = 'login-modal';
    document.body.appendChild(el);
  }
  el.innerHTML = `
    <div class="login-modal-backdrop" onclick="closeLoginPrompt()"></div>
    <div class="login-modal-box">
      <button class="login-modal-close" onclick="closeLoginPrompt()">✕</button>
      <div class="login-modal-icon">🔐</div>
      <h3 class="login-modal-title">Sign in required</h3>
      <p class="login-modal-desc">This feature saves your data across all your devices. Sign in with Google to enable bookmarks, notes, and reading progress sync.</p>
      <button class="login-modal-btn" onclick="closeLoginPrompt();signInWithGoogle();">
        <svg width="18" height="18" viewBox="0 0 18 18" style="vertical-align:middle;margin-right:8px"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z"/></svg>
        Sign in with Google
      </button>
    </div>`;
  el.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLoginPrompt() {
  const el = document.getElementById('login-modal');
  if (el) el.style.display = 'none';
  document.body.style.overflow = '';
}

function renderUserBadge() {
  const el = document.getElementById('user-badge');
  const libBtn = document.getElementById('library-btn');
  if (!el) return;
  if (USER.uid) {
    el.innerHTML = `
      <button class="user-lib-link" onclick="nav('library',null,null)" title="My Library">
        <img src="${USER.photo || ''}" class="user-avatar" onerror="this.style.display='none'" />
        <span class="user-name">${USER.name ? USER.name.split(' ')[0] : 'Me'}</span>
      </button>
      <button class="user-signout" onclick="signOut()">Sign out</button>`;
    if (libBtn) libBtn.style.display = 'inline-flex';
  } else {
    el.innerHTML = firebaseReady()
      ? `<button class="user-signin" onclick="signInWithGoogle()">🔑 Sign in with Google</button>`
      : `<span class="user-local" title="Data saved on this device only">💾 Local mode</span>`;
    if (libBtn) libBtn.style.display = 'none';
  }
}

/* ── Init ── */
loadLocalData();

document.addEventListener('DOMContentLoaded', () => {
  if (!firebaseReady()) { renderUserBadge(); return; }

  // Handle redirect result (fires after Google redirects back to the app).
  // This runs on EVERY page load, not just after a sign-in attempt — so it
  // must never show a blocking alert() for errors the user didn't trigger.
  // A native alert() halts all JS execution until dismissed, which made the
  // entire app appear frozen for anyone whose browser blocks Firebase's
  // storage access (the environment-not-supported error below).
  _auth.getRedirectResult().then(result => {
    if (result && result.user) {
      console.log('Redirect sign-in success:', result.user.displayName);
    }
  }).catch(e => {
    console.error('Redirect sign-in error:', e.code, e.message);
    if (e.code === 'auth/unauthorized-domain') {
      alert('Sign-in failed: this domain is not authorised in Firebase.\n\nGo to Firebase Console → Authentication → Settings → Authorized domains and add:\n' + location.hostname);
    }
    // auth/operation-not-supported-in-this-environment and other errors here
    // are expected on plain page loads (no redirect was pending) — log only.
  });

  _auth.onAuthStateChanged(async user => {
    if (user) {
      USER.uid   = user.uid;
      USER.name  = user.displayName;
      USER.photo = user.photoURL;
      await loadCloudData(user.uid);
    } else {
      USER.uid = null; USER.name = null; USER.photo = null;
    }
    renderUserBadge();
    if (typeof render === 'function') render();
  });
});
