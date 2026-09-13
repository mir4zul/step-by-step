import { sections } from './content.js'

function Page({ eyebrow, title, children }) {
  return (
    <main id="main-content" className="mx-auto min-h-[65vh] max-w-6xl px-6 py-14 sm:py-20">
      <p className="mb-4 text-sm font-medium text-green-700">{eyebrow}</p>
      <h1 className="mb-8 text-4xl font-semibold leading-snug">{title}</h1>
      <div className="max-w-3xl space-y-6 text-lg leading-loose text-stone-600">{children}</div>
    </main>
  )
}

export function About() {
  return (
    <Page eyebrow="আমাদের গল্প" title="পড়ার জন্য একটু অবসর">
      <p>পড়ার অবসর হলো দৈনন্দিন জীবনের ছোট ছোট ভাবনা নিয়ে তৈরি একটি সহজ পাঠের জায়গা। এখানে নিজের সময় নিয়ে পড়া, নতুন প্রশ্ন করা এবং পরিচিত বিষয়কে নতুন চোখে দেখার সুযোগ আছে।</p>
      <p>আমাদের লেখাগুলো শেখার আনন্দ, ভালো অভ্যাস, সম্পর্ক ও সৃজনশীলতার মতো বিষয় ঘিরে সাজানো। দীর্ঘ লেখা পড়তে চাইলে হোম পেজে যান অথবা লেখাসমূহ থেকে পছন্দের অধ্যায় খুলুন।</p>
      <p>উপরের ভাষার তালিকা থেকে আপনার পছন্দের ভাষা বেছে নিতে পারেন। অন্য পেজে গেলেও একই ভাষায় পড়া চালিয়ে যেতে পারবেন।</p>
      <a href="/articles" className="inline-block rounded-full bg-green-900 px-6 py-3 text-sm text-white hover:bg-green-800">লেখাগুলো দেখুন ↗</a>
    </Page>
  )
}

export function Articles() {
  return (
    <Page eyebrow="পাঠের সংগ্রহ" title="আপনার পছন্দের অধ্যায় খুঁজুন">
      <p>প্রতিটি অধ্যায় একটি ছোট ভাবনার দরজা। নিচের যেকোনো লেখায় ক্লিক করলে হোম পেজের সেই অধ্যায়ে পৌঁছে যাবেন।</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section, index) => (
          <a key={section.id} href={`/#${section.id}`} className="rounded-2xl border border-stone-200 bg-white p-6 transition-colors hover:border-green-700">
            <p className="mb-2 text-xs text-green-700">অধ্যায় {(index + 1).toLocaleString('bn-BD')}</p>
            <h2 className="text-xl font-semibold text-stone-800">{section.title} ↗</h2>
          </a>
        ))}
      </div>
    </Page>
  )
}

export function Guide() {
  return (
    <Page eyebrow="সহজ নির্দেশিকা" title="নিজের ছন্দে পড়ুন">
      <h2 className="text-2xl font-semibold text-stone-800">ভাষা বেছে নিন</h2>
      <p>হেডারের ভাষার তালিকা থেকে যে ভাষায় পড়তে চান সেটি নির্বাচন করুন। অনুবাদ শেষ হতে কিছুটা সময় লাগতে পারে। বাংলা লেখায় ফিরে আসতে হেডারের বাংলা বোতামটি ব্যবহার করুন।</p>
      <h2 className="text-2xl font-semibold text-stone-800">পছন্দের জায়গা থেকে শুরু করুন</h2>
      <p>লেখাসমূহ পেজে সব অধ্যায়ের তালিকা আছে। হোম পেজের সূচিপত্র থেকেও সরাসরি কোনো অধ্যায়ে যাওয়া যায়। শুরু থেকে শেষ পর্যন্ত একবারে পড়ার প্রয়োজন নেই।</p>
      <h2 className="text-2xl font-semibold text-stone-800">বিরতি নিন, আবার ফিরে আসুন</h2>
      <p>লেখা পড়ার মাঝখানে একটু সময় নিয়ে ভাবুন। পছন্দের অধ্যায়ের লিংক বুকমার্ক করে রাখলে পরে সেই জায়গায় ফিরে আসা সহজ হবে।</p>
    </Page>
  )
}

export function NotFound() {
  return <Page eyebrow="৪০৪" title="এই পৃষ্ঠাটি পাওয়া যায়নি"><p>ঠিকানাটি সঠিক কি না দেখে নিন অথবা হোম পেজে ফিরে যান।</p><a href="/" className="text-green-800 underline">হোম পেজে ফিরুন</a></Page>
}
