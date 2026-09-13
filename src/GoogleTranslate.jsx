import { useEffect, useRef } from 'react'
import { languages, saveLanguage } from './translation.js'

let translatorScript

function loadTranslator() {
  if (window.google?.translate?.TranslateElement) return Promise.resolve()
  if (translatorScript) return translatorScript

  translatorScript = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const timeout = window.setTimeout(() => fail(), 20000)
    const fail = () => {
      window.clearTimeout(timeout)
      script.remove()
      translatorScript = undefined
      reject(new Error('Google Translate could not load'))
    }
    window.initReadingTranslator = () => {
      window.clearTimeout(timeout)
      resolve()
    }
    script.src = 'https://translate.google.com/translate_a/element.js?cb=initReadingTranslator'
    script.async = true
    script.onerror = fail
    document.head.appendChild(script)
  })
  return translatorScript
}

export default function GoogleTranslate() {
  const container = useRef(null)
  const initialized = useRef(false)

  useEffect(() => {
    let disposed = false
    let observer
    let timeout
    const host = container.current
    const onLanguageChange = (event) => {
      if (event.target.matches('select.goog-te-combo')) {
        saveLanguage(event.target.value || 'bn')
      }
    }
    host.addEventListener('change', onLanguageChange, true)

    const showFailure = () => undefined

    loadTranslator().then(() => {
      if (disposed) return
      const checkDropdown = () => {
        const select = container.current.querySelector('select')
        if (!select?.options.length) return
        select.setAttribute('aria-label', 'অনুবাদের ভাষা নির্বাচন করুন / Select language')
        window.clearTimeout(timeout)
        observer.disconnect()
      }
      observer = new MutationObserver(checkDropdown)
      observer.observe(container.current, { childList: true, subtree: true })
      timeout = window.setTimeout(showFailure, 20000)
      if (!initialized.current) {
        // Google owns this empty container; React never reconciles its children.
        new window.google.translate.TranslateElement({
          pageLanguage: 'bn',
          includedLanguages: languages.join(','),
          autoDisplay: false,
        }, 'google_translate_element')
        initialized.current = true
      }
      checkDropdown()
    }).catch(showFailure)

    return () => {
      disposed = true
      observer?.disconnect()
      window.clearTimeout(timeout)
      host.removeEventListener('change', onLanguageChange, true)
    }
  }, [])

  return (
    <div className="notranslate max-w-full" translate="no" aria-label="ভাষা নির্বাচন করুন / Select language">
      <div id="google_translate_element" ref={container} />
    </div>
  )
}
