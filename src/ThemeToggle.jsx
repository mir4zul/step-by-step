import { useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  function toggleTheme() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    setDark(next)
    try { localStorage.setItem('reading-theme', next ? 'dark' : 'light') } catch {}
  }

  return (
    <button type="button" role="switch" aria-checked={dark} aria-label="Dark mode"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      translate="no" onClick={toggleTheme} className="theme-switch notranslate">
      <span className="theme-switch-thumb" aria-hidden="true" />
      <svg className="theme-switch-sun" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
      <svg className="theme-switch-moon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 13.2A8.5 8.5 0 0 1 10.8 3.5a8.5 8.5 0 1 0 9.7 9.7Z" />
      </svg>
    </button>
  )
}
