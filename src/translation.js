export const languages = ['bn', 'en', 'hi', 'ar', 'ur', 'fr', 'de', 'es', 'pt', 'ru', 'ja', 'ko', 'zh-CN']

export function ensureDefaultEnglish() {
  if (!document.cookie.split('; ').some((cookie) => cookie.startsWith('googtrans='))) {
    document.cookie = 'googtrans=/bn/en; Path=/; Max-Age=31536000; SameSite=Lax'
  }
}

export function saveLanguage(language) {
  if (!languages.includes(language)) return
  sessionStorage.setItem('reading-scroll-y', String(window.scrollY))
  sessionStorage.setItem('reading-translating', '1')
  // Root-scoped cookie carries the selection to every route and page refresh.
  document.cookie = `googtrans=/bn/${language}; Path=/; Max-Age=31536000; SameSite=Lax`
}

export function restoreReadingPosition() {
  const position = Number(sessionStorage.getItem('reading-scroll-y'))
  const translating = sessionStorage.getItem('reading-translating') === '1'
  if (translating) {
    document.documentElement.classList.add('translation-changing')
    sessionStorage.removeItem('reading-translating')
    window.setTimeout(() => document.documentElement.classList.remove('translation-changing'), 420)
  }
  if (Number.isFinite(position) && position > 0) {
    window.requestAnimationFrame(() => window.scrollTo({ top: position, behavior: 'auto' }))
    sessionStorage.removeItem('reading-scroll-y')
  }
}

export function restoreBengali() {
  // Google may also write a domain cookie. Clear both scopes before reloading.
  const hostname = window.location.hostname
  const parts = hostname.split('.')
  const domains = ['', ...parts.map((_, index) => `; Domain=${parts.slice(index).join('.')}`)]
  const segments = window.location.pathname.split('/').filter(Boolean)
  const paths = ['/', ...segments.map((_, index) => `/${segments.slice(0, index + 1).join('/')}`)]
  for (const domain of domains) {
    for (const path of paths) {
      document.cookie = `googtrans=; Path=${path}; Max-Age=0${domain}`
    }
  }
  saveLanguage('bn')
  window.location.reload()
}
