# Step by Step

React + Vite + Tailwind CSS দিয়ে তৈরি বাংলা long-form home page।

## Run

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

লেখা সম্পাদনা করতে `src/content.js`, layout পরিবর্তন করতে `src/App.jsx` ব্যবহার করুন। নমুনা অনুচ্ছেদ বিভিন্ন অধ্যায়ে পুনরায় ব্যবহার করা হয়েছে। শুধু article paragraphs গণনা করেই কমপক্ষে ১০,০০০ শব্দ রাখা হয়েছে।

Tailwind setup: https://tailwindcss.com/docs/installation/using-vite

## Google Translate

## Pages and navigation

Routes: `/` (Home), `/about`, `/articles`, `/guide`; unknown paths show a not-found page. All pages use `src/Header.jsx` with an active navigation link and a compact Google Translate language-only dropdown. Navigation uses normal page links so Google-translated DOM is freshly created for each page. Google’s root-scoped `googtrans` cookie remembers the selected language across routes and refreshes. Language changes preserve scroll position, hide the top banner, and use a short fade while Google updates the page.

প্রথমবার ভিজিট করলে English ডিফল্ট হিসেবে সেট হয়; এরপর নির্বাচিত ভাষা cookie থেকে restore হয়।

Production hosting must rewrite page requests (such as `/about`) to `/index.html`. Vite dev and preview handle this fallback automatically.

### Language options

Header-এ Google-এর native language dropdown আছে। মূল ভাষা বাংলা; English, Hindi, Arabic, Urdu, French, German, Spanish, Portuguese, Russian, Japanese, Korean এবং Simplified Chinese-এ অনুবাদ নির্বাচন করা যায়। Google toolbar-এর original language option দিয়ে মূল লেখা ফেরত আনা যায়।

`src/GoogleTranslate.jsx`-এর `includedLanguages` দিয়ে ভাষার তালিকা পরিবর্তন করা যায়। API key লাগে না; widget এবং অনুবাদ লোড হতে internet ও Google service access প্রয়োজন।

Google বর্তমানে academic, government, nonprofit অথবা non-commercial websites-এর eligibility উল্লেখ করে: https://support.google.com/translate/answer/2534559?hl=en
