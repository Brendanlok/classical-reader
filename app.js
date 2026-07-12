/* ══ STATE ══ */
/* ── Load persisted user preferences (lang, textMode, readingPrefs) ── */
const _savedPrefs = (() => {
  try { return JSON.parse(localStorage.getItem('reader_user_prefs') || 'null'); } catch { return null; }
})() || {};

const state = {
  lang: _savedPrefs.lang || 'en',
  page: 'home',
  book: null,
  chapter: null,
  fc:  { index: 0, flipped: false, filter: 'All', deck: [], aiMode: false, aiLoading: false },
  mcq: { index: 0, answered: false, chosen: -1, score: 0, total: 0, done: false, deck: [], aiMode: false, aiLoading: false },
  apiKey: localStorage.getItem('groq_api_key') || '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',
  chat: { open: false, messages: [], loading: false },
  libraryTab: 'progress',
  notesSortBy: 'recent',
  notesOpen: false,
  highlightPopup: null,
  readingPrefsOpen: false,
  preferredTextMode: _savedPrefs.preferredTextMode || null, // user's chosen default text mode
  readingPrefs: _savedPrefs.readingPrefs || { size: 'md', font: 'serif', spacing: 'normal', theme: 'cream' },
  textMode: null,
  reachedEnd: false,
};

/* ══ CLASSICAL CHINESE BOOK ARTWORK (SVG) ══ */
const BOOK_ART = {
  shuihu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 170" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%">
    <path d="M0 130 L45 75 L85 100 L130 55 L175 80 L220 45 L265 68 L300 40 L300 170 L0 170Z" fill="rgba(255,255,255,0.07)"/>
    <path d="M0 148 Q30 138 60 148 Q90 158 120 148 Q150 138 180 148 Q210 158 240 148 Q270 138 300 148 L300 170 L0 170Z" fill="rgba(255,255,255,0.13)"/>
    <path d="M0 158 Q30 152 60 158 Q90 164 120 158 Q150 152 180 158 Q210 164 240 158 Q270 152 300 158 L300 170 L0 170Z" fill="rgba(255,255,255,0.1)"/>
    <line x1="18" y1="170" x2="14" y2="95" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-linecap="round"/>
    <path d="M14 95 Q4 85 14 78 Q24 72 18 62" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M14 95 Q24 88 20 78" stroke="rgba(255,255,255,0.15)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <line x1="282" y1="170" x2="286" y2="98" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-linecap="round"/>
    <path d="M286 98 Q296 88 286 81 Q276 75 282 65" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <circle cx="150" cy="28" r="2" fill="rgba(255,255,255,0.45)"/>
    <circle cx="163" cy="18" r="1.3" fill="rgba(255,255,255,0.35)"/>
    <circle cx="137" cy="17" r="1.3" fill="rgba(255,255,255,0.35)"/>
    <circle cx="153" cy="10" r="1.8" fill="rgba(255,255,255,0.3)"/>
    <circle cx="140" cy="23" r="1" fill="rgba(255,255,255,0.25)"/>
    <circle cx="168" cy="25" r="1" fill="rgba(255,255,255,0.25)"/>
    <circle cx="172" cy="14" r="0.8" fill="rgba(255,255,255,0.2)"/>
    <circle cx="130" cy="10" r="0.8" fill="rgba(255,255,255,0.2)"/>
  </svg>`,

  xiyou: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 170" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%">
    <circle cx="248" cy="38" r="28" fill="rgba(255,255,255,0.1)"/>
    <circle cx="248" cy="38" r="18" fill="rgba(255,255,255,0.15)"/>
    <path d="M0 170 L55 78 L95 105 L145 42 L195 82 L245 125 L300 72 L300 170Z" fill="rgba(255,255,255,0.09)"/>
    <path d="M0 170 L35 108 L75 128 L125 78 L175 108 L225 140 L275 108 L300 122 L300 170Z" fill="rgba(255,255,255,0.11)"/>
    <path d="M38 52 Q43 42 53 47 Q53 37 63 40 Q68 32 78 37 Q83 32 88 37 Q93 40 88 47 Q98 47 96 54 Q86 58 73 54 Q63 60 53 54 Q43 58 38 52Z" fill="rgba(255,255,255,0.18)"/>
    <path d="M155 22 Q158 15 165 18 Q165 11 172 14 Q175 8 182 12 Q185 8 189 12 Q192 14 189 19 Q196 19 194 24 Q188 27 180 24 Q173 29 165 24 Q158 27 155 22Z" fill="rgba(255,255,255,0.15)"/>
    <line x1="28" y1="170" x2="46" y2="72" stroke="rgba(255,255,255,0.28)" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="40" y="67" width="13" height="9" rx="2" fill="rgba(255,255,255,0.28)"/>
    <rect x="40" y="112" width="13" height="9" rx="2" fill="rgba(255,255,255,0.22)"/>
  </svg>`,

  sanguoyanyi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 170" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%">
    <path d="M10 170 L60 65 L110 170Z" fill="rgba(255,255,255,0.07)"/>
    <path d="M95 170 L150 42 L205 170Z" fill="rgba(255,255,255,0.09)"/>
    <path d="M190 170 L245 62 L300 170Z" fill="rgba(255,255,255,0.07)"/>
    <line x1="95" y1="145" x2="205" y2="48" stroke="rgba(255,255,255,0.28)" stroke-width="3" stroke-linecap="round"/>
    <line x1="205" y1="145" x2="95" y2="48" stroke="rgba(255,255,255,0.28)" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="150" cy="97" rx="9" ry="5" fill="rgba(255,255,255,0.22)" transform="rotate(-45 150 97)"/>
    <line x1="18" y1="170" x2="18" y2="82" stroke="rgba(255,255,255,0.28)" stroke-width="2" stroke-linecap="round"/>
    <path d="M18 82 L46 91 L18 100Z" fill="rgba(255,255,255,0.28)"/>
    <line x1="282" y1="170" x2="282" y2="82" stroke="rgba(255,255,255,0.28)" stroke-width="2" stroke-linecap="round"/>
    <path d="M282 82 L254 91 L282 100Z" fill="rgba(255,255,255,0.28)"/>
    <circle cx="60" cy="45" r="3.5" fill="rgba(255,255,255,0.45)"/>
    <circle cx="150" cy="28" r="3.5" fill="rgba(255,255,255,0.45)"/>
    <circle cx="240" cy="42" r="3.5" fill="rgba(255,255,255,0.45)"/>
  </svg>`,

  hongloumeng: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 170" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%">
    <circle cx="238" cy="42" r="32" fill="rgba(255,255,255,0.1)"/>
    <circle cx="238" cy="42" r="22" fill="rgba(255,255,255,0.14)"/>
    <path d="M98 170 L98 112 L78 112 L128 80 L178 112 L158 112 L158 170Z" fill="rgba(255,255,255,0.09)"/>
    <path d="M72 84 Q128 57 184 84Z" fill="rgba(255,255,255,0.14)"/>
    <path d="M62 84 Q128 50 194 84Z" fill="rgba(255,255,255,0.08)"/>
    <line x1="22" y1="170" x2="52" y2="92" stroke="rgba(255,255,255,0.24)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="52" y1="92" x2="72" y2="62" stroke="rgba(255,255,255,0.22)" stroke-width="2" stroke-linecap="round"/>
    <line x1="52" y1="92" x2="32" y2="72" stroke="rgba(255,255,255,0.22)" stroke-width="2" stroke-linecap="round"/>
    <line x1="72" y1="62" x2="92" y2="40" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="92" cy="37" r="4.5" fill="rgba(255,255,255,0.28)"/>
    <circle cx="100" cy="30" r="3" fill="rgba(255,255,255,0.22)"/>
    <circle cx="83" cy="30" r="3" fill="rgba(255,255,255,0.22)"/>
    <circle cx="32" cy="70" r="4" fill="rgba(255,255,255,0.26)"/>
    <circle cx="24" cy="64" r="2.5" fill="rgba(255,255,255,0.2)"/>
    <circle cx="40" cy="63" r="2.5" fill="rgba(255,255,255,0.2)"/>
    <ellipse cx="205" cy="82" rx="3" ry="5.5" fill="rgba(255,255,255,0.18)" transform="rotate(-25 205 82)"/>
    <ellipse cx="222" cy="105" rx="2.5" ry="4.5" fill="rgba(255,255,255,0.14)" transform="rotate(18 222 105)"/>
    <ellipse cx="268" cy="128" rx="2" ry="4" fill="rgba(255,255,255,0.12)" transform="rotate(-12 268 128)"/>
  </svg>`,
};

/* ══ FULL TEXT — WIKISOURCE FETCH + CACHE ══ */
const WS_TITLES = {
  shuihu:      '水滸傳_(120回本)',
  xiyou:       '西遊記',
  sanguoyanyi: '三國演義',
  hongloumeng: '紅樓夢',
};

const _fetching = new Set(); // in-flight requests
const _failed   = new Set(); // keys that failed — don't auto-retry

function wsPage(bookId, chapterIdx) {
  const ch = BOOKS[bookId]?.chapters[chapterIdx];
  const num = String(ch ? ch.id : chapterIdx + 1).padStart(3, '0');
  return `${WS_TITLES[bookId]}/第${num}回`;
}

/* Resolve MediaWiki "-{...}-" language-variant syntax (used heavily in
   Dream of the Red Chamber's wikitext), keeping the last/most relevant
   segment instead of the raw markup. Must run BEFORE template stripping —
   the single braces inside -{...}- confuse the {{...}} brace-counting regex. */
function resolveVariantSyntax(text) {
  return text.replace(/-\{([^{}]*)\}-/g, (_, inner) => {
    const noPipePrefix = inner.includes('|') ? inner.split('|').pop() : inner;
    const segs = noPipePrefix.split(';').map(s => s.trim()).filter(Boolean);
    const last = segs[segs.length - 1] || '';
    return last.includes(':') ? last.split(':').pop() : last;
  });
}

/* Strip/unwrap {{...}} templates with unlimited nesting depth. Pure short
   metadata templates (e.g. {{回目录}}) are deleted; templates whose body
   looks like wrapped prose (has a pipe/colon and longer text) are unwrapped
   to their last parameter instead of being deleted outright, so real
   chapter content (e.g. author's preface) isn't lost. */
// Pure structural/metadata templates (Wikisource page headers, nav boxes,
// category tags) — delete entirely, never unwrap. Unwrapping these leaks
// raw field names like "notes = " as visible text, since they have no
// single meaningful "last parameter" the way a formatting wrapper does.
const METADATA_TEMPLATE_NAMES = new Set(['header', 'navigation', 'nav', 'pagequality']);

function stripTemplates(text) {
  let prev;
  do {
    prev = text;
    text = text.replace(/\{\{([^{}]*)\}\}/g, (_, body) => {
      const name = body.trim().match(/^([^\n|]+)/)?.[1]?.trim().toLowerCase() || '';
      if (METADATA_TEMPLATE_NAMES.has(name)) return '';
      if (!body.includes('|') && !body.includes(':') && body.length <= 8) return '';
      const parts = body.split(/[|:]/);
      return parts[parts.length - 1];
    });
  } while (text !== prev);
  return text;
}

// MediaWiki's leading ":" is indent/blockquote syntax, commonly used on
// Wikisource for poem/verse lines as an alternative to <poem> tags. Convert
// consecutive ":"-prefixed lines into their own paragraphs, colons stripped,
// so they render like the <poem>-tag poems do (one line per paragraph).
function convertColonPoemLines(text) {
  return text.replace(/(?:^|\n)((?::[^\n]*\n?){2,})/g, (m, block) => {
    const lines = block.split('\n').map(l => l.replace(/^:+\s*/, '').trim()).filter(Boolean);
    return lines.length ? '\n\n' + lines.join('\n\n') + '\n\n' : m;
  });
}

