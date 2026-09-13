import Header from './Header.jsx'
import Home from './Home.jsx'
import { About, Articles, Guide, NotFound } from './Pages.jsx'

const routes = {
  '/': { component: Home, title: 'হোম' },
  '/about': { component: About, title: 'আমাদের সম্পর্কে' },
  '/articles': { component: Articles, title: 'লেখাসমূহ' },
  '/guide': { component: Guide, title: 'পড়ার নির্দেশিকা' },
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const route = routes[path] || { component: NotFound, title: 'পৃষ্ঠা পাওয়া যায়নি' }
  const Page = route.component
  document.title = `${route.title} | পড়ার অবসর`

  return (
    <div id="top">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:block focus:p-4">মূল লেখায় যান</a>
      <Header path={path} />
      <Page />
      <footer className="border-t border-stone-200 px-6 py-8 text-center text-sm text-stone-500">পড়ার অবসর · নিজের ছন্দে, নিজের সময় নিয়ে।</footer>
    </div>
  )
}
