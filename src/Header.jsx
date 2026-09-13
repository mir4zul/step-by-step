import GoogleTranslate from './GoogleTranslate.jsx'

const links = [
  ['/', 'হোম'],
  ['/about', 'আমাদের সম্পর্কে'],
  ['/articles', 'লেখাসমূহ'],
  ['/guide', 'পড়ার নির্দেশিকা'],
]

export default function Header({ path }) {
  return (
    <header className="border-b border-stone-200 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-5">
        <a href="/" className="text-xl font-bold tracking-tight">পড়ার অবসর<span className="text-lime-600">.</span></a>
        <div className="flex items-center"> <GoogleTranslate /> </div>
      </div>
      <nav aria-label="প্রধান নেভিগেশন" className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 pb-4">
        {links.map(([href, label]) => (
          <a key={href} href={href} aria-current={path === href ? 'page' : undefined}
            className={`rounded-full px-4 py-2 text-sm ${path === href ? 'bg-green-900 text-white' : 'text-stone-600 hover:bg-stone-100'}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