function cleanWikitext(raw) {
  let text = resolveVariantSyntax(raw)
    .replace(/<\/?onlyinclude>/gi, '')
    .replace(/<\/?includeonly>/gi, '')
    .replace(/<noinclude>[\s\S]*?<\/noinclude>/gi, '')
    .replace(/<poem>([\s\S]*?)<\/poem>/gi, (_, content) =>
      '\n\n' + content.split('\n').filter(l => l.trim()).map(l => l.trim()).join('\n\n') + '\n\n'
    )
    .replace(/<[^>]+>/g, '');
  text = convertColonPoemLines(text);
  text = stripTemplates(text);
  return text
    .replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, '$1')
    .replace(/\[[^\]]*\s([^\]]*)\]/g, '$1')
    .replace(/'{2,3}/g, '')
    .replace(/={2,6}([^=]+)={2,6}/g, '$1')
    .replace(/__[A-Z]+__/g, '')
    .replace(/\[\[分類:[^\]]*\]\]/g, '')
    .replace(/\[\[Category:[^\]]*\]\]/g, '')
    // Strip Wikisource chapter-nav junk (上一回/回目录/下一回 clusters, optionally
    // followed by a "----" separator). Not line-anchored — the nav links often
    // sit inline with the chapter content with no newline in between.
    .replace(/[　\s]*(?:(?:上一回|下一回|回目录|目录)[　\s]*){1,4}-{2,}[　\s]*/g, '')
    .replace(/(?:(?:上一回|下一回|回目录|目录)[　\s]*){2,4}/g, '')
    .replace(/-{3,}/g, '')
    // Strip leading em-spaces/whitespace per line (CSS handles indent)
    .replace(/^[　\t ]+/gm, '')
    // Replace mid-line sequences of em-spaces with a line break (paired couplets)
    .replace(/[　 ]{3,}/g, '\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const CACHE_VER = 'v4';
function cacheKey(type, bookId, chapterIdx) {
  return `${type}_${CACHE_VER}_${bookId}_${chapterIdx}`;
}

/* In-memory cache for chapter text (繁体/简体/EN), NOT localStorage.
   Firestore is already the permanent shared cache across all users and
   devices; localStorage was a redundant local optimization that filled its
   ~5-10MB quota after preloading all ~448 chapters, after which every write
   silently failed and the app could never satisfy its own cache checks —
   causing an infinite fetch loop that looked like a stuck spinner. An
   in-memory Map has no such quota (bounded only by RAM) and still resets
   naturally on reload, which is fine since Firestore is the source of truth. */
const _memCache = new Map();

function getCached(type, bookId, chapterIdx) {
  return _memCache.get(cacheKey(type, bookId, chapterIdx)) || null;
}

function setCached(type, bookId, chapterIdx, text) {
  _memCache.set(cacheKey(type, bookId, chapterIdx), text);
}

/* ══ FIRESTORE SHARED TRANSLATION CACHE ══
   Translations saved here are shared across ALL users — once any user reads a chapter,
   it's permanently cached for everyone. No re-translation ever needed.
*/
function isLikelyTraditional(text) {
  // Compare frequency of common trad vs simplified character variants
  const trad = '傳來個國時會對說這還發現問題從業後長沒點應該樣們東';
  const simp = '传来个国时会对说这还发现问题从业后长没点应该样们东';
  let t = 0, s = 0;
  for (const ch of text) {
    if (trad.includes(ch)) t++;
    if (simp.includes(ch)) s++;
  }
  return t > s;
}

async function fsLoadCache(bookId, chapterIdx) {
  if (typeof _db === 'undefined' || !_db) return false;
  try {
    const doc = await _db.collection('chapter_cache').doc(`${bookId}_${chapterIdx}`).get();
    if (!doc.exists) return false;
    const d = doc.data();
    // Validate bh cache: reject if it's still traditional Chinese (bad translation)
    if (d.bh && isLikelyTraditional(d.bh)) {
      delete d.bh;
      _db.collection('chapter_cache').doc(`${bookId}_${chapterIdx}`)
        .update({ bh: firebase.firestore.FieldValue.delete() }).catch(() => {});
    }
    ['ws','bh','en'].forEach(t => { if (d[t]) setCached(t, bookId, chapterIdx, d[t]); });
    return !!(d.ws || d.bh || d.en);
  } catch { return false; }
}

async function fsSaveCache(bookId, chapterIdx, type, text) {
  if (typeof _db === 'undefined' || !_db || !text) return;
  try {
    await _db.collection('chapter_cache').doc(`${bookId}_${chapterIdx}`).set(
      { [type]: text }, { merge: true }
    );
  } catch {}
}

/* ══ GOOGLE TRANSLATE (free, no API key required) ══ */
async function gtranslate(text, targetLang) {
  // Split into ~600-char chunks on sentence boundaries to stay under Google's limit
  const sentences = text.match(/[^。！？\n]+[。！？\n]*/g) || [text];
  const chunks = [];
  let cur = '';
  for (const s of sentences) {
    if (cur.length + s.length > 600 && cur) { chunks.push(cur); cur = s; }
    else cur += s;
  }
  if (cur) chunks.push(cur);

  const parts = [];
  for (let i = 0; i < chunks.length; i++) {
    const resp = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-TW&tl=${targetLang}&dt=t&q=${encodeURIComponent(chunks[i])}`
    );
    const data = await resp.json();
    const translated = (data[0] || []).map(x => x?.[0] || '').join('');
    parts.push(translated);
    if (i < chunks.length - 1) await new Promise(r => setTimeout(r, 120)); // avoid rate-limit
  }
  return parts.join('\n\n');
}

/* ══ WENYAN FETCH (Firestore shared cache first, Wikisource as fallback) ══ */
async function fetchWenyan(bookId, chapterIdx) {
  const key = cacheKey('ws', bookId, chapterIdx);
  if (_fetching.has(key)) return;
  if (getCached('ws', bookId, chapterIdx)) return;
  _fetching.add(key);
  render();
  try {
    // 1. Check Firestore — another user may have already fetched this chapter
    await fsLoadCache(bookId, chapterIdx);
    if (getCached('ws', bookId, chapterIdx)) return; // got it from cloud cache

    // 2. Not cached anywhere — fetch from Wikisource directly
    const page = wsPage(bookId, chapterIdx);
    const url = `https://zh.wikisource.org/w/api.php?action=parse&page=${encodeURIComponent(page)}&prop=wikitext&format=json&origin=*`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const resp = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    const data = await resp.json();
    const raw = data?.parse?.wikitext?.['*'] || '';
    if (raw) {
      const clean = cleanWikitext(raw);
      setCached('ws', bookId, chapterIdx, clean);
      fsSaveCache(bookId, chapterIdx, 'ws', clean); // save permanently so no one fetches it again
    } else {
      console.warn('Wikisource: no wikitext for', page);
      _failed.add(key);
    }
  } catch(e) {
    console.warn('Wikisource fetch failed:', e.message);
    _failed.add(key);
  } finally { _fetching.delete(key); render(); }
}

/* ══ PROPER NOUN ANNOTATION (EN only) — append original 繁体 in brackets ══ */
const COMMON_SURNAMES = '趙錢孫李周吳鄭王馮陳褚衛蔣沈韓楊朱秦尤許何呂施張孔曹嚴華金魏陶姜戚謝鄒喻柏水竇章雲蘇潘葛奚范彭郎魯韋昌馬苗鳳花方俞任袁柳酆鮑史唐費廉岑薛雷賀倪湯滕殷羅畢郝鄔安常樂於時傅皮卞齊康伍余元卜顧孟平黃和穆蕭尹姚邵汪祁毛禹狄米貝明臧計伏成戴談宋茅龐熊紀舒屈項祝董梁杜阮藍閔席季麻強賈路婁危江童顏郭梅盛林刁鍾徐邱駱高夏蔡田樊胡凌霍虞萬支柯昝管盧莫經房裘繆干解應宗丁宣賁鄧郁單杭洪包諸左石崔吉鈕龔程嵇邢滑裴陸榮翁荀羊於惠甄麴家封芮羿儲靳汲邴糜松井段富巫烏焦巴弓牧隗山谷車侯宓蓬全郗班仰秋仲伊宮寧仇欒暴甘鈄厲戎祖武符劉景詹束龍葉幸司韶郜黎薊薄印宿白懷蒲邰從鄂索咸籍賴卓藺屠蒙池喬陰鬱胥能蒼雙聞莘黨翟譚貢勞逄姬申扶堵冉宰酈雍卻璩桑桂濮牛壽通邊扈燕冀郟浦尚農溫別莊晏柴瞿閻充慕連茹習宦艾魚容向古易慎戈廖庾終暨居衡步都耿滿弘匡國文寇廣祿闕東歐殳沃利蔚越夔隆師鞏厙聶晁勾敖融冷訾辛闞那簡饒空曾毋沙乜養鞠須豐巢關蒯相查后荊紅游竺權逯蓋益桓公';

// Common place-name suffixes (山/寺/府/園/樓 etc.) — catches places and
// nicknames that don't follow the surname+given-name pattern (大觀園, 花果山…)
const PLACE_SUFFIXES = '山寺莊村府院館樓園城關州縣湖江河洞殿宮塔峰峽渡鎮坡崗泊澗谷潭灘庵觀塢嶺峒窟祠廟';

function extractNameCandidates(wenyan) {
  const surnameRe = new RegExp(`[${COMMON_SURNAMES}][\\u4e00-\\u9fa5]{1,2}`, 'g');
  const placeRe = new RegExp(`[\\u4e00-\\u9fa5]{1,3}[${PLACE_SUFFIXES}]`, 'g');
  const counts = {};
  let m;
  while ((m = surnameRe.exec(wenyan))) counts[m[0]] = (counts[m[0]] || 0) + 1;
  while ((m = placeRe.exec(wenyan))) counts[m[0]] = (counts[m[0]] || 0) + 1;
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 40);
}

async function annotateNames(wenyan, englishText) {
  try {
    const candidates = extractNameCandidates(wenyan);
    if (!candidates.length) return englishText;
    const translated = await gtranslate(candidates.join('\n'), 'en');
    const englishNames = translated.split('\n').map(s => s.trim()).filter(Boolean);
    let annotated = englishText;
    candidates.forEach((cn, i) => {
      const en = englishNames[i];
      if (!en || en.length < 2 || !/^[A-Z]/.test(en)) return;
      const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`\\b${escaped}\\b`);
      if (re.test(annotated)) annotated = annotated.replace(re, `${en}（${cn}）`);
    });
    return annotated;
  } catch (e) {
    console.warn('Name annotation failed:', e);
    return englishText;
  }
}

/* ══ TRANSLATION (Google Translate → Firestore permanent cache) ══ */
async function fetchTranslation(cacheType, bookId, chapterIdx) {
  const key = cacheKey(cacheType, bookId, chapterIdx);
  if (_fetching.has(key) || _failed.has(key)) return;
  if (getCached(cacheType, bookId, chapterIdx)) return;

  _fetching.add(key);
  render();

  try {
    // 1. Check Firestore — another user may have already translated this chapter
    await fsLoadCache(bookId, chapterIdx);
    if (getCached(cacheType, bookId, chapterIdx)) return; // got it from cloud cache

    // 2. Need the classical source text first
    if (!getCached('ws', bookId, chapterIdx)) await fetchWenyan(bookId, chapterIdx);
    const wenyan = getCached('ws', bookId, chapterIdx);
    if (!wenyan) { _failed.add(key); return; }

    // 3. Translate via Google Translate (free, no key)
    const targetLang = cacheType === 'en' ? 'en' : 'zh-CN';
    let result = await gtranslate(wenyan, targetLang);

    // For English, annotate proper nouns with original 繁体 in brackets
    if (cacheType === 'en' && result) {
      result = await annotateNames(wenyan, result);
    }

    if (result && result.trim().length > 50) {
      setCached(cacheType, bookId, chapterIdx, result);
      fsSaveCache(bookId, chapterIdx, cacheType, result); // save permanently to cloud
    } else {
      _failed.add(key);
    }
  } catch(e) {
    console.warn(`Translation failed (${cacheType}):`, e);
    _failed.add(key);
  } finally {
    _fetching.delete(key);
    render();
  }
}

function retryTranslation() {
  if (state.page !== 'reader' || state.chapter === null) return;
  const mode = effectiveMode();
  const cacheType = mode === 'wenyan' ? 'ws' : mode === 'baihua' ? 'bh' : 'en';
  _failed.delete(cacheKey(cacheType, state.book, state.chapter));
  if (mode === 'baihua') fetchBaihua(state.book, state.chapter);
  else if (mode === 'english') fetchEnglish(state.book, state.chapter);
  else fetchWenyan(state.book, state.chapter);
  render();
}

function fetchBaihua(bookId, chapterIdx) { return fetchTranslation('bh', bookId, chapterIdx); }
function fetchEnglish(bookId, chapterIdx) { return fetchTranslation('en', bookId, chapterIdx); }

function effectiveMode() {
  return state.textMode || state.preferredTextMode || (state.lang === 'en' ? 'english' : 'wenyan');
}

function setTextMode(mode) {
  state.textMode = mode;
  state.preferredTextMode = mode; // remember as preference for future chapters
  saveUserPrefs();
  if (mode === 'wenyan' && !getCached('ws', state.book, state.chapter)) {
    fetchWenyan(state.book, state.chapter);
  } else if (mode === 'baihua' && !getCached('bh', state.book, state.chapter)) {
    fetchBaihua(state.book, state.chapter);
  } else if (mode === 'english' && !getCached('en', state.book, state.chapter)) {
    fetchEnglish(state.book, state.chapter);
  }
  render();
}

/* Merge full chapters from chapters.js if available */
function mergeChapters() {
  if (typeof CHAPTERS === 'undefined') return;
  Object.keys(CHAPTERS).forEach(id => {
    if (BOOKS[id]) BOOKS[id].chapters = CHAPTERS[id];
  });
}

/* ══ i18n ══ */
const UI = {
  en: {
    subtitle:     'Four Great Classical Novels of Chinese Literature',
    readChapters: 'Read Chapters',
    flashcards:   'Flashcards',
    quiz:         'Quiz',
    home:         'Home',
    chapterList:  'All Chapters',
    prevCh:       '← Previous',
    nextCh:       'Next →',
    flip:         'Tap to flip',
    prev:         '← Prev',
    next:         'Next →',
    score:        'Score',
    of:           'of',
    explanation:  'Explanation:',
    restart:      'Restart',
    tryAgain:     'Try Again',
    nextQ:        'Next →',
    seeResults:   'See Results',
    all:          'All',
    chapters:     'chapters',
    cards:        'flashcards',
    questions:    'questions',
    chooseBook:   'Select a book to begin your journey',
    excellent:    '🏆 Excellent!',
    good:         '✅ Good!',
    keepStudying: '📖 Keep Reading!',
    langBtn:      '中文',
    backToBook:   'Back to Book',
  },
  zh: {
    subtitle:     '中国古典文学四大名著',
    readChapters: '阅读章节',
    flashcards:   '词汇卡片',
    quiz:         '知识测验',
    home:         '首页',
    chapterList:  '章节列表',
    prevCh:       '← 上一回',
    nextCh:       '下一回 →',
    flip:         '点击翻转',
    prev:         '← 上一张',
    next:         '下一张 →',
    score:        '得分',
    of:           '/',
    explanation:  '解析：',
    restart:      '重新开始',
    tryAgain:     '再试一次',
    nextQ:        '下一题 →',
    seeResults:   '查看结果',
    all:          '全部',
    chapters:     '回',
    cards:        '张词汇卡',
    questions:    '道题目',
    chooseBook:   '选择一本书，开始阅读之旅',
    excellent:    '🏆 优秀！',
    good:         '✅ 良好！',
    keepStudying: '📖 继续加油！',
    langBtn:      'English',
    backToBook:   '返回书目',
  },
};
const t = k => UI[state.lang][k] ?? k;

/* ══ URL ROUTING (deep links + browser back/forward) ══ */
function buildURLFromState() {
  const params = new URLSearchParams();
  if (state.page && state.page !== 'home') params.set('page', state.page);
  if (state.book) params.set('book', state.book);
  if (state.page === 'reader' && state.chapter !== null && state.chapter !== undefined) {
    params.set('ch', state.chapter);
  }
  const qs = params.toString();
  return qs ? `?${qs}` : location.pathname;
}

function pushURLState() {
  const url = buildURLFromState();
  if (location.search !== new URL(url, location.href).search) {
    history.pushState({ page: state.page, book: state.book, chapter: state.chapter }, '', url);
  }
}

function applyStateFromURL() {
  const params = new URLSearchParams(location.search);
  state.page = params.get('page') || 'home';
  state.book = params.get('book') || null;
  const chStr = params.get('ch');
  state.chapter = chStr !== null && chStr !== '' ? parseInt(chStr, 10) : null;
  state.reachedEnd = false;

  // Guard against malformed/hand-edited URLs pointing at a nonexistent book
  if (state.book && !BOOKS[state.book]) { state.page = 'home'; state.book = null; state.chapter = null; }
  render();
  window.scrollTo(0, 0);
  updateReadingProgress();
  const frame = document.getElementById('app-frame');
  if (frame) frame.scrollTop = 0;
  if (state.page === 'reader' && state.book && state.chapter !== null) {
    _prefetchAdjacent(state.book, state.chapter);
  }
}

/* ══ NAVIGATION ══ */
function nav(page, bookId, chapterIdx) {
  // Mark chapter complete when leaving if user reached the end
  if (state.page === 'reader' && state.chapter !== null && state.reachedEnd) {
    if (typeof markChapterComplete === 'function' && typeof USER !== 'undefined' && USER.uid) {
      markChapterComplete(state.book, state.chapter);
    }
  }
  // Track chapter as started when opening one
  if (page === 'reader' && chapterIdx !== null && chapterIdx !== undefined) {
    if (typeof markChapterStarted === 'function' && typeof USER !== 'undefined' && USER.uid) {
      markChapterStarted(bookId ?? state.book, chapterIdx);
    }
  }

  if (bookId !== undefined) state.book = bookId;
  if (chapterIdx !== undefined) state.chapter = chapterIdx;
  state.page = page;
  state.reachedEnd = false;

  // Reset mode to language default when opening a chapter (don't carry mode across chapters)
  if (page === 'reader' && chapterIdx !== null && chapterIdx !== undefined) {
    state.textMode = null;
  }

  if (page === 'flashcards') {
    state.fc.deck = []; state.fc.index = 0;
    state.fc.flipped = false; state.fc.filter = 'All';
  }
  if (page === 'mcq') {
    state.mcq.deck = []; state.mcq.done = false;
    state.mcq.index = 0; state.mcq.answered = false;
    state.mcq.chosen = -1; state.mcq.score = 0; state.mcq.total = 0;
  }
  render();
  window.scrollTo(0, 0);
  updateReadingProgress();
  const frame = document.getElementById('app-frame');
  if (frame) frame.scrollTop = 0;

  // Prefetch adjacent chapters in the background so they're ready when user navigates
  if (page === 'reader' && state.book && state.chapter !== null) {
    _prefetchAdjacent(state.book, state.chapter);
  }

  pushURLState();
}

