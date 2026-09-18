<script setup>
const guides = [
  {
    title: "Self-Custody vs. Exchange Custody",
    desc: "What actually happens to your coins in each case, the trade-offs of both, and how to decide which fits you.",
  },
  {
    title: "Hardware Wallet vs. Software Wallet",
    desc: "A practical comparison of the two main ways to hold your own crypto, including cost and convenience differences.",
  },
  {
    title: "How to Secure a Crypto Wallet",
    desc: "A step-by-step checklist covering the handful of habits that prevent the vast majority of wallet theft.",
  },
  {
    title: "Is Coinbase Regulated?",
    desc: "A factual answer to a commonly searched question — explained clearly, without this being an endorsement of any specific platform.",
  },
  {
    title: "Best Regulated Crypto Exchanges",
    desc: "Not a ranked list — a guide to how to check registration and regulatory status yourself, so you're not relying on anyone else's opinion.",
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
          Exchanges &amp; Wallets
        </span>

        <h1
          class="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-['Space_Grotesk']"
        >
          Where your crypto actually lives,
          <span class="text-sky-600">and who controls it.</span>
        </h1>

        <p class="mt-6 text-lg text-slate-600 leading-8 max-w-3xl">
          Buying crypto is only step one. This section covers where you store
          it, who's really in control of it, and the practical security steps
          that make the biggest difference.
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
            anyone who has crypto already, or is about to buy some, and wants to
            understand their storage options before choosing one.
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
                Exchanges
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

        <!-- Disclaimer -->
        <div
          class="mt-10 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 text-amber-900 leading-7"
        >
          <strong class="text-amber-800">Note:</strong>
          Mentioning a named platform is for factual, educational reference only
          and is never an endorsement or recommendation to use it.
        </div>
      </div>
    </section>
  </main>
</template>
