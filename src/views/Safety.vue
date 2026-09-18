<script setup>
const guides = [
  {
    title: "How to Spot a Crypto Scam",
    desc: "The core warning signs — guaranteed returns, pressure to act fast, secrecy — explained with real examples of how scams actually present themselves.",
  },
  {
    title: "Crypto Rug Pull Meaning",
    desc: "A plain definition of one of the most common ways new tokens collapse, and the signs that usually show up beforehand.",
  },
  {
    title: "Pig Butchering Scam",
    desc: "A fast-growing and especially cruel scam pattern that often starts as a friendship or romance. Here's how to recognize it early.",
  },
  {
    title: "Crypto Giveaway Scams",
    desc: "Why “send 1 to get 2 back” offers — even ones appearing to come from celebrities — are always fake, no exceptions.",
  },
  {
    title: "Is This Exchange Legit?",
    desc: "A step-by-step way to check whether a platform is actually registered and trustworthy before you deposit money.",
  },
  {
    title: "How to Recover Stolen Crypto",
    desc: "What to actually do if you've been scammed — including the legitimate agencies to contact, and why “recovery services” advertised online are usually a second scam.",
  },
  {
    title: "Two-Factor Authentication , Explained",
    desc: "A five-minute setup that blocks the majority of account takeover attempts. Here's exactly how to turn it on.",
  },
  {
    title: "Fake Exchange Warning Signs",
    desc: "How to tell a real exchange website from a convincing fake one before you ever type in your password.",
  },
];
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white text-slate-800"
  >
    <!-- Hero -->
    <section class="relative overflow-hidden px-6 pt-20 pb-16">
      <!-- soft blue glow -->
      <div
        class="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
      ></div>

      <div class="relative max-w-5xl mx-auto">
        <span
          class="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-sky-700 bg-sky-100 border border-sky-200 px-3 py-1 rounded-full"
        >
          Safety &amp; Scams
        </span>

        <h1
          class="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-['Space_Grotesk']"
        >
          The section we think
          <span class="text-sky-600">matters most.</span>
        </h1>

        <p class="mt-6 text-lg text-slate-600 leading-8 max-w-3xl">
          More people lose money in crypto to scams than to honest bad luck.
          This section exists to help you recognize the warning signs before
          it's too late — not after. Read this before you send your first dollar
          anywhere.
        </p>

        <div
          class="mt-8 inline-flex items-start gap-3 bg-white/70 backdrop-blur border border-sky-200 rounded-xl px-5 py-4 shadow-sm"
        >
          <span
            class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-bold"
          >
            i
          </span>
          <p class="text-sm text-slate-600 leading-6">
            <strong class="text-slate-800">Who this is for:</strong>
            anyone about to use an exchange or wallet for the first time, or
            anyone who's been contacted by someone promising guaranteed crypto
            profits.
          </p>
        </div>
      </div>
    </section>

    <!-- Guides -->
    <section class="px-6 py-16 border-t border-sky-100">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-end justify-between mb-10">
          <h2 class="text-3xl font-bold text-slate-900 font-['Space_Grotesk']">
            Guides in this section
          </h2>
          <span class="hidden md:block text-sm text-sky-600 font-medium">
            {{ guides.length }} articles
          </span>
        </div>

        <div class="space-y-4">
          <article
            v-for="(guide, index) in guides"
            :key="guide.title"
            class="group grid md:grid-cols-[180px_1fr] gap-6 bg-white border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-sky-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div class="flex md:flex-col gap-3 md:gap-2">
              <span
                class="text-xs uppercase tracking-widest text-sky-700 font-semibold"
              >
                Safety
              </span>
              <span class="text-xs text-slate-400 font-mono md:mt-1">
                #{{ String(index + 1).padStart(2, "0") }}
              </span>
            </div>

            <div>
              <h3
                class="text-xl font-semibold text-slate-900 font-['Space_Grotesk'] mb-2 group-hover:text-sky-700 transition-colors"
              >
                {{ guide.title }}
              </h3>

              <p class="text-slate-600 leading-7">
                {{ guide.desc }}
              </p>

              <div
                class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Read guide
                <span aria-hidden="true">→</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Warning / disclaimer -->
        <div
          class="mt-10 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 text-amber-900 leading-7"
        >
          <strong class="text-amber-800">Heads up:</strong>
          This section describes scam patterns for protective, educational
          purposes only. It does not name specific ongoing scams or give any
          information that could help someone run one.
        </div>
      </div>
    </section>
  </main>
</template>