function _prefetchAdjacent(bookId, chapterIdx) {
  const b = BOOKS[bookId];
  if (!b) return;
  const mode = effectiveMode();
  // Prefetch wenyan for next 2 + prev 1 chapters; also prefetch translation for next chapter
  const toWarm = [chapterIdx - 1, chapterIdx + 1, chapterIdx + 2].filter(
    i => i >= 0 && i < b.chapters.length
  );
  for (const i of toWarm) {
    if (!getCached('ws', bookId, i)) fetchWenyan(bookId, i);
  }
  // Prefetch translation for immediately adjacent chapters
  const transNeighbors = [chapterIdx - 1, chapterIdx + 1].filter(
    i => i >= 0 && i < b.chapters.length
  );
  for (const i of transNeighbors) {
    if (mode === 'english' && !getCached('en', bookId, i)) fetchEnglish(bookId, i);
    else if (mode === 'baihua' && !getCached('bh', bookId, i)) fetchBaihua(bookId, i);
  }
}


/* ══ BATCH PRE-LOADER — translates all chapters of all 4 books ══ */
const _preload = { running: false, total: 0, done: 0, bookDone: {}, stopped: false };

async function prefetchAll() {
  if (_preload.running) { _preload.stopped = true; return; } // toggle off
  const cacheType = effectiveMode() === 'english' ? 'en' : 'bh';

  // Build one queue per book (skip already-cached chapters)
  const queues = Object.keys(BOOKS).map(bookId => ({
    bookId,
    chapters: BOOKS[bookId].chapters
      .map((_, i) => i)
      .filter(i => !getCached(cacheType, bookId, i) && !_failed.has(cacheKey(cacheType, bookId, i))),
  })).filter(q => q.chapters.length > 0);

  if (!queues.length) return; // everything already cached

  _preload.running = true;
  _preload.stopped = false;
  _preload.total   = queues.reduce((s, q) => s + q.chapters.length, 0);
  _preload.done    = 0;
  _preload.bookDone = {};
  render();

  // Run all 4 book queues in parallel — sequential within each book to avoid rate limits
  await Promise.all(queues.map(async ({ bookId, chapters }) => {
    _preload.bookDone[bookId] = 0;
    for (const i of chapters) {
      if (_preload.stopped) break;
      await fetchTranslation(cacheType, bookId, i);
      _preload.done++;
      _preload.bookDone[bookId] = (_preload.bookDone[bookId] || 0) + 1;
      render();
    }
  }));

  _preload.running = false;
  render();
}

function renderPreloadBadge() {
  let el = document.getElementById('preload-badge');
  if (!el) {
    el = document.createElement('div');
    el.id = 'preload-badge';
    document.body.appendChild(el);
  }
  if (!_preload.running && _preload.done === 0) { el.innerHTML = ''; return; }

  const pct  = _preload.total > 0 ? Math.round((_preload.done / _preload.total) * 100) : 0;
  const done = _preload.done;
  const total = _preload.total;
  const isZh = state.lang === 'zh';

  if (!_preload.running && done > 0) {
    el.innerHTML = `<div class="preload-toast done" onclick="this.parentElement.innerHTML=''">
      ✓ ${isZh ? `${done} 章节翻译完成` : `${done} chapters pre-loaded`}
    </div>`;
    setTimeout(() => { if (el) el.innerHTML = ''; }, 4000);
    return;
  }

  el.innerHTML = `<div class="preload-toast">
    <div class="preload-spinner"></div>
    <div class="preload-info">
      <div class="preload-label">${isZh?'正在预加载翻译…':'Pre-loading translations…'}</div>
      <div class="preload-prog-wrap"><div class="preload-prog-fill" style="width:${pct}%"></div></div>
      <div class="preload-sub">${done} / ${total} · ${pct}%</div>
    </div>
    <button class="preload-stop" onclick="prefetchAll()" title="Stop">✕</button>
  </div>`;
}

function toggleLang() {
  state.lang = state.lang === 'en' ? 'zh' : 'en';
  state.textMode = null;
  state.preferredTextMode = null; // reset text mode preference when language switches
  saveUserPrefs();
  render();
}

/* ── Persist user preferences to localStorage + Firestore ── */
function saveUserPrefs() {
  const prefs = {
    lang: state.lang,
    preferredTextMode: state.preferredTextMode,
    readingPrefs: state.readingPrefs,
  };
  try { localStorage.setItem('reader_user_prefs', JSON.stringify(prefs)); } catch {}
  // Sync to Firestore so prefs restore on login from any device
  if (typeof _db !== 'undefined' && _db && typeof USER !== 'undefined' && USER.uid) {
    _db.collection('users').doc(USER.uid).set({ prefs }, { merge: true }).catch(() => {});
  }
}

function applyPrefsFromCloud(cloudPrefs) {
  if (!cloudPrefs) return;
  if (cloudPrefs.lang) state.lang = cloudPrefs.lang;
  if (cloudPrefs.preferredTextMode !== undefined) state.preferredTextMode = cloudPrefs.preferredTextMode;
  if (cloudPrefs.readingPrefs) state.readingPrefs = { ...state.readingPrefs, ...cloudPrefs.readingPrefs };
  try { localStorage.setItem('reader_user_prefs', JSON.stringify({
    lang: state.lang,
    preferredTextMode: state.preferredTextMode,
    readingPrefs: state.readingPrefs,
  })); } catch {}
}

/* ══ MAIN RENDER ══ */
function render() {
  renderToolbar();
  renderHeader();

  const c = document.getElementById('content');
  c.className = '';
  void c.offsetWidth;
  c.className = 'fade-in';

  const book = state.book ? BOOKS[state.book] : null;
  const accent = book ? book.color : '#8B1A1A';
  document.documentElement.style.setProperty('--accent', accent);

  switch (state.page) {
    case 'home':       c.innerHTML = renderHome();       break;
    case 'book-hub':   c.innerHTML = renderHub();        break;
    case 'reader':     c.innerHTML = renderReader();     break;
    case 'flashcards': c.innerHTML = renderFlashcards(); break;
    case 'mcq':        c.innerHTML = renderMCQ();        break;
    case 'library':    c.innerHTML = renderLibrary();    break;
  }
  renderFooter();
  renderCompanion();
  renderNotesPanel();
  renderPreloadBadge();
  renderReadingPrefsPanel();
  applyReadingPrefs();
}

/* ══ READING PREFERENCES ══ */
function applyReadingPrefs() {
  const p = state.readingPrefs;
  document.body.dataset.rSize    = p.size    || 'md';
  document.body.dataset.rFont    = p.font    || 'serif';
  document.body.dataset.rSpacing = p.spacing || 'normal';
  document.body.dataset.rTheme   = p.theme   || 'cream';
}

function setReadingPref(key, val) {
  state.readingPrefs[key] = val;
  applyReadingPrefs();
  saveUserPrefs();
  render();
}

function renderReadingPrefsPanel() {
  let el = document.getElementById('reading-prefs-panel');
  if (!el) { el = document.createElement('div'); el.id = 'reading-prefs-panel'; document.body.appendChild(el); }
  if (state.page !== 'reader' || !state.readingPrefsOpen) { el.innerHTML = ''; return; }

  const p = state.readingPrefs;
  const isZh = state.lang === 'zh';

  const sizeOpts = [
    { val:'sm', label:'A', style:'font-size:13px' },
    { val:'md', label:'A', style:'font-size:16px' },
    { val:'lg', label:'A', style:'font-size:20px' },
    { val:'xl', label:'A', style:'font-size:24px' },
  ];
  const fontOpts = [
    { val:'serif',  label: isZh?'衬线':'Serif',   style:'font-family:Georgia,serif' },
    { val:'sans',   label: isZh?'无衬线':'Sans',   style:'font-family:-apple-system,sans-serif' },
  ];
  const spacingOpts = [
    { val:'compact', label:'≡' },
    { val:'normal',  label:'≡', style:'letter-spacing:1px' },
    { val:'relaxed', label:'≡', style:'letter-spacing:3px' },
  ];
  const themeOpts = [
    { val:'cream', bg:'#faf6f0', label:'' },
    { val:'white', bg:'#ffffff', label:'' },
    { val:'warm',  bg:'#f5e6c8', label:'' },
    { val:'dark',  bg:'#1a1510', label:'' },
  ];

  el.innerHTML = `
    <div class="rp-backdrop" onclick="state.readingPrefsOpen=false;render()"></div>
    <div class="rp-panel">
      <div class="rp-row">
        <span class="rp-label">${isZh?'字号':'Size'}</span>
        <div class="rp-opts">
          ${sizeOpts.map(o => `<button class="rp-btn rp-size-btn${p.size===o.val?' active':''}" style="${o.style}" onclick="setReadingPref('size','${o.val}')">${o.label}</button>`).join('')}
        </div>
      </div>
      <div class="rp-row">
        <span class="rp-label">${isZh?'字体':'Font'}</span>
        <div class="rp-opts">
          ${fontOpts.map(o => `<button class="rp-btn${p.font===o.val?' active':''}" style="${o.style||''}" onclick="setReadingPref('font','${o.val}')">${o.label}</button>`).join('')}
        </div>
      </div>
      <div class="rp-row">
        <span class="rp-label">${isZh?'行距':'Spacing'}</span>
        <div class="rp-opts">
          ${spacingOpts.map(o => `<button class="rp-btn rp-spacing-btn${p.spacing===o.val?' active':''}" style="${o.style||''}" onclick="setReadingPref('spacing','${o.val}')">${o.label}</button>`).join('')}
        </div>
      </div>
      <div class="rp-row">
        <span class="rp-label">${isZh?'背景':'Theme'}</span>
        <div class="rp-opts">
          ${themeOpts.map(o => `<button class="rp-btn rp-theme-btn${p.theme===o.val?' active':''}" style="background:${o.bg}" onclick="setReadingPref('theme','${o.val}')"></button>`).join('')}
        </div>
      </div>
    </div>`;
}

function renderFeedbackTab() {
  let el = document.getElementById('feedback-tab');
  if (!el) {
    el = document.createElement('div');
    el.id = 'feedback-tab';
    document.body.appendChild(el);
  }
  const isZh = state.lang === 'zh';
  el.innerHTML = `<button class="feedback-side-tab" onclick="showFeedback()">${isZh ? '反馈' : 'Feedback'}</button>`;
}

function renderToolbar() {
  const book = state.book ? BOOKS[state.book] : null;
  const isZh = state.lang === 'zh';
  const hasBreadcrumb = state.page !== 'home';
  const isReader = state.page === 'reader' && state.chapter !== null;
  const rBook = isReader && state.book ? BOOKS[state.book] : null;
  const rCh   = isReader && rBook ? rBook.chapters[state.chapter] : null;

  const breadcrumb = hasBreadcrumb ? `
    <nav class="breadcrumb">
      <button onclick="nav('home',null,null)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> ${t('home')}</button>
      ${book ? `<span class="bc-sep">›</span><button onclick="nav('book-hub')">${isZh ? book.title : book.subtitle}</button>` : ''}
      ${state.page !== 'book-hub' ? `<span class="bc-sep">›</span><span class="bc-current">${pageCrumb()}</span>` : ''}
    </nav>` : '';

  const chapterRow = rCh ? (() => {
    const rMode = effectiveMode();
    const rBm   = isBookmarked(state.book, state.chapter);
    const bmSvg = `<svg viewBox="0 0 24 24" width="16" height="16" fill="${rBm?'#c8962a':'none'}" stroke="${rBm?'#c8962a':'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>`;
    const pills = ['wenyan','baihua','english'].map(id => {
      const label = id === 'english' ? 'EN' : id === 'wenyan' ? '繁体' : '简体';
      return `<button class="mode-pill${rMode===id?' active':''}" onclick="setTextMode('${id}')" style="${rMode===id?`background:${rBook.color};color:#fff;border-color:${rBook.color}`:''}">${label}</button>`;
    }).join('');
    return `
    <div class="toolbar-row3">
      <div class="ch-bar-top">
        <div class="ch-bar-titles">
          <span class="ch-bar-num" style="color:${rBook.color}">第${rCh.id}回</span>
          <span class="ch-bar-title">${rCh.title}</span>
        </div>
        <button class="ch-bm-btn${rBm?' active':''}" onclick="toggleBmAndRender(${state.chapter})">${bmSvg}</button>
      </div>
      <div class="ch-bar-bottom">
        <span class="ch-bar-en">${rCh.english}</span>
        <div class="ch-bar-right">
          <div class="mode-pills">${pills}</div>
          <button class="aa-btn${state.readingPrefsOpen?' active':''}" onclick="state.readingPrefsOpen=!state.readingPrefsOpen;render()" title="Reading preferences">Aa</button>
        </div>
      </div>
    </div>`;
  })() : '';

  document.getElementById('toolbar').innerHTML = `
    <div class="toolbar-row1">
      <div class="toolbar-left">
        <button class="toolbar-home-btn" onclick="nav('home',null,null)">
          <span class="toolbar-logo-icon">📖</span>
          <div>
            <div class="toolbar-logo">四大名著</div>
            <div class="toolbar-logo-sub">Four Great Classical Novels</div>
          </div>
        </button>
      </div>
      <div class="toolbar-right">
        <div id="user-badge" class="user-badge"></div>
        <button id="library-btn" class="library-btn" onclick="nav('library',null,null)" style="display:none" title="My Library">📚</button>
        <div class="lang-toggle" onclick="toggleLang()">
          <span class="lang-toggle-label${!isZh?' active':''}">EN</span>
          <button class="lang-switch${isZh?' zh-active':''}" aria-label="Toggle language"></button>
          <span class="lang-toggle-label${isZh?' active':''}">中文</span>
        </div>
      </div>
    </div>
    ${hasBreadcrumb ? `<div class="toolbar-row2 visible">${breadcrumb}</div>` : ''}
    ${chapterRow}
  `;
  // Measure actual toolbar height so content starts below it
  const toolbarEl = document.getElementById('toolbar');
  document.body.style.paddingTop = (toolbarEl?.offsetHeight || (hasBreadcrumb ? 82 : 52)) + 'px';
  if (typeof renderUserBadge === 'function') renderUserBadge();
}

function renderHeader() {
  const h = document.getElementById('main-header');
  const isHome = state.page === 'home';
  if (!isHome) {
    h.style.display = 'none';
    return;
  }
  h.style.display = '';
  h.style.background = 'linear-gradient(135deg, #2c1a0e, #5a2a1a)';
  h.className = '';
  h.innerHTML = `
    <div class="header-inner">
      <h1>四大名著</h1>
      <p>${t('subtitle')}</p>
    </div>
  `;
}

