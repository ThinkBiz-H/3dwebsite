<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showContact = ref(false);
const fabRef = ref(null);
const panelRef = ref(null);

const glossary = [
  {
    title: "HODL",
    desc: "Crypto slang for holding onto an asset long-term instead of selling during price swings. Originally a misspelling of “hold” that stuck.",
  },
  {
    title: "Blockchain",
    desc: "A shared, public record of transactions that many computers agree on together, instead of one central authority keeping the books.",
  },
  {
    title: "Seed Phrase",
    desc: "A list of 12–24 random words that acts as the master password to a crypto wallet. Lose it, and there's usually no way to recover your funds.",
  },
  {
    title: "Gas Fee",
    desc: "The cost charged to process a transaction on certain blockchains, similar in idea to a transaction or processing fee.",
  },
  {
    title: "Market Cap",
    desc: "The total value of all coins of a given cryptocurrency in circulation — one basic way (not the only way) people compare the size of different coins.",
  },
  {
    title: "Whitepaper",
    desc: "A document a crypto project publishes explaining what it does and how it works, similar to a business plan. Worth reading before trusting a claim about a coin.",
  },
  {
    title: "Slippage",
    desc: "The difference between the price you expected for a trade and the price you actually got, usually caused by fast-moving markets.",
  },
  {
    title: "Cold Wallet",
    desc: "A wallet that stores your crypto offline, disconnected from the internet, making it much harder to hack remotely.",
  },
];

const togglePanel = () => {
  showContact.value = !showContact.value;
};

const handleOutsideClick = (e) => {
  if (!showContact.value) return;
  const inPanel = panelRef.value && panelRef.value.contains(e.target);
  const inFab = fabRef.value && fabRef.value.contains(e.target);
  if (!inPanel && !inFab) showContact.value = false;
};

onMounted(() => document.addEventListener("click", handleOutsideClick));
onUnmounted(() => document.removeEventListener("click", handleOutsideClick));
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
          Glossary
        </span>

        <h1
          class="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-['Space_Grotesk']"
        >
          Crypto has its own language.
          <span class="text-sky-600">Here's the dictionary.</span>
        </h1>

        <p class="mt-6 text-lg text-slate-600 leading-8 max-w-3xl">
          Every industry develops its own shorthand, and crypto has more of it
          than most. This section is a running list of terms you'll run into
          everywhere else on this site (and across the internet), each explained
          in one or two plain sentences.
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
            anyone who hits an unfamiliar word mid-article and wants a fast,
            clear answer — no searching required.
          </p>
        </div>
      </div>
    </section>

    <!-- Glossary -->
    <section class="px-6 py-16 border-t border-sky-100">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-end justify-between mb-10">
          <h2 class="text-3xl font-bold text-slate-900 font-['Space_Grotesk']">
            Sample Entries
          </h2>
          <span class="hidden md:block text-sm text-sky-600 font-medium">
            {{ glossary.length }} terms
          </span>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <article
            v-for="item in glossary"
            :key="item.title"
            class="group bg-white border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-sky-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            <h3
              class="text-xl font-semibold text-slate-900 font-['Space_Grotesk'] mb-2 group-hover:text-sky-700 transition-colors"
            >
              {{ item.title }}
            </h3>

            <p class="text-slate-600 leading-7">
              {{ item.desc }}
            </p>
          </article>
        </div>

        <!-- Disclaimer -->
        <div
          class="mt-10 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 text-amber-900 leading-7"
        >
          <strong class="text-amber-800">Living page:</strong>
          This glossary is a living page — new terms are added as they come up across our guides. If you searched for a term and didn't find it here, use the “Talk to us” button and we'll add it.
          <b>Talk to us</b> button.
        </div>
      </div>
    </section>

    <!-- Contact Panel -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-4 opacity-0"
    >
      <div
        v-if="showContact"
        ref="panelRef"
        class="fixed bottom-24 right-6 z-50 w-[22rem] max-w-[calc(100vw-3rem)] rounded-2xl bg-white border border-sky-200 shadow-2xl shadow-sky-200/50 overflow-hidden"
      >
        <div
          class="bg-gradient-to-br from-sky-500 to-blue-600 px-6 py-5 text-white"
        >
          <div
            class="text-xs uppercase tracking-widest text-sky-100 font-semibold"
          >
            Get in touch
          </div>
          <h4 class="mt-1 text-lg font-semibold font-['Space_Grotesk']">
            Talk to CryptoLearner
          </h4>
          <p class="mt-1 text-sm text-sky-50/90 leading-6">
            Questions, corrections, or feedback on a guide — we read every
            message ourselves.
          </p>
        </div>

        <div class="p-4 space-y-2">
          <a
            class="flex items-center gap-3 rounded-xl p-3 hover:bg-sky-50 transition-colors"
            href="tel:+18005551234"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-lg"
            >
              ☎
            </div>
            <div class="text-sm">
              <b class="block text-slate-800">Call us</b>
              <span class="text-slate-500">
                +1 (800) 555-1234 · Mon–Fri, 9am–6pm ET
              </span>
            </div>
          </a>

          <a
            class="flex items-center gap-3 rounded-xl p-3 hover:bg-sky-50 transition-colors"
            href="https://wa.me/18005551234"
            target="_blank"
            rel="noopener"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-lg"
            >
              💬
            </div>
            <div class="text-sm">
              <b class="block text-slate-800">Chat on WhatsApp</b>
              <span class="text-slate-500">Usually replies within an hour</span>
            </div>
          </a>

          <a
            class="flex items-center gap-3 rounded-xl p-3 hover:bg-sky-50 transition-colors"
            href="mailto:hello@cryptolearner.com"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-lg"
            >
              ✉
            </div>
            <div class="text-sm">
              <b class="block text-slate-800">Email us</b>
              <span class="text-slate-500">hello@cryptolearner.com</span>
            </div>
          </a>
        </div>

        <div class="border-t border-sky-100 bg-sky-50/60 px-5 py-3">
          <p class="text-xs text-slate-500 leading-5">
            We never ask for wallet keys, passwords, or payment over chat.
          </p>
        </div>
      </div>
    </transition>

    <!-- Floating Button -->
    <button
      ref="fabRef"
      class="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 px-5 py-3 text-white font-medium shadow-lg shadow-sky-300/50 hover:shadow-xl hover:shadow-sky-400/50 hover:-translate-y-0.5 transition-all"
      @click="togglePanel"
    >
      <span class="relative flex h-2 w-2">
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
        ></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
      </span>
      <span>{{ showContact ? "Close" : "Talk to us" }}</span>
    </button>
  </main>
</template>
