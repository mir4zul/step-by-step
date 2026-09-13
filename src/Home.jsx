import { sections, wordCount } from './content.js'

const number = (value) => value.toLocaleString('bn-BD')

export default function Home() {
  return (
      <main id="main-content" className="mx-auto max-w-6xl px-6">
        <section className="border-b border-stone-200 py-16 sm:py-24">
          <p className="mb-6 text-xs font-semibold tracking-widest text-green-700">একটু থামুন · একটু পড়ুন</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-snug sm:text-6xl">ছোট ছোট ভাবনা,<br /><span className="text-stone-400">দীর্ঘ এক পাঠযাত্রা।</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-loose text-stone-600">দৈনন্দিন জীবন, নতুন কিছু শেখা আর নিজের মতো করে এগিয়ে চলা নিয়ে একটি সহজ পাঠের জায়গা। সময় নিয়ে পড়ুন, নিজের ছন্দে এগিয়ে যান।</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href="#reading" className="rounded-full bg-green-900 px-6 py-3 text-sm font-medium text-white hover:bg-green-800">পড়া শুরু করুন ↓</a>
            <span className="text-sm text-stone-500">{number(wordCount)} শব্দ · {number(sections.length)} অধ্যায়</span>
          </div>
        </section>
        <div className="grid gap-12 py-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <aside id="contents" aria-label="সূচিপত্র">
            <div className="lg:sticky lg:top-8">
              <p className="mb-5 text-sm font-semibold">এই লেখায় যা আছে</p>
              <ol className="grid max-h-72 gap-3 overflow-y-auto pr-3 text-sm text-stone-500 lg:max-h-[65vh]">
                {sections.map((section, index) => <li key={section.id}><a className="hover:text-green-800" href={`#${section.id}`}><span className="mr-3 text-stone-400">{number(index + 1).padStart(2, '০')}</span>{section.title}</a></li>)}
              </ol>
              <p className="mt-6 text-xs leading-relaxed text-stone-400">দীর্ঘ পেজের ডেমো হিসেবে নমুনা অনুচ্ছেদ বিভিন্ন অধ্যায়ে পুনরায় ব্যবহার করা হয়েছে।</p>
            </div>
          </aside>
          <article id="reading" aria-label="দীর্ঘ পাঠ" className="min-w-0 max-w-3xl">
            {sections.map((section, index) => (
              <section id={section.id} key={section.id} className="mb-14 border-b border-stone-200 pb-10">
                <p className="mb-3 text-xs font-medium text-green-700">অধ্যায় {number(index + 1)}</p>
                <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">{section.title}</h2>
                {section.paragraphs.map((paragraph, i) => <p key={i} className="mb-6 text-base leading-[2.1] text-stone-600 sm:text-lg">{paragraph}</p>)}
              </section>
            ))}
            <a href="#top" className="inline-block rounded-full border border-stone-300 px-6 py-3 text-sm hover:bg-white">শুরুতে ফিরে যান ↑</a>
          </article>
        </div>
      </main>
  )
}