function renderFooter() {
  const isZh = state.lang === 'zh';
  const pills = Object.values(BOOKS).map(b =>
    `<button class="footer-book-pill" onclick="nav('book-hub','${b.id}')" style="border-color:${b.color}40">${b.title}</button>`
  ).join('');
  document.getElementById('app-footer').innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-title">四大名著</div>
        <div class="footer-subtitle">Four Great Classical Novels of Chinese Literature</div>
        <div class="footer-books">${pills}</div>
      </div>
      <nav class="footer-nav">
        <button onclick="nav('home',null,null)">${isZh ? '首页' : 'Home'}</button>
        ${Object.values(BOOKS).map(b =>
          `<button onclick="nav('book-hub','${b.id}')">${isZh ? b.title : b.subtitle}</button>`
        ).join('')}
      </nav>
    </div>
    <hr class="footer-divider">
    <p class="footer-copy">四大名著 · ${isZh ? '中国古典文学' : 'Chinese Classical Literature'}</p>
  `;
}

/* ══ FEEDBACK ══ */
const OWNER_UID = 'replace_with_your_firebase_uid'; // set this to your own Firebase UID

function showFeedback() {
  let el = document.getElementById('feedback-modal');
  if (!el) { el = document.createElement('div'); el.id = 'feedback-modal'; document.body.appendChild(el); }
  const isZh = state.lang === 'zh';
  el.innerHTML = `
    <div class="fb-backdrop" onclick="closeFeedback()"></div>
    <div class="fb-box">
      <button class="fb-close" onclick="closeFeedback()">✕</button>
      <div class="fb-step" id="fb-step-1">
        <div class="fb-emoji">💬</div>
        <h3 class="fb-title">${isZh ? '你好！欢迎提供反馈' : 'Share your feedback'}</h3>
        <p class="fb-sub">${isZh ? '这个网站还在测试阶段，你的意见对我们非常重要！' : "We're in beta — your feedback helps us improve!"}</p>
        <div class="fb-stars" id="fb-stars">
          ${[1,2,3,4,5].map(n => `<button class="fb-star" data-val="${n}" onclick="setRating(${n})" title="${n} star${n>1?'s':''}">★</button>`).join('')}
        </div>
        <p class="fb-rating-label" id="fb-rating-label">${isZh ? '请选择评分' : 'Tap to rate'}</p>
      </div>
      <div class="fb-step" id="fb-step-2" style="display:none">
        <div class="fb-emoji" id="fb-step2-emoji">😊</div>
        <h3 class="fb-title" id="fb-step2-title">${isZh ? '还有什么想说的吗？' : 'Anything to add?'}</h3>
        <textarea class="fb-textarea" id="fb-comment" placeholder="${isZh ? '你的建议或遇到的问题…（可选）' : 'Suggestions, bugs, or what you loved… (optional)'}" rows="4"></textarea>
        <input class="fb-email" id="fb-email" type="email" placeholder="${isZh ? '邮箱（选填，方便我们联系你）' : 'Email (optional, so we can follow up)'}">
        <button class="fb-submit-btn" onclick="submitFeedback()">${isZh ? '提交反馈' : 'Submit feedback'}</button>
      </div>
      <div class="fb-step" id="fb-step-3" style="display:none">
        <div class="fb-emoji">🙏</div>
        <h3 class="fb-title">${isZh ? '感谢你的反馈！' : 'Thank you!'}</h3>
        <p class="fb-sub">${isZh ? '你的反馈将帮助我们做得更好。' : "Your feedback helps us build something better."}</p>
        <button class="fb-done-btn" onclick="closeFeedback()">${isZh ? '完成' : 'Done'}</button>
      </div>
    </div>`;
  el.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  window._fbRating = 0;
}

function closeFeedback() {
  const el = document.getElementById('feedback-modal');
  if (el) el.style.display = 'none';
  document.body.style.overflow = '';
}

const RATING_LABELS = {
  en: ['','Terrible 😞','Poor 😕','Okay 😐','Good 😊','Excellent! 🤩'],
  zh: ['','很差 😞','较差 😕','一般 😐','不错 😊','非常好！🤩'],
};

function setRating(val) {
  window._fbRating = val;
  const isZh = state.lang === 'zh';
  document.querySelectorAll('.fb-star').forEach((s, i) => {
    s.classList.toggle('filled', i < val);
  });
  document.getElementById('fb-rating-label').textContent = RATING_LABELS[isZh?'zh':'en'][val] || '';
  // Move to step 2 after short delay
  setTimeout(() => {
    document.getElementById('fb-step-1').style.display = 'none';
    const step2 = document.getElementById('fb-step-2');
    step2.style.display = 'block';
    const emojis = ['','😞','😕','😐','😊','🤩'];
    const titles = {
      en: ['','What went wrong?','What could be better?','What would improve it?','What did you enjoy?','What did you love?'],
      zh: ['','哪里出了问题？','哪里可以改进？','如何能做得更好？','你喜欢哪些内容？','你最喜欢哪些内容？'],
    };
    document.getElementById('fb-step2-emoji').textContent = emojis[val];
    document.getElementById('fb-step2-title').textContent = titles[isZh?'zh':'en'][val];
  }, 400);
}

async function submitFeedback() {
  const rating  = window._fbRating || 0;
  const comment = document.getElementById('fb-comment')?.value.trim() || '';
  const email   = document.getElementById('fb-email')?.value.trim() || '';
  const payload = {
    rating, comment, email,
    page: state.page,
    book: state.book || null,
    lang: state.lang,
    uid:  (typeof USER !== 'undefined' && USER.uid) ? USER.uid : null,
    date: new Date().toISOString(),
    ua:   navigator.userAgent.slice(0, 120),
  };
  // Save to Firestore
  if (typeof _db !== 'undefined' && _db) {
    try { await _db.collection('feedback').add(payload); } catch(e) { console.warn('Feedback save failed:', e); }
  }
  // Show thank-you step
  document.getElementById('fb-step-2').style.display = 'none';
  document.getElementById('fb-step-3').style.display = 'block';
}

/* ══ ADMIN VIEW ══ */
async function loadAdminFeedback() {
  if (typeof _db === 'undefined' || !_db) return '<p class="lib-empty">Firestore not connected.</p>';
  try {
    const snap = await _db.collection('feedback').orderBy('date', 'desc').limit(100).get();
    if (snap.empty) return '<p class="lib-empty">No feedback yet.</p>';
    const avgRating = snap.docs.reduce((s, d) => s + (d.data().rating || 0), 0) / snap.docs.size;
    const ratingDist = [1,2,3,4,5].map(r => ({
      r, count: snap.docs.filter(d => d.data().rating === r).length
    }));
    const maxCount = Math.max(...ratingDist.map(x => x.count), 1);
    const summary = `
      <div class="admin-summary">
        <div class="admin-avg">${avgRating.toFixed(1)} <span class="admin-avg-star">★</span></div>
        <div class="admin-total">${snap.size} responses</div>
        <div class="admin-dist">
          ${ratingDist.reverse().map(x => `
            <div class="admin-dist-row">
              <span class="admin-dist-label">${x.r}★</span>
              <div class="admin-dist-track"><div class="admin-dist-fill" style="width:${Math.round((x.count/maxCount)*100)}%"></div></div>
              <span class="admin-dist-count">${x.count}</span>
            </div>`).join('')}
        </div>
      </div>`;
    const entries = snap.docs.map(d => {
      const f = d.data();
      const date = new Date(f.date).toLocaleDateString();
      const stars = '★'.repeat(f.rating) + '☆'.repeat(5 - f.rating);
      return `<div class="admin-fb-card">
        <div class="admin-fb-top">
          <span class="admin-fb-stars" style="color:#e8a020">${stars}</span>
          <span class="admin-fb-meta">${date} · ${f.lang?.toUpperCase() || ''} · ${f.page || ''}</span>
        </div>
        ${f.comment ? `<div class="admin-fb-comment">${f.comment}</div>` : ''}
        ${f.email ? `<div class="admin-fb-email">📧 ${f.email}</div>` : ''}
      </div>`;
    }).join('');
    return summary + entries;
  } catch(e) { return `<p class="lib-empty">Error loading feedback: ${e.message}</p>`; }
}

function pageCrumb() {
  const m = { reader: state.lang==='zh'?'阅读':'Read', flashcards: state.lang==='zh'?'词汇卡片':'Flashcards', mcq: state.lang==='zh'?'测验':'Quiz', library: state.lang==='zh'?'我的书库':'My Library' };
  return m[state.page] || '';
}

/* ══ HOME ══ */
function renderHome() {
  const isZh = state.lang === 'zh';
  return `
    <p class="home-hint">${t('chooseBook')}</p>
    <div class="book-grid">
      ${Object.values(BOOKS).map(b => {
        const loggedIn  = typeof USER !== 'undefined' && !!USER.uid;
        const total     = b.chapters.length;
        const completed = (loggedIn && typeof getCompletedCount === 'function') ? getCompletedCount(b.id) : 0;
        const lastRead  = (loggedIn && typeof getProgress === 'function') ? getProgress(b.id) : -1;
        const pct       = completed > 0 ? Math.round((completed / total) * 100) : 0;
        const progressBar = completed > 0 ? `
          <div class="book-progress-row">
            <div class="book-progress-track"><div class="book-progress-fill" style="width:${pct}%;background:${b.color}"></div></div>
            <span class="book-progress-label">${completed} / ${total} ${isZh?'章节已完成':'chapters completed'}</span>
          </div>` : '';
        const continueBtn = lastRead >= 0 ? `
          <button class="book-btn book-btn-continue" style="border-color:${b.color};color:${b.color}" onclick="event.stopPropagation();nav('reader','${b.id}',${lastRead})">
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" style="flex-shrink:0"><path d="M8 5v14l11-7z"/></svg>
            ${isZh ? `继续·第${b.chapters[lastRead].id}回` : `Continue · Ch.${b.chapters[lastRead].id}`}
          </button>` : '';
        return `
        <div class="book-card" onclick="nav('book-hub','${b.id}')">
          <div class="book-cover" style="background:linear-gradient(135deg,${b.color}dd,${b.color}99);position:relative;overflow:hidden">
            ${BOOK_ART[b.id] || ''}
            <div class="book-cover-title">${b.title}</div>
            <div class="book-cover-sub">${b.subtitle}</div>
          </div>
          <div class="book-info">
            <div class="book-info-meta">✍️ ${b.author} &nbsp;·&nbsp; ${b.dynasty}</div>
            <div class="book-info-desc">${isZh ? b.description_zh : b.description}</div>
            ${progressBar}
            <div class="book-info-btn-wrap">
              <button class="book-btn" style="background:${b.color}" onclick="event.stopPropagation();nav('book-hub','${b.id}')">
                ${t('readChapters')} →
              </button>
              ${continueBtn}
            </div>
          </div>
        </div>
      `;
      }).join('')}
    </div>
    <div class="preload-home-row">
      <button class="preload-home-btn" onclick="prefetchAll()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        ${isZh ? '预加载所有翻译（四部名著）' : 'Pre-load all translations for all 4 novels'}
      </button>
    </div>
  `;
}

/* ══ BOOK HUB ══ */
function renderHub() {
  const b = BOOKS[state.book];
  const fc = FLASHCARDS[state.book];
  const mcq = MCQS[state.book];
  const total     = b.chapters.length;
  const loggedIn  = typeof USER !== 'undefined' && !!USER.uid;
  const completed = (loggedIn && typeof getCompletedCount === 'function') ? getCompletedCount(b.id) : 0;
  const pct       = completed > 0 ? Math.round((completed / total) * 100) : 0;
  const hubProgress = completed > 0 ? `
    <div class="book-progress-row" style="margin-top:10px">
      <div class="book-progress-track"><div class="book-progress-fill" style="width:${pct}%;background:${b.color}"></div></div>
      <span class="book-progress-label">${completed} / ${total} chapters &nbsp;·&nbsp; <span style="color:${b.color};font-weight:700">${pct}%</span></span>
    </div>` : '';
  return `
    <div class="hub-book-header" style="background:linear-gradient(135deg,${b.color}18,transparent);border-color:${b.color}30">
      <div class="hub-cover" style="background:linear-gradient(135deg,${b.color}ee,${b.color}88)">
        <div class="hub-cover-bg">${b.title}</div>
        <div class="hub-cover-title">${b.title}</div>
      </div>
      <div class="hub-book-info">
        <h2 class="hub-title" style="color:${b.color}">${state.lang==='zh' ? b.title+' '+b.subtitle_zh : b.subtitle}</h2>
        <p class="hub-meta">✍️ ${b.author} &nbsp;·&nbsp; ${b.dynasty}</p>
        <p class="hub-desc">${state.lang==='zh' ? b.description_zh : b.description}</p>
        ${hubProgress}
      </div>
    </div>
    <div class="hub-options">
      <div class="hub-option" onclick="nav('reader', undefined, null)" style="--hover:${b.color}">
        <div class="hub-option-icon">📖</div>
        <div>
          <div class="hub-option-title">${t('readChapters')}</div>
          <div class="hub-option-sub">${b.chapters.length} ${t('chapters')}</div>
        </div>
      </div>
      <div class="hub-option" onclick="nav('flashcards')" style="--hover:${b.color}">
        <div class="hub-option-icon">🃏</div>
        <div>
          <div class="hub-option-title">${t('flashcards')}</div>
          <div class="hub-option-sub">${fc.length} ${t('cards')}</div>
        </div>
      </div>
      <div class="hub-option" onclick="nav('mcq')" style="--hover:${b.color}">
        <div class="hub-option-icon">❓</div>
        <div>
          <div class="hub-option-title">${t('quiz')}</div>
          <div class="hub-option-sub">${mcq.length} ${t('questions')}</div>
        </div>
      </div>
    </div>
  `;
}

/* ══ READER ══ */
function renderReader() {
  const b = BOOKS[state.book];

  if (state.chapter === null) {
    const lastRead = typeof getProgress === 'function' ? getProgress(state.book) : -1;
    const loggedIn = typeof USER !== 'undefined' && !!USER.uid;
    return `<div class="chapter-list-header">
      ${(lastRead >= 0 && loggedIn) ? `
        <div class="resume-banner" onclick="nav('reader',undefined,${lastRead})">
          <span class="resume-icon">📖</span>
          <div class="resume-text">
            <span class="resume-label">${state.lang==='zh'?'继续阅读':'Continue reading'}</span>
            <span class="resume-ch">${state.lang==='zh'?`第${b.chapters[lastRead].id}回`:`Chapter ${b.chapters[lastRead].id}`}　${state.lang==='zh'?b.chapters[lastRead].title:b.chapters[lastRead].english}</span>
          </div>
          <span class="resume-arrow">→</span>
        </div>` : ''}
    </div>
    <div class="chapter-list">
      ${b.chapters.map((ch, i) => {
        const bm       = loggedIn && typeof isBookmarked === 'function' && isBookmarked(state.book, i);
        const note     = loggedIn && typeof hasNote === 'function' && hasNote(state.book, i);
        const done     = loggedIn && typeof isChapterComplete === 'function' && isChapterComplete(state.book, i);
        const started  = !done && loggedIn && typeof isChapterStarted === 'function' && isChapterStarted(state.book, i);
        const stateClass = done ? ' chapter-done' : started ? ' chapter-started' : '';
        const statusIcon = done
          ? `<span class="ch-status ch-status-done" title="${state.lang==='zh'?'已读':'Completed'}">✓</span>`
          : started
          ? `<span class="ch-status ch-status-started" title="${state.lang==='zh'?'阅读中':'In progress'}">◐</span>`
          : '';
        return `
        <div class="chapter-item${stateClass}" onclick="nav('reader',undefined,${i})">
          <div class="chapter-item-left">
            <div class="chapter-num">${state.lang==='zh' ? `第${ch.id}回` : `Chapter ${ch.id}`}</div>
            ${state.lang==='zh'
              ? `<div class="chapter-title-main">${ch.title}</div>
                 <div class="chapter-title-sub">${ch.english}</div>`
              : `<div class="chapter-title-main">${ch.english}</div>
                 <div class="chapter-title-sub">${ch.title}</div>`
            }
            <div class="chapter-item-badges">
              ${bm ? `<span class="ch-badge bm-badge" title="Bookmarked">🔖</span>` : ''}
              ${note ? `<span class="ch-badge note-badge" title="Has note">📝</span>` : ''}
            </div>
          </div>
          ${statusIcon}
        </div>`;
      }).join('')}
    </div>`;
  }

  const ch = b.chapters[state.chapter];
  const loggedIn = typeof USER !== 'undefined' && !!USER.uid;
  if (loggedIn && typeof saveProgress === 'function') saveProgress(state.book, state.chapter);

  const bm = loggedIn && typeof isBookmarked === 'function' && isBookmarked(state.book, state.chapter);
  const note = loggedIn && typeof getNote === 'function' ? getNote(state.book, state.chapter) : '';
  const isZh = state.lang === 'zh';
  const hasPrev = state.chapter > 0;
  const hasNext = state.chapter < b.chapters.length - 1;
  const mode = effectiveMode();

  // Trigger background fetch if needed
  if (mode === 'wenyan' && !getCached('ws', state.book, state.chapter)) {
    fetchWenyan(state.book, state.chapter);
  } else if (mode === 'baihua' && !getCached('bh', state.book, state.chapter)) {
    fetchBaihua(state.book, state.chapter);
  } else if (mode === 'english' && !getCached('en', state.book, state.chapter)) {
    fetchEnglish(state.book, state.chapter);
  }

  // Build body based on text mode
  let body = '';
  const cacheType  = mode === 'wenyan' ? 'ws' : mode === 'baihua' ? 'bh' : 'en';
  const fetchKey   = cacheKey(cacheType, state.book, state.chapter);
  const isFetching = _fetching.has(fetchKey);
  const hasFailed  = _failed.has(fetchKey);
  const cached     = getCached(cacheType, state.book, state.chapter);

  if (hasFailed && !cached) {
    const label = mode === 'english' ? 'Translation failed' : mode === 'baihua' ? '白话文生成失败' : '原文加载失败';
    const hint  = mode === 'english' ? 'Check your Groq API key or try again.' : '请检查网络连接后重试。';
    body = `<div class="chapter-fetch-loading">
      <p style="color:#c0392b;font-size:1rem;margin-bottom:0.75rem">${label}</p>
      <p style="color:#888;font-size:0.85rem;margin-bottom:1rem">${hint}</p>
      <button onclick="retryTranslation()" style="padding:0.5rem 1.2rem;border-radius:20px;border:1px solid #c0392b;background:none;color:#c0392b;cursor:pointer;font-size:0.9rem">↺ Retry</button>
    </div>`;
  } else if (isFetching || !cached) {
    const msgs = {
      wenyan:  isZh ? '正在加载原文…'      : 'Loading classical text…',
      baihua:  isZh ? '正在生成白话文版本…' : 'Generating modern Chinese…',
      english: 'Translating to English… (20–30s)',
    };
    body = `<div class="chapter-fetch-loading"><div class="ai-spinner"></div><p>${msgs[mode]}</p></div>`;
  } else if (mode === 'english') {
    body = cached.split('\n\n').filter(p => p.trim()).map(p =>
      `<p class="en-text">${p.trim()}</p>`
    ).join('');
  } else {
    body = cached.split('\n\n').filter(p => p.trim()).map(p => {
      const s = p.trim();
      const isVerse = s.length <= 45 && (s.match(/[，。！？；]/g)||[]).length <= 2;
      return `<p class="zh-text ${isVerse ? 'verse-line' : 'classical-para'}">${s}</p>`;
    }).join('');
  }

  // Apply inline highlights
  if (body && loggedIn) {
    const highlights = (typeof getHighlights === 'function') ? getHighlights(state.book, state.chapter) : [];
    highlights.forEach(h => {
      const safe = h.quote.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      body = body.replace(new RegExp(safe), match =>
        `<mark class="user-highlight" onclick="showHighlightDetail(${h.id})" title="${h.note||''}">${match}</mark>`
      );
    });
  }

  return `
    <div class="chapter-content">
      <div class="chapter-body" id="chapter-body" onmouseup="onTextSelect(event)">${body}</div>
    </div>
    <div class="chapter-nav">
      <button onclick="nav('reader',undefined,null)">${t('chapterList')}</button>
    </div>
    ${hasPrev ? `<button class="reader-nav-float reader-nav-prev" onclick="nav('reader',undefined,${state.chapter-1})">‹</button>` : ''}
    ${hasNext ? `<button class="reader-nav-float reader-nav-next" onclick="nav('reader',undefined,${state.chapter+1})">›</button>` : ''}
  `;
}

let _noteTimer = null;
function autoSaveNote(text) {
  clearTimeout(_noteTimer);
  _noteTimer = setTimeout(() => {
    if (typeof saveNote === 'function') saveNote(state.book, state.chapter, text);
  }, 600);
}

/* ══ FLOATING NOTES PANEL ══ */
function renderNotesPanel() {
  let el = document.getElementById('notes-panel-root');
  if (!el) {
    el = document.createElement('div');
    el.id = 'notes-panel-root';
    document.body.appendChild(el);
  }

  const isReader = state.page === 'reader' && state.chapter !== null && state.book;
  const loggedIn = typeof USER !== 'undefined' && !!USER.uid;
  if (!isReader || !loggedIn) { el.innerHTML = ''; return; }

  const isZh = state.lang === 'zh';
  const note = (typeof getNote === 'function') ? getNote(state.book, state.chapter) : '';
  const highlights = (typeof getHighlights === 'function') ? getHighlights(state.book, state.chapter) : [];
  const open = state.notesOpen;

  const hlList = highlights.length ? highlights.map(h => `
    <div class="np-hl-item">
      <div class="np-hl-quote">"${h.quote.slice(0,60)}${h.quote.length>60?'…':''}"</div>
      ${h.note ? `<div class="np-hl-note">${h.note}</div>` : ''}
      <button class="np-hl-del" onclick="deleteHighlight('${state.book}',${state.chapter},${h.id});render()">✕</button>
    </div>`).join('') : `<p class="np-empty">${isZh?'暂无划线':'No highlights yet. Select text to add one.'}</p>`;

  el.innerHTML = `
    <button class="notes-fab${open?' open':''}" onclick="state.notesOpen=!state.notesOpen;render()" title="${isZh?'我的笔记':'My Notes'}">
      ${open
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`
      }
      ${!open && highlights.length ? `<span class="notes-fab-badge">${highlights.length}</span>` : ''}
    </button>
    ${open ? `
    <div class="notes-panel">
      <div class="np-header">
        <span class="np-title">${isZh?'我的笔记':'My Notes'}</span>
      </div>
      <div class="np-body">
        <div class="np-section-label">${isZh?'章节笔记':'Chapter Note'}</div>
        <textarea class="np-textarea" placeholder="${isZh?'在此记录您的想法…':'Jot down your thoughts…'}" oninput="autoSaveNote(this.value)">${note}</textarea>
        <div class="np-section-label" style="margin-top:1rem">${isZh?'划线与批注':'Highlights & Comments'} ${highlights.length?`(${highlights.length})`:''}
        </div>
        ${hlList}
      </div>
    </div>` : ''}
    ${state.highlightPopup ? renderHighlightPopup() : ''}
  `;
}

function renderHighlightPopup() {
  const p = state.highlightPopup;
  return `<div class="hl-popup" style="top:${p.y}px;left:${p.x}px">
    <div class="hl-popup-quote">"${p.quote.slice(0,50)}${p.quote.length>50?'…':''}"</div>
    <textarea class="hl-popup-input" id="hl-note-input" placeholder="Add a comment… (optional)" rows="2"></textarea>
    <div class="hl-popup-btns">
      <button onclick="commitHighlight()">Save</button>
      <button onclick="state.highlightPopup=null;render()" class="hl-cancel">Cancel</button>
    </div>
  </div>`;
}

function onTextSelect(e) {
  const loggedIn = typeof USER !== 'undefined' && !!USER.uid;
  if (!loggedIn || state.page !== 'reader') return;
  const sel = window.getSelection();
  const quote = sel ? sel.toString().trim() : '';
  if (quote.length < 5 || quote.length > 300) { state.highlightPopup = null; return; }
  const rect = sel.getRangeAt(0).getBoundingClientRect();
  state.highlightPopup = {
    quote,
    x: Math.min(rect.left + window.scrollX, window.innerWidth - 260),
    y: rect.bottom + window.scrollY + 8,
  };
  render();
}

function commitHighlight() {
  if (!state.highlightPopup) return;
  const noteEl = document.getElementById('hl-note-input');
  const note = noteEl ? noteEl.value.trim() : '';
  if (typeof saveHighlight === 'function') {
    saveHighlight(state.book, state.chapter, state.highlightPopup.quote, note);
  }
  state.highlightPopup = null;
  window.getSelection()?.removeAllRanges();
  render();
}

function showHighlightDetail(id) {
  state.notesOpen = true;
  render();
  // Scroll to the highlight in the panel
  setTimeout(() => {
    const items = document.querySelectorAll('.np-hl-item');
    if (items.length) items[items.length - 1].scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function toggleBmAndRender(idx) {
  const loggedIn = typeof USER !== 'undefined' && !!USER.uid;
  if (!loggedIn) {
    if (typeof showLoginPrompt === 'function') showLoginPrompt();
    return;
  }
  if (typeof toggleBookmark === 'function') toggleBookmark(state.book, idx);
  render();
}

/* ══ FLASHCARDS ══ */
function getFCDeck() {
  if (!state.fc.deck.length) {
    state.fc.deck = [...FLASHCARDS[state.book]].sort(() => Math.random() - 0.5);
  }
  const f = state.fc.filter;
  if (f === 'All' || f === '全部') return state.fc.deck;
  return state.fc.deck.filter(c => c.category === f || c.category_zh === f);
}

function renderFlashcards() {
  const b = BOOKS[state.book];
  const deck = getFCDeck();
  const idx = Math.min(state.fc.index, Math.max(0, deck.length - 1));
  const card = deck[idx];
  const pct = deck.length ? Math.round(((idx+1)/deck.length)*100) : 0;

  const rawCards = FLASHCARDS[state.book];
  const catSet = new Set(rawCards.map(c => state.lang==='zh' ? (c.category_zh||c.category) : c.category));
  const cats = [t('all'), ...catSet];
  const isZh = state.lang === 'zh';

  return `
    <div class="ai-search-bar">
      <div class="ai-search-inner">
        <div class="ai-mode-pills">
          <button class="ai-pill${!state.fc.aiMode?' active':''}" onclick="setFCMode(false)" style="${!state.fc.aiMode?`background:${b.color};border-color:${b.color};color:#fff`:''}">
            🎲 ${isZh?'随机默认':'Random (Default)'}
          </button>
          <button class="ai-pill${state.fc.aiMode?' active':''}" onclick="setFCMode(true)" style="${state.fc.aiMode?`background:${b.color};border-color:${b.color};color:#fff`:''}">
            ✨ ${isZh?'AI生成':'AI Generate'}
          </button>
        </div>
        ${state.fc.aiMode ? `
          <div class="ai-input-row">
            <input class="ai-input" id="fc-ai-input" placeholder="${isZh?`输入主题，例如：「武松」「梁山好汉」`:`Topic e.g. "Wu Song", "loyalty themes", "battle strategies"`}" />
            <button class="ai-go-btn" onclick="generateAICards()" style="background:${b.color}" ${state.fc.aiLoading?'disabled':''}>
              ${state.fc.aiLoading ? '⏳' : (isZh?'生成':'Generate')}
            </button>
          </div>
          ${!state.apiKey ? `<div class="ai-key-row">
            <input class="ai-key-input" id="ai-key-input" type="password" placeholder="${isZh?'输入 Groq API Key':'Enter Groq API Key'}" value="${state.apiKey}" />
            <button class="ai-key-save" onclick="saveApiKey()">💾 ${isZh?'保存':'Save'}</button>
          </div>` : `<div class="ai-key-set">🔑 API key set · <button onclick="clearApiKey()" class="ai-key-clear">${isZh?'清除':'Clear'}</button></div>`}
        ` : ''}
      </div>
    </div>
    ${!state.fc.aiMode ? `
    <div class="fc-header">
      <div class="fc-filter">
        ${cats.map(cat => {
          const isAll = cat === t('all');
          const active = isAll
            ? (state.fc.filter === 'All' || state.fc.filter === '全部')
            : (state.fc.filter === cat);
          const activeStyle = active ? (isAll ? '' : `background:${b.color};border-color:${b.color};color:#fff`) : '';
          return `<button class="fc-chip${isAll?' fc-chip-all':''}${active?' active':''}"
            style="${activeStyle}"
            onclick="fcFilter('${isAll?'All':cat}')">${cat}</button>`;
        }).join('')}
      </div>
    </div>` : ''}
    ${state.fc.aiLoading ? `<div class="ai-loading"><div class="ai-spinner"></div><p>${isZh?'AI正在生成词汇卡片…':'AI is generating flashcards…'}</p></div>` : ''}
    ${card && !state.fc.aiLoading ? `
      <div class="fc-area">
        <div class="fc-wrap">
          <div class="flashcard${state.fc.flipped?' flipped':''}" onclick="fcFlip()">
            <div class="fc-face fc-front">
              <div class="fc-char" style="color:${b.color}">${card.front}</div>
              <div class="fc-pinyin">${card.pinyin||''}</div>
              <span class="fc-cat">${isZh?(card.category_zh||card.category):card.category}</span>
              <div class="fc-hint">${t('flip')} ↩</div>
            </div>
            <div class="fc-face fc-back" style="background:linear-gradient(135deg,${b.color}12,#fff)">
              <div class="fc-char" style="color:${b.color};font-size:28px">${card.front}</div>
              <div class="fc-back-text">${isZh?(card.back_zh||card.back):card.back}</div>
            </div>
          </div>
        </div>
        <div class="fc-prog-text">${idx+1} ${t('of')} ${deck.length}</div>
        <div class="fc-prog-bar">
          <div class="fc-prog-fill" style="width:${pct}%;background:${b.color}"></div>
        </div>
        <div class="fc-btns">
          <button class="fc-btn-sec" onclick="fcNav(-1)">${t('prev')}</button>
          <button class="fc-btn-pri" onclick="fcFlip()" style="background:${b.color}">${t('flip')} ↩</button>
          <button class="fc-btn-sec" onclick="fcNav(1)">${t('next')}</button>
        </div>
      </div>
    ` : (!state.fc.aiLoading ? `<div class="empty">${isZh?'暂无卡片。':'No cards in this category.'}</div>` : '')}
  `;
}

function fcFlip() {
  state.fc.flipped = !state.fc.flipped;
  // Toggle class directly on the card — no full re-render, so CSS transition plays
  const card = document.querySelector('.flashcard');
  if (card) {
    card.classList.toggle('flipped', state.fc.flipped);
  } else {
    render();
  }
}
function fcNav(dir)  {
  const deck = getFCDeck();
  state.fc.index = Math.max(0, Math.min(deck.length-1, state.fc.index+dir));
  state.fc.flipped = false;
  render();
}
function fcFilter(f) { state.fc.filter = f; state.fc.index = 0; state.fc.flipped = false; render(); }

function setFCMode(ai) {
  state.fc.aiMode = ai;
  state.fc.index = 0; state.fc.flipped = false;
  if (!ai) state.fc.deck = []; // reset to default random deck
  render();
}

function saveApiKey() {
  const v = document.getElementById('ai-key-input')?.value?.trim();
  if (v) { state.apiKey = v; localStorage.setItem('groq_api_key', v); render(); }
}
function clearApiKey() {
  state.apiKey = ''; localStorage.removeItem('groq_api_key'); render();
}

async function generateAICards() {
  const topic = document.getElementById('fc-ai-input')?.value?.trim();
  if (!topic) return;
  if (!state.apiKey) { alert('Please enter your Groq API key first.'); return; }
  const b = BOOKS[state.book];
  const isZh = state.lang === 'zh';
  state.fc.aiLoading = true; render();

  try {
    const prompt = `You are a Chinese literature expert. Generate 8 flashcards about "${topic}" in the context of the novel "${b.title}" (${b.subtitle}).
Return ONLY a JSON array with no extra text. Each object must have these exact fields:
- front: Chinese characters (the term/character name)
- pinyin: romanized pronunciation
- back: English explanation (2-3 sentences)
- back_zh: Chinese explanation (2-3 sentences)
- category: one of Characters/Places/Events/Themes/Idioms
- category_zh: one of 人物/地名/事件/主题/成语

Example: [{"front":"宋江","pinyin":"Sòng Jiāng","back":"Leader of the 108 outlaws.","back_zh":"梁山108位好汉之首。","category":"Characters","category_zh":"人物"}]`;

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'authorization': `Bearer ${state.apiKey}` },
      body: JSON.stringify({ model: 'llama-3.1-8b-instant', max_tokens: 2000, messages: [{ role: 'user', content: prompt }] }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    const text = data.choices[0].message.content.trim();
    const jsonStart = text.indexOf('[');
    const jsonEnd = text.lastIndexOf(']') + 1;
    const cards = JSON.parse(text.slice(jsonStart, jsonEnd));
    state.fc.deck = cards;
    state.fc.index = 0; state.fc.flipped = false;
  } catch(e) {
    alert('AI generation failed: ' + e.message);
    state.fc.deck = [];
  }
  state.fc.aiLoading = false; render();
}

async function generateAIMCQ() {
  const topic = document.getElementById('mcq-ai-input')?.value?.trim();
  if (!topic) return;
  if (!state.apiKey) { alert('Please enter your Groq API key first.'); return; }
  const b = BOOKS[state.book];
  const isZh = state.lang === 'zh';
  state.mcq.aiLoading = true; render();

  try {
    const prompt = `You are a Chinese literature expert. Generate 5 multiple-choice quiz questions about "${topic}" in the context of "${b.title}" (${b.subtitle}).
Return ONLY a JSON array. Each object must have:
- question: English question
- question_zh: Chinese question
- options: array of 4 English answer strings
- options_zh: array of 4 Chinese answer strings
- correct: index 0-3 of the correct answer
- explanation: English explanation (1-2 sentences)
- explanation_zh: Chinese explanation (1-2 sentences)`;

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'authorization': `Bearer ${state.apiKey}` },
      body: JSON.stringify({ model: 'llama-3.1-8b-instant', max_tokens: 3000, messages: [{ role: 'user', content: prompt }] }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    const text = data.choices[0].message.content.trim();
    const jsonStart = text.indexOf('[');
    const jsonEnd = text.lastIndexOf(']') + 1;
    const questions = JSON.parse(text.slice(jsonStart, jsonEnd));
    state.mcq.deck = questions;
    state.mcq.index = 0; state.mcq.answered = false; state.mcq.chosen = -1;
    state.mcq.score = 0; state.mcq.total = 0; state.mcq.done = false;
  } catch(e) {
    alert('AI generation failed: ' + e.message);
    state.mcq.deck = [];
  }
  state.mcq.aiLoading = false; render();
}

/* ══ MCQ ══ */
function getMCQDeck() {
  if (!state.mcq.deck.length) {
    state.mcq.deck = [...MCQS[state.book]].sort(() => Math.random() - 0.5);
  }
  return state.mcq.deck;
}

function setMCQMode(ai) {
  state.mcq.aiMode = ai;
  state.mcq.deck = []; state.mcq.index = 0; state.mcq.answered = false;
  state.mcq.chosen = -1; state.mcq.score = 0; state.mcq.total = 0; state.mcq.done = false;
  render();
}

function renderMCQ() {
  const b = BOOKS[state.book];
  const isZh = state.lang === 'zh';

  // AI mode header bar (always shown)
  const aiBar = `
    <div class="ai-search-bar">
      <div class="ai-search-inner">
        <div class="ai-mode-pills">
          <button class="ai-pill${!state.mcq.aiMode?' active':''}" onclick="setMCQMode(false)" style="${!state.mcq.aiMode?`background:${b.color};border-color:${b.color};color:#fff`:''}">
            🎲 ${isZh?'随机默认':'Random (Default)'}
          </button>
          <button class="ai-pill${state.mcq.aiMode?' active':''}" onclick="setMCQMode(true)" style="${state.mcq.aiMode?`background:${b.color};border-color:${b.color};color:#fff`:''}">
            ✨ ${isZh?'AI生成':'AI Generate'}
          </button>
        </div>
        ${state.mcq.aiMode ? `
          <div class="ai-input-row">
            <input class="ai-input" id="mcq-ai-input" placeholder="${isZh?'输入主题，例如：「赤壁之战」「诸葛亮」':'Topic e.g. "Battle of Red Cliffs", "Zhuge Liang strategies"'}" />
            <button class="ai-go-btn" onclick="generateAIMCQ()" style="background:${b.color}" ${state.mcq.aiLoading?'disabled':''}>
              ${state.mcq.aiLoading ? '⏳' : (isZh?'生成':'Generate')}
            </button>
          </div>
          ${!state.apiKey ? `<div class="ai-key-row">
            <input class="ai-key-input" id="ai-key-input" type="password" placeholder="${isZh?'输入 Groq API Key':'Enter Groq API Key'}" />
            <button class="ai-key-save" onclick="saveApiKey()">💾 ${isZh?'保存':'Save'}</button>
          </div>` : `<div class="ai-key-set">🔑 API key set · <button onclick="clearApiKey()" class="ai-key-clear">${isZh?'清除':'Clear'}</button></div>`}
        ` : ''}
      </div>
    </div>`;

  if (state.mcq.aiLoading) return aiBar + `<div class="ai-loading"><div class="ai-spinner"></div><p>${isZh?'AI正在生成题目…':'AI is generating questions…'}</p></div>`;

  const deck = getMCQDeck();

  if (state.mcq.done) {
    const pct = Math.round((state.mcq.score / deck.length) * 100);
    const grade = pct >= 80 ? t('excellent') : pct >= 60 ? t('good') : t('keepStudying');
    return aiBar + `
      <div class="mcq-summary">
        <div class="mcq-score" style="color:${b.color}">${state.mcq.score}/${deck.length}</div>
        <div class="mcq-grade">${pct}% — ${grade}</div>
        <div class="mcq-grade-bar">
          <div style="width:${pct}%;background:${b.color};height:8px;border-radius:4px;transition:width 0.6s 0.1s"></div>
        </div>
        <button class="mcq-restart" style="background:${b.color};color:#fff;border:none" onclick="mcqRestart()">${t('tryAgain')}</button>
        <button class="mcq-restart" style="background:transparent;color:${b.color};border:2px solid ${b.color}" onclick="nav('book-hub')">${t('backToBook')}</button>
      </div>
    `;
  }

  const q = deck[state.mcq.index];
  const question    = isZh && q.question_zh    ? q.question_zh    : q.question;
  const options     = isZh && q.options_zh     ? q.options_zh     : q.options;
  const explanation = isZh && q.explanation_zh ? q.explanation_zh : q.explanation;
  const sc = state.mcq.total === 0 ? '#aaa' : `hsl(${Math.round((state.mcq.score/state.mcq.total)*120)},55%,38%)`;
  const isLast = state.mcq.index >= deck.length - 1;

  return aiBar + `
    <div class="mcq-wrap">
      <div class="mcq-meta">
        <span>${isZh?'第':'Q'} ${state.mcq.index+1} ${t('of')} ${deck.length}</span>
        <span class="mcq-score-chip" style="color:${sc};border-color:${sc}40;background:${sc}12">
          ${t('score')}: ${state.mcq.score}/${state.mcq.total}
        </span>
      </div>
      <div class="mcq-q-card">
        <div class="mcq-q-text">${question}</div>
        <div class="mcq-options">
          ${options.map((opt, i) => {
            let cls = 'mcq-opt';
            if (state.mcq.answered) {
              cls += ' answered';
              if (i === q.correct) cls += ' correct';
              else if (i === state.mcq.chosen) cls += ' wrong';
            }
            return `<button class="${cls}" onclick="mcqAnswer(${i})">${opt}</button>`;
          }).join('')}
        </div>
        <div class="mcq-explain${state.mcq.answered?' show':''}">
          <strong>${t('explanation')}</strong> ${explanation}
        </div>
      </div>
      <div class="mcq-nav">
        <button class="mcq-back-btn" onclick="mcqRestart()">${t('restart')}</button>
        <button class="mcq-next-btn" style="background:${b.color}" onclick="mcqNext()" ${!state.mcq.answered?'disabled':''}>
          ${isLast ? t('seeResults') : t('nextQ')}
        </button>
      </div>
    </div>
  `;
}

function mcqAnswer(i) {
  if (state.mcq.answered) return;
  const q = getMCQDeck()[state.mcq.index];
  state.mcq.answered = true; state.mcq.chosen = i; state.mcq.total++;
  if (i === q.correct) state.mcq.score++;
  render();
}
function mcqNext() {
  const deck = getMCQDeck();
  if (state.mcq.index >= deck.length - 1) {
    state.mcq.done = true;
    if (typeof saveQuizResult === 'function') {
      saveQuizResult(state.book, state.mcq.score, deck.length, state.mcq.aiMode ? 'AI' : 'Classic');
    }
  } else {
    state.mcq.index++; state.mcq.answered = false; state.mcq.chosen = -1;
  }
  render();
}
function mcqRestart() {
  state.mcq.deck = []; state.mcq.done = false; state.mcq.index = 0;
  state.mcq.answered = false; state.mcq.chosen = -1;
  state.mcq.score = 0; state.mcq.total = 0;
  render();
}

/* ══ RESET MODAL ══ */
function showResetModal() {
  let el = document.getElementById('reset-modal');
  if (!el) { el = document.createElement('div'); el.id = 'reset-modal'; document.body.appendChild(el); }
  const isZh = state.lang === 'zh';
  el.innerHTML = `
    <div class="reset-backdrop" onclick="closeResetModal()"></div>
    <div class="reset-box">
      <div class="reset-icon">⚠️</div>
      <h3 class="reset-title">${isZh ? '重置所有数据？' : 'Reset all your data?'}</h3>
      <p class="reset-desc">${isZh
        ? '这将永久删除你的所有阅读进度、书签、笔记、划线和测验记录。此操作无法撤销。'
        : 'This will permanently delete all your reading progress, bookmarks, notes, highlights, and quiz history. This cannot be undone.'}</p>
      <div class="reset-checklist">
        <label class="reset-check"><input type="checkbox" id="rc1"> ${isZh?'我了解这将删除所有阅读进度':'I understand this deletes all reading progress'}</label>
        <label class="reset-check"><input type="checkbox" id="rc2"> ${isZh?'我了解这将删除所有书签与笔记':'I understand this deletes all bookmarks & notes'}</label>
        <label class="reset-check"><input type="checkbox" id="rc3"> ${isZh?'我确认要从头开始':'I confirm I want to start fresh'}</label>
      </div>
      <div class="reset-actions">
        <button class="reset-cancel-btn" onclick="closeResetModal()">${isZh?'取消':'Cancel'}</button>
        <button class="reset-confirm-btn" id="reset-confirm-btn" disabled onclick="confirmReset()">
          ${isZh?'永久重置':'Reset permanently'}
        </button>
      </div>
    </div>`;
  el.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // Enable confirm button only when all 3 checkboxes are ticked
  ['rc1','rc2','rc3'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      const allChecked = ['rc1','rc2','rc3'].every(i => document.getElementById(i)?.checked);
      document.getElementById('reset-confirm-btn').disabled = !allChecked;
    });
  });
}

function closeResetModal() {
  const el = document.getElementById('reset-modal');
  if (el) el.style.display = 'none';
  document.body.style.overflow = '';
}

async function confirmReset() {
  const isZh = state.lang === 'zh';
  // Final type-to-confirm check already done via checkboxes; proceed
  closeResetModal();

  // Wipe localStorage keys
  const keys = ['reader_progress','reader_bookmarks','reader_completed','reader_started',
                 'reader_notes','reader_highlights','reader_quiz_history','reader_chat_log',
                 'reader_user_prefs'];
  keys.forEach(k => { try { localStorage.removeItem(k); } catch {} });

  // Reset in-memory USER state
  if (typeof USER !== 'undefined') {
    USER.progress          = {};
    USER.startedChapters   = {};
    USER.completedChapters = {};
    USER.bookmarks         = {};
    USER.notes             = {};
    USER.highlights        = {};
    USER.quizHistory       = [];
    USER.chatLog           = [];
  }

  // Wipe Firestore doc for this user
  if (typeof _db !== 'undefined' && _db && typeof USER !== 'undefined' && USER.uid) {
    try {
      await _db.collection('users').doc(USER.uid).set({
        progress: {}, bookmarks: {}, startedChapters: {}, completedChapters: {},
        notes: {}, highlights: {}, quizHistory: [], chatLog: [],
        updatedAt: new Date().toISOString(),
      });
    } catch(e) { console.warn('Cloud reset failed:', e); }
  }

  // Show success toast then go home
  const toast = document.createElement('div');
  toast.className = 'reset-toast';
  toast.textContent = isZh ? '✓ 数据已重置' : '✓ All data reset';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);

  nav('home', null, null);
}

async function resetBookData(bookId) {
  const isZh = state.lang === 'zh';
  const b = BOOKS[bookId];
  const bookName = isZh ? b.title : b.subtitle;
  const msg = isZh
    ? `确定要重置《${bookName}》的阅读进度、书签和笔记吗？此操作无法撤销。`
    : `Reset all reading progress, bookmarks, and notes for "${bookName}"? This cannot be undone.`;
  if (!confirm(msg)) return;

  if (typeof USER !== 'undefined') {
    delete USER.progress[bookId];
    delete USER.startedChapters[bookId];
    delete USER.completedChapters[bookId];
    delete USER.bookmarks[bookId];
    // Notes/highlights are keyed "bookId_chapterIdx" — remove all entries for this book
    Object.keys(USER.notes || {}).forEach(k => { if (k.startsWith(`${bookId}_`)) delete USER.notes[k]; });
    Object.keys(USER.highlights || {}).forEach(k => { if (k.startsWith(`${bookId}_`)) delete USER.highlights[k]; });
    if (typeof saveLocalData === 'function') saveLocalData();
    if (typeof saveCloudData === 'function') saveCloudData();
  }

  const toast = document.createElement('div');
  toast.className = 'reset-toast';
  toast.textContent = isZh ? `✓《${bookName}》数据已重置` : `✓ ${bookName} data reset`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);

  render();
}

function confirmSignOut() {
  const isZh = state.lang === 'zh';
  if (confirm(isZh ? '确定要退出登录吗？' : 'Sign out of your account?')) {
    if (typeof signOut === 'function') signOut();
    nav('home', null, null);
  }
}

/* ══ MY LIBRARY ══ */
function setLibraryTab(tab) { state.libraryTab = tab; render(); }

function renderLibrary() {
  const loggedIn = typeof USER !== 'undefined' && !!USER.uid;
  const isZh = state.lang === 'zh';
  const tab = state.libraryTab;

  const isOwner = typeof USER !== 'undefined' && USER.uid === OWNER_UID;
  const tabs = [
    { id: 'progress',   icon: '📖', label: isZh ? '阅读进度' : 'Reading' },
    { id: 'bookmarks',  icon: '🔖', label: isZh ? '书签'     : 'Bookmarks' },
    { id: 'notes',      icon: '📝', label: isZh ? '笔记'     : 'Notes' },
    { id: 'quizzes',    icon: '🏆', label: isZh ? '测验记录' : 'Quizzes' },
    { id: 'chat',       icon: '💬', label: isZh ? '对话记录' : 'Chat Log' },
    ...(isOwner ? [{ id: 'admin', icon: '🛠️', label: 'Feedback' }] : []),
  ];

  const tabBar = `<div class="lib-tabs">${tabs.map(t =>
    `<button class="lib-tab${tab===t.id?' active':''}" onclick="setLibraryTab('${t.id}')">${t.icon} ${t.label}</button>`
  ).join('')}</div>`;

  if (!loggedIn) {
    return `<div class="library-page">
      <h2 class="lib-heading">${isZh ? '我的书库' : 'My Library'}</h2>
      ${tabBar}
      <div class="lib-login-prompt">
        <div class="lib-login-icon">🔐</div>
        <p>${isZh ? '登录后即可查看你的阅读进度、书签、笔记和测验记录。' : 'Sign in to view your reading progress, bookmarks, notes, and quiz history.'}</p>
        <button class="lib-signin-btn" onclick="signInWithGoogle()">
          <svg width="16" height="16" viewBox="0 0 18 18" style="vertical-align:middle;margin-right:6px"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z"/></svg>
          ${isZh ? '使用 Google 账户登录' : 'Sign in with Google'}
        </button>
      </div>
    </div>`;
  }

  let content = '';

  if (tab === 'progress') {
    const rows = Object.values(BOOKS).map(b => {
      const idx = (typeof getProgress === 'function') ? getProgress(b.id) : -1;
      const total = b.chapters.length;
      const done  = (typeof getCompletedCount === 'function') ? getCompletedCount(b.id) : 0;
      const ch    = idx >= 0 ? b.chapters[idx] : null;
      const chLabel = ch
        ? (isZh ? `第${ch.id}回：${ch.title}` : `Chapter ${ch.id}: ${ch.english}`)
        : (isZh ? '未开始' : 'Not started');
      return `<div class="lib-progress-card" onclick="${idx>=0?`nav('reader','${b.id}',${idx})`:`nav('book-hub','${b.id}')`}">
        <div class="lib-pc-color" style="background:${b.color}"></div>
        <div class="lib-pc-body">
          <div class="lib-pc-title-row">
            <div class="lib-pc-title">${isZh ? b.title : b.subtitle}</div>
            ${(idx >= 0 || done > 0) ? `<button class="lib-pc-reset-btn" onclick="event.stopPropagation();resetBookData('${b.id}')" title="${isZh?'重置本书数据':'Reset data for this book'}">↺ ${isZh?'重置':'Reset'}</button>` : ''}
          </div>
          <div class="lib-pc-last">${idx >= 0 ? `${isZh?'上次读到':'Last read'}: ${chLabel}` : chLabel}</div>
          <div class="lib-pc-bar-wrap"><div class="lib-pc-bar" style="width:${total?Math.round((done/total)*100):0}%;background:${b.color}"></div></div>
          <div class="lib-pc-pct">${done > 0 ? `${done} / ${total} ${isZh?'章节已完成':'chapters completed'}` : ''}</div>
        </div>
      </div>`;
    }).join('');
    content = rows || `<p class="lib-empty">${isZh?'还没有阅读记录':'No reading progress yet'}</p>`;
  }

  if (tab === 'bookmarks') {
    let any = false;
    const rows = Object.values(BOOKS).map(b => {
      const bms = (typeof getBookmarks === 'function') ? getBookmarks(b.id) : [];
      if (!bms.length) return '';
      any = true;
      const items = bms.map(idx => {
        const ch = b.chapters[idx];
        if (!ch) return '';
        const chLabel = isZh ? `第${ch.id}回：${ch.title}` : `Chapter ${ch.id}: ${ch.english}`;
        return `<div class="lib-item" onclick="nav('reader','${b.id}',${idx})">
          <div class="lib-item-color" style="background:${b.color}"></div>
          <div class="lib-item-body">
            <div class="lib-item-book">${isZh ? b.title : b.subtitle}</div>
            <div class="lib-item-ch">${chLabel}</div>
          </div>
          <span class="lib-item-arrow">›</span>
        </div>`;
      }).join('');
      return `<div class="lib-group"><div class="lib-group-head" style="color:${b.color}">${isZh?b.title:b.subtitle}</div>${items}</div>`;
    }).join('');
    content = any ? rows : `<p class="lib-empty">${isZh?'还没有书签':'No bookmarks yet. Tap 🔖 while reading.'}</p>`;
  }

  if (tab === 'notes') {
    const sortBy = state.notesSortBy;
    // Gather chapter notes
    const noteKeys = (typeof USER !== 'undefined') ? Object.keys(USER.notes || {}) : [];
    // Gather highlights
    const hlKeys = (typeof USER !== 'undefined') ? Object.keys(USER.highlights || {}) : [];

    const allItems = [];
    noteKeys.forEach(key => {
      const [bookId, idxStr] = key.split('_');
      const idx = parseInt(idxStr);
      const b = BOOKS[bookId]; if (!b) return;
      const ch = b.chapters[idx]; if (!ch) return;
      allItems.push({ type: 'note', bookId, idx, b, ch, text: USER.notes[key], date: null });
    });
    hlKeys.forEach(key => {
      const [bookId, idxStr] = key.split('_');
      const idx = parseInt(idxStr);
      const b = BOOKS[bookId]; if (!b) return;
      const ch = b.chapters[idx]; if (!ch) return;
      (USER.highlights[key] || []).forEach(h => {
        allItems.push({ type: 'highlight', bookId, idx, b, ch, quote: h.quote, text: h.note, date: h.date, hlId: h.id });
      });
    });

    if (!allItems.length) {
      content = `<p class="lib-empty">${isZh?'还没有笔记或高亮':'No notes or highlights yet. Tap 📝 while reading or highlight text.'}</p>`;
    } else {
      // Sort
      if (sortBy === 'recent') {
        allItems.sort((a, b) => {
          const da = a.date ? new Date(a.date) : new Date(0);
          const db2 = b.date ? new Date(b.date) : new Date(0);
          return db2 - da;
        });
      } else if (sortBy === 'book') {
        allItems.sort((a, b) => a.bookId.localeCompare(b.bookId) || a.idx - b.idx);
      } else if (sortBy === 'chapter') {
        allItems.sort((a, b) => a.idx - b.idx || a.bookId.localeCompare(b.bookId));
      }

      const sortBar = `<div class="lib-sort-bar">
        <span class="lib-sort-label">${isZh?'排序：':'Sort:'}</span>
        ${['recent','book','chapter'].map(s => {
          const labels = { recent: isZh?'最新':'Recent', book: isZh?'按书':'By Novel', chapter: isZh?'按章节':'By Chapter' };
          return `<button class="lib-sort-btn${sortBy===s?' active':''}" onclick="state.notesSortBy='${s}';render()">${labels[s]}</button>`;
        }).join('')}
      </div>`;

      const rows = allItems.map(item => {
        const chLabel = item.b ? (isZh ? `第${item.ch.id}回：${item.ch.title}` : `Chapter ${item.ch.id}: ${item.ch.english}`) : '';
        const bookName = item.b ? (isZh ? item.b.title : item.b.subtitle) : '';
        const dateStr = item.date ? new Date(item.date).toLocaleDateString() : '';
        if (item.type === 'note') {
          return `<div class="lib-note-card" onclick="nav('reader','${item.bookId}',${item.idx})">
            <div class="lib-note-card-header">
              <div class="lib-note-card-color" style="background:${item.b.color}"></div>
              <div>
                <div class="lib-note-card-book">${bookName}</div>
                <div class="lib-note-card-ch">${chLabel}</div>
              </div>
              <span class="lib-note-card-tag note-tag">📝 ${isZh?'笔记':'Note'}</span>
            </div>
            <div class="lib-note-card-body">${item.text.slice(0,160)}${item.text.length>160?'…':''}</div>
          </div>`;
        } else {
          return `<div class="lib-note-card">
            <div class="lib-note-card-header">
              <div class="lib-note-card-color" style="background:${item.b.color}"></div>
              <div>
                <div class="lib-note-card-book">${bookName}</div>
                <div class="lib-note-card-ch">${chLabel}</div>
              </div>
              <span class="lib-note-card-tag hl-tag">✏️ ${isZh?'划线':'Highlight'}</span>
            </div>
            <div class="lib-note-card-quote">"${item.quote.slice(0,80)}${item.quote.length>80?'…':''}"</div>
            ${item.text ? `<div class="lib-note-card-body">${item.text}</div>` : ''}
            ${dateStr ? `<div class="lib-note-card-date">${dateStr}</div>` : ''}
            <button class="lib-hl-delete" onclick="event.stopPropagation();deleteHighlight('${item.bookId}',${item.idx},${item.hlId});render()">✕</button>
          </div>`;
        }
      }).join('');
      content = sortBar + rows;
    }
  }

  if (tab === 'quizzes') {
    const history = (typeof USER !== 'undefined') ? (USER.quizHistory || []) : [];
    if (!history.length) {
      content = `<p class="lib-empty">${isZh?'还没有测验记录':'No quiz results yet. Try the Quiz feature!'}</p>`;
    } else {
      content = [...history].reverse().map(r => {
        const b = BOOKS[r.bookId];
        const pct = Math.round((r.score / r.total) * 100);
        const color = pct >= 80 ? '#2e7d32' : pct >= 60 ? '#f57c00' : '#c62828';
        const date = new Date(r.date).toLocaleDateString();
        return `<div class="lib-quiz-row">
          <div class="lib-quiz-left">
            <div class="lib-quiz-book">${b ? (isZh?b.title:b.subtitle) : r.bookId}</div>
            <div class="lib-quiz-meta">${r.mode} · ${date}</div>
          </div>
          <div class="lib-quiz-score" style="color:${color}">${r.score}/${r.total} <span class="lib-quiz-pct">${pct}%</span></div>
        </div>`;
      }).join('');
    }
  }

  if (tab === 'chat') {
    const log = (typeof USER !== 'undefined') ? (USER.chatLog || []) : [];
    if (!log.length) {
      content = `<p class="lib-empty">${isZh?'还没有对话记录':'No chat history yet. Ask the AI companion a question!'}</p>`;
    } else {
      content = [...log].reverse().map(e => {
        const b = BOOKS[e.bookId];
        const date = new Date(e.date).toLocaleDateString();
        const chLabel = b && e.chapterIdx != null && b.chapters[e.chapterIdx]
          ? ` · ${isZh ? b.chapters[e.chapterIdx].title : b.chapters[e.chapterIdx].english}`
          : '';
        return `<div class="lib-chat-entry">
          <div class="lib-chat-meta">${b ? (isZh?b.title:b.subtitle) : (isZh?'通用':'General')}${chLabel} · ${date}</div>
          <div class="lib-chat-q">❓ ${e.question}</div>
          <div class="lib-chat-a">🤖 ${e.answer.slice(0,200)}${e.answer.length>200?'…':''}</div>
        </div>`;
      }).join('');
    }
  }

  if (tab === 'admin' && isOwner) {
    content = `<div id="admin-feedback-content"><p class="lib-empty">Loading feedback…</p></div>`;
    // Load async and inject
    loadAdminFeedback().then(html => {
      const el = document.getElementById('admin-feedback-content');
      if (el) el.innerHTML = html;
    });
  }

  const resetBtn = `
    <div class="lib-reset-row">
      <button class="lib-signout-btn" onclick="confirmSignOut()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        ${isZh ? '退出登录' : 'Sign out'}
      </button>
      <button class="lib-reset-btn" onclick="showResetModal()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
        ${isZh ? '重置所有数据' : 'Reset all data'}
      </button>
    </div>`;

  return `<div class="library-page">
    <h2 class="lib-heading">${isZh?'我的书库':'My Library'}</h2>
    ${tabBar}
    <div class="lib-content">${content}</div>
    ${resetBtn}
  </div>`;
}

/* ══ READING PROGRESS BAR ══ */
function updateReadingProgress() {
  const bar   = document.getElementById('reading-progress-bar');
  const fill  = document.getElementById('reading-progress-fill');
  const pctEl = document.getElementById('reading-progress-pct');
  if (!bar || !fill) return;

  const isReader = state.page === 'reader' && state.chapter !== null;
  if (!isReader) {
    bar.classList.remove('visible');
    fill.style.setProperty('--pct', '0%');
    return;
  }
  bar.classList.add('visible');

  const el = document.querySelector('.chapter-content');
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const chapterTop = rect.top + window.scrollY;
  const chapterH   = rect.height;
  const viewH      = window.innerHeight;
  let pct;
  if (chapterH <= viewH) {
    pct = 100;
  } else {
    const scrollable = chapterH - viewH;
    const scrolled   = window.scrollY - chapterTop;
    pct = Math.min(100, Math.max(0, (scrolled / scrollable) * 100));
  }
  fill.style.setProperty('--pct', pct + '%');
  if (pctEl) pctEl.textContent = Math.round(pct) + '%';
  if (pct >= 99) state.reachedEnd = true;
}

/* ══ ONE-TIME CACHE FIXES ══ */
async function applyOneTimeCacheFixes() {
  if (typeof _db === 'undefined' || !_db) return;
  // List of known bad bh cache entries: { bookId, chapterIdx, fixKey }
  // fixKey stored in localStorage so the fix only runs once per device
  const fixes = [
    { bookId: 'shuihu', chapterIdx: 0, fixKey: 'fix_wm0_bh_v3' },
  ];
  for (const { bookId, chapterIdx, fixKey } of fixes) {
    if (localStorage.getItem(fixKey)) continue; // already fixed on this device
    try {
      const docRef = _db.collection('chapter_cache').doc(`${bookId}_${chapterIdx}`);
      const doc = await docRef.get();
      const d = doc.exists ? doc.data() : {};
      // Delete corrupt bh unconditionally
      if (doc.exists) {
        await docRef.update({ bh: firebase.firestore.FieldValue.delete() });
      }
      // Seed ws from Firestore if not in memory
      if (!getCached('ws', bookId, chapterIdx) && d.ws) {
        setCached('ws', bookId, chapterIdx, d.ws);
      }
      if (!getCached('ws', bookId, chapterIdx)) await fetchWenyan(bookId, chapterIdx);
      const ws = getCached('ws', bookId, chapterIdx);
      if (!ws) continue;
      // Fresh simplified translation
      const simplified = await gtranslate(ws, 'zh-CN');
      if (simplified && simplified.trim().length > 50) {
        setCached('bh', bookId, chapterIdx, simplified);
        await fsSaveCache(bookId, chapterIdx, 'bh', simplified);
        localStorage.setItem(fixKey, '1'); // mark done
      }
    } catch(e) { console.warn('Cache fix failed:', e); }
  }
}

/* ══ ONE-TIME GLOBAL WIPE: clear all cached EN translations so they
   regenerate with proper-noun annotations (繁体 in brackets). Runs once
   ever, server-side gated via a Firestore marker doc — not per device,
   so it doesn't repeat for every visitor. ══ */
async function wipeAllEnglishCacheOnce() {
  if (typeof _db === 'undefined' || !_db) return;
  const MARKER_ID = 'enWipeV3'; // bumped — forcing a fresh full wipe now that deploys are reliably reaching production
  try {
    const markerRef = _db.collection('chapter_cache_meta').doc(MARKER_ID);
    const marker = await markerRef.get();
    if (marker.exists) return; // already done by someone else

    // Claim the marker first so concurrent visitors don't double-run
    await markerRef.set({ startedAt: new Date().toISOString() });

    const snap = await _db.collection('chapter_cache').where('en', '!=', null).get();
    const docs = snap.docs.filter(d => d.data().en);
    let batch = _db.batch();
    let count = 0;
    for (const d of docs) {
      batch.update(d.ref, { en: firebase.firestore.FieldValue.delete() });
      count++;
      if (count % 450 === 0) { await batch.commit(); batch = _db.batch(); }
    }
    if (count % 450 !== 0) await batch.commit();
    console.log(`Wiped EN cache for ${count} chapters — will regenerate with name annotations.`);
  } catch (e) {
    console.warn('EN cache wipe failed:', e);
  }
}

/* Strip Wikisource chapter-nav junk (上一回/回目录/下一回, "----" separators)
   AND residual unparsed markup (-{...}- variant syntax, {{...}} templates)
   from already-cached plain text. Mirrors cleanWikitext()'s logic so cached
   text that was fetched before that parser was fixed gets cleaned too. */
function stripNavJunk(text) {
  if (!text) return text;
  let t = resolveVariantSyntax(text);
  t = stripTemplates(t);
  return t
    // Not line-anchored — nav links often sit inline with content, no newline between them
    .replace(/[　\s]*(?:(?:上一回|下一回|回目录|目录)[　\s]*){1,4}-{2,}[　\s]*/g, '')
    .replace(/(?:(?:上一回|下一回|回目录|目录)[　\s]*){2,4}/g, '')
    .replace(/-{3,}/g, '')
    .replace(/Previous episode.*Next episode.*$/gim, '')
    .replace(/Return to table of contents/gi, '')
    // Residual damage from an already-corrupted cache entry: the {{header}}
    // template's braces are gone (a prior parser bug already unwrapped it),
    // leaving bare leaked field text like "notes\n\n= \n\n" at the very
    // start. Strip it directly since there's no {{...}} left to re-parse.
    .replace(/^\s*notes\s*\n+\s*=\s*\n+/i, '')
    // Residual poem-line colons: earlier caching already collapsed the
    // original newlines, leaving mid-string " :" separators between poem
    // lines (e.g. "詩曰： :混沌未分…。 :自從…。"). Turn them back into
    // paragraph breaks and drop any remaining leading colons.
    .replace(/\s+:(?=[^\s：])/g, '\n\n')
    .replace(/^:+\s*/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/* ══ ONE-TIME GLOBAL WIPE: remove Wikisource nav-link junk (上一回/回目录/
   下一回, "----" separators) that got scraped into ws and baked into every
   translation. Cleans ws in place, deletes bh/en so they regenerate clean.
   Runs once ever across all 4 books, gated via a Firestore marker doc. ══ */
async function wipeNavJunkOnce() {
  if (typeof _db === 'undefined' || !_db) return;
  const MARKER_ID = 'navWipeV6'; // bumped — format ":"-prefixed poem lines as separate paragraphs, matching <poem> tag handling
  try {
    const markerRef = _db.collection('chapter_cache_meta').doc(MARKER_ID);
    const marker = await markerRef.get();
    if (marker.exists) return; // already done by someone else

    await markerRef.set({ startedAt: new Date().toISOString() });

    const snap = await _db.collection('chapter_cache').get();
    let batch = _db.batch();
    let count = 0;
    for (const d of snap.docs) {
      const data = d.data();
      const update = {};
      if (data.ws) {
        const cleaned = stripNavJunk(data.ws);
        if (cleaned !== data.ws) update.ws = cleaned;
      }
      if (data.bh) update.bh = firebase.firestore.FieldValue.delete();
      if (data.en) update.en = firebase.firestore.FieldValue.delete();
      if (Object.keys(update).length) {
        batch.update(d.ref, update);
        count++;
        if (count % 450 === 0) { await batch.commit(); batch = _db.batch(); }
      }
    }
    if (count % 450 !== 0) await batch.commit();
    console.log(`Cleaned nav-junk for ${count} chapters across all books.`);
  } catch (e) {
    console.warn('Nav-junk wipe failed:', e);
  }
}

/* One-time cleanup: chapter text used to be cached in localStorage under
   keys like "ws_v3_shuihu_0" and filled the quota after a full preload.
   That cache moved to an in-memory Map — purge the old keys so the quota
   frees up for legitimate small data (progress, bookmarks, prefs). */
function purgeStaleLocalStorageChapterCache() {
  try {
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && /^(ws|bh|en)_v\d+_/.test(k)) toRemove.push(k);
    }
    toRemove.forEach(k => localStorage.removeItem(k));
    if (toRemove.length) console.log(`Purged ${toRemove.length} stale chapter-cache entries from localStorage.`);
  } catch (e) { console.warn('localStorage purge failed:', e); }
}

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', () => {
  purgeStaleLocalStorageChapterCache();
  mergeChapters();

  // Restore page/book/chapter from the URL on first load (deep links,
  // reloads) and normalize the URL to match the initial state.
  const initialParams = new URLSearchParams(location.search);
  if (initialParams.has('page') || initialParams.has('book')) {
    state.page = initialParams.get('page') || 'home';
    state.book = initialParams.get('book') || null;
    const chStr = initialParams.get('ch');
    state.chapter = chStr !== null && chStr !== '' ? parseInt(chStr, 10) : null;
    if (state.book && !BOOKS[state.book]) { state.page = 'home'; state.book = null; state.chapter = null; }
  }
  history.replaceState({ page: state.page, book: state.book, chapter: state.chapter }, '', buildURLFromState());

  render();
  renderCompanion();
  applyOneTimeCacheFixes(); // background fix for known bad cache entries
  wipeAllEnglishCacheOnce(); // one-time global EN cache reset for name annotations
  wipeNavJunkOnce(); // one-time global cleanup of scraped Wikisource nav links
  window.addEventListener('scroll', updateReadingProgress, { passive: true });

  // Browser back/forward — restore state from the URL instead of re-pushing
  window.addEventListener('popstate', applyStateFromURL);
});

/* ════════════════════════════════════════
   AI COMPANION CHATBOT
   ════════════════════════════════════════ */

function renderCompanion() {
  const root = document.getElementById('ai-companion-root');
  if (!root) return;
  const { open, messages, loading } = state.chat;
  const isZh = state.lang === 'zh';
  const book = state.book ? BOOKS[state.book] : null;
  const color = book ? book.color : '#8B1A1A';

  // Context info for display
  let contextLabel = '';
  if (book && state.page === 'reader' && state.chapter !== null) {
    const ch = book.chapters[state.chapter];
    contextLabel = isZh ? `${book.title} · ${ch.title.slice(0,12)}…` : `${book.subtitle} · Ch.${ch.id}`;
  } else if (book) {
    contextLabel = isZh ? book.title : book.subtitle;
  } else {
    contextLabel = isZh ? '四大名著助手' : 'Classical Novels AI';
  }

  const quickActions = state.page === 'reader' && state.chapter !== null ? [
    { icon: '📖', label: isZh ? '总结本章' : 'Summarize chapter', msg: isZh ? '请用中文总结这一章的主要内容和情节。' : 'Please summarize the main events and significance of this chapter.' },
    { icon: '❓', label: isZh ? '本章有哪些人物？' : 'Who appears in this chapter?', msg: isZh ? '这一章中出现了哪些主要人物？他们各自的作用是什么？' : 'Which characters appear in this chapter and what are their roles?' },
    { icon: '🔍', label: isZh ? '深度分析' : 'Deep analysis', msg: isZh ? '请深入分析这一章的主题、象征意义和文学价值。' : 'Provide a deeper literary analysis of the themes and symbolism in this chapter.' },
    { icon: '➡️', label: isZh ? '接下来发生什么？' : 'What happens next?', msg: isZh ? '这一章结束后，故事接下来会如何发展？请给我剧透。' : 'What happens after this chapter? Give me a preview of what comes next.' },
  ] : [
    { icon: '📚', label: isZh ? '介绍四大名著' : 'Introduce the Four Novels', msg: isZh ? '请介绍中国四大名著的历史背景和文学地位。' : 'Give me an introduction to the Four Great Classical Novels of China.' },
    { icon: '🌟', label: isZh ? '哪本最适合我？' : 'Which novel is for me?', msg: isZh ? '这四本书各有什么特点？我应该从哪本开始读？' : 'What are the key differences between the four novels? Which should I start with?' },
  ];

  const messagesHTML = messages.length === 0
    ? `<div class="chat-empty"><div class="chat-empty-icon">🤖</div><p>${isZh ? '你好！我是你的古典文学助手。\n我可以帮你总结章节、解答疑问、深度分析文学内容。' : 'Hello! I\'m your Classical Literature companion.\nI can summarize chapters, answer questions, and give literary analysis.'}</p></div>`
    : messages.map(m => `
        <div class="chat-msg chat-msg-${m.role}">
          <div class="chat-bubble">${m.content.replace(/\n/g, '<br>')}</div>
        </div>`).join('');

  root.innerHTML = `
    <button class="companion-fab ${open ? 'open' : ''}" onclick="toggleCompanion()" style="background:${color}" title="${isZh ? 'AI助手' : 'AI Companion'}">
      ${open ? '✕' : '💬'}
      ${!open && messages.length > 0 ? `<span class="companion-badge">${messages.filter(m=>m.role==='assistant').length}</span>` : ''}
    </button>

    ${open ? `
    <div class="companion-panel" id="companion-panel">
      <div class="companion-header" style="background:${color}">
        <div class="companion-header-inner">
          <span class="companion-title">✨ ${isZh ? 'AI文学助手' : 'AI Literary Companion'}</span>
          <span class="companion-context">${contextLabel}</span>
        </div>
        <div class="companion-header-actions">
          <button class="companion-feedback-btn" onclick="showFeedback()">${isZh ? '💬 反馈' : '💬 Feedback'}</button>
          ${messages.length > 0 ? `<button class="companion-clear" onclick="clearChat()" title="Clear">🗑</button>` : ''}
        </div>
      </div>

      <div class="companion-messages" id="companion-messages">
        ${messagesHTML}
        ${loading ? `<div class="chat-msg chat-msg-assistant"><div class="chat-bubble chat-loading"><span></span><span></span><span></span></div></div>` : ''}
      </div>

      ${!state.apiKey ? `
      <div class="companion-key-setup">
        <p class="companion-key-hint">${isZh ? '💡 输入 Groq API Key 以启用 AI 助手' : '💡 Enter your Groq API Key to enable the AI companion'}</p>
        <p class="companion-key-hint" style="font-size:11px;opacity:0.7">${isZh ? '免费获取：console.groq.com' : 'Get free key at: console.groq.com'}</p>
        <div class="companion-key-row">
          <input type="password" id="companion-key-input" class="companion-key-input" placeholder="gsk_..." />
          <button onclick="saveApiKeyFromChat()" class="companion-key-btn" style="background:${color}">${isZh ? '保存' : 'Save'}</button>
        </div>
      </div>` : ''}

      <div class="companion-quick-actions">
        ${quickActions.map(a => `<button class="companion-quick-btn" onclick="sendCompanion(${JSON.stringify(a.msg)})" ${loading?'disabled':''}>${a.icon} ${a.label}</button>`).join('')}
      </div>

      <div class="companion-input-area">
        <div class="companion-input-row">
          <textarea class="companion-input" id="companion-input" placeholder="${isZh ? '问我任何关于本书的问题…' : 'Ask me anything about the story…'}" rows="1" onkeydown="companionKeydown(event)" ${!state.apiKey||loading?'disabled':''}></textarea>
          <button class="companion-send" onclick="companionSend()" style="background:${color}" ${!state.apiKey||loading?'disabled':''}>
            ${loading ? '⏳' : '➤'}
          </button>
        </div>
        ${state.apiKey ? `<div class="companion-key-set">🔑 ${isZh?'API已设置':'API key set'} · <button onclick="clearApiKey()" class="companion-key-clear">${isZh?'清除':'Clear'}</button></div>` : ''}
      </div>
    </div>` : ''}
  `;

  // Auto-scroll messages
  if (open) {
    const msgEl = document.getElementById('companion-messages');
    if (msgEl) msgEl.scrollTop = msgEl.scrollHeight;
  }
}

function toggleCompanion() {
  state.chat.open = !state.chat.open;
  renderCompanion();
}

function clearChat() {
  state.chat.messages = [];
  renderCompanion();
}

function saveApiKeyFromChat() {
  const v = document.getElementById('companion-key-input')?.value?.trim();
  if (v) { state.apiKey = v; localStorage.setItem('groq_api_key', v); renderCompanion(); }
}

function companionKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); companionSend(); }
}

function companionSend() {
  const input = document.getElementById('companion-input');
  const text = input?.value?.trim();
  if (!text) return;
  input.value = '';
  sendCompanion(text);
}

function sendCompanion(userText) {
  if (!state.apiKey) { state.chat.open = true; renderCompanion(); return; }
  state.chat.messages.push({ role: 'user', content: userText });
  state.chat.loading = true;
  renderCompanion();

  const book = state.book ? BOOKS[state.book] : null;
  const isZh = state.lang === 'zh';

  // Build context
  let sysContext = `You are an expert guide on the Four Great Classical Novels of Chinese Literature (四大名著). Be concise, insightful, and helpful. Respond in ${isZh ? 'Chinese (Simplified)' : 'English'}.`;
  if (book) {
    sysContext += `\n\nCurrent novel: ${book.title} (${book.subtitle}) by ${book.author}.`;
    if (state.page === 'reader' && state.chapter !== null) {
      const ch = book.chapters[state.chapter];
      sysContext += `\nUser is reading Chapter ${ch.id}: "${ch.title}" (${ch.english}).\nChapter content: ${ch.content.slice(0, 1200)}`;
    }
  }

  const messages = [
    ...state.chat.messages.slice(-8).map(m => ({ role: m.role, content: m.content }))
  ];

  const groqMessages = [
    { role: 'system', content: sysContext },
    ...messages.map(m => ({ role: m.role, content: m.content })),
  ];

  fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'authorization': `Bearer ${state.apiKey}` },
    body: JSON.stringify({ model: 'llama-3.1-8b-instant', max_tokens: 1024, messages: groqMessages }),
  })
  .then(r => r.json())
  .then(data => {
    if (data.error) throw new Error(data.error.message);
    const answer = data.choices[0].message.content;
    state.chat.messages.push({ role: 'assistant', content: answer });
    if (typeof saveChatEntry === 'function') {
      saveChatEntry(state.book, state.chapter, userText, answer);
    }
  })
  .catch(e => {
    state.chat.messages.push({ role: 'assistant', content: `⚠️ ${e.message}` });
  })
  .finally(() => {
    state.chat.loading = false;
    renderCompanion();
  });
}
