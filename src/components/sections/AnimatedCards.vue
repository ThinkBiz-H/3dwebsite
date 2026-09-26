<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { revealHeading, revealUp } from "../../composables/useReveal";
import { attachTilt } from "../../composables/useTilt";
import { learningCards } from "../../data/content";
import Badge from "../ui/Badge.vue";

const tagColor = {
  Beginner: "blue",
  Intermediate: "cyan",
  Advanced: "slate",
};

const sectionEl = ref(null);
const headingEl = ref(null);
const gridEl = ref(null);
const cardEls = ref([]);
let cleanups = [];

onMounted(() => {
  revealHeading(headingEl.value, {
    type: "words",
    trigger: sectionEl.value,
    stagger: 0.03,
  });
  revealUp(gridEl.value.children, {
    trigger: gridEl.value,
    start: "top 85%",
    y: 50,
    stagger: 0.1,
  });

  cleanups = cardEls.value.map((el) => attachTilt(el, { max: 5 }));
});

onBeforeUnmount(() => cleanups.forEach((fn) => fn()));
</script>

<template>
  <section
    ref="sectionEl"
    class="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
  >
    <!-- ================= SECTION 09 ================= -->

    <div class="border-b border-slate-200 pb-20">
      <h2 ref="headingEl" class="mt-4 text-4xl font-bold text-slate-900">
        Who this site is for
      </h2>

      <div class="mt-10 grid gap-10 md:grid-cols-2">
        <ul class="space-y-6 text-lg text-slate-700">
          <li>
            — Someone who keeps hearing about crypto and wants to actually
            understand it
          </li>
          <li>
            — Someone who wants the plain-English version, not the technical
            whitepaper
          </li>
        </ul>

        <ul class="space-y-6 text-lg text-slate-700">
          <li>— Someone who's curious but nervous about scams</li>
          <li>
            — Someone who wants both sides — benefits and risks — not a sales
            pitch
          </li>
        </ul>
      </div>
    </div>

    <!-- ================= SECTION 10 ================= -->

    <div class="pt-20">
      <div class="flex items-end justify-between">
        <div>
          <h2 class="mt-4 text-4xl font-bold text-slate-900">
            Explore our guides
          </h2>
        </div>

        <RouterLink
          to="/articles"
          class="hidden md:block text-sm text-slate-600 hover:text-slate-900"
        >
          View all guides →
        </RouterLink>
      </div>

      <div
        ref="gridEl"
        class="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-white md:grid md:grid-cols-2 lg:grid-cols-4"
      >
        <RouterLink
          v-for="(card, i) in learningCards"
          :key="card.title"
          :to="card.link || '#'"
          :ref="(el) => (cardEls[i] = el?.$el ?? el)"
          class="group border-r border-b border-slate-200 p-8 transition hover:bg-slate-50"
        >
          <p
            class="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-600"
          >
            {{ card.tag }}
          </p>

          <h3
            class="mt-5 text-2xl font-bold text-slate-900 transition group-hover:text-blue-700"
          >
            {{ card.title }}
          </h3>

          <p class="mt-5 leading-7 text-slate-600">
            {{ card.description }}
          </p>

          <div
            class="mt-8 flex items-center text-blue-700 opacity-0 transition duration-300 group-hover:opacity-100"
          >
            Read Guide

            <svg
              class="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- ================= PROMISE ================= -->

    <div class="mt-24 rounded-2xl bg-[#edf8f7] p-10">
      <p
        class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
      >
        OUR PROMISE TO YOU
      </p>

      <div class="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div class="flex gap-3">
          <span class="text-green-700">✓</span>
          <p class="text-slate-700">
            We will never tell you a coin is
            <strong>"guaranteed"</strong>
            to go up.
          </p>
        </div>

        <div class="flex gap-3">
          <span class="text-green-700">✓</span>
          <p class="text-slate-700">
            We will never accept payment to favor one exchange or coin.
          </p>
        </div>

        <div class="flex gap-3">
          <span class="text-green-700">✓</span>
          <p class="text-slate-700">
            We will always show risks alongside benefits, every time.
          </p>
        </div>

        <div class="flex gap-3">
          <span class="text-green-700">✓</span>
          <p class="text-slate-700">
            We will keep content dated and reviewed by credentialed people.
          </p>
        </div>
      </div>

      <!-- Disclaimer -->

      <div class="mt-10 rounded-xl border border-cyan-200 bg-white p-6">
        <h4 class="text-lg font-bold text-slate-900">
          EDUCATIONAL CONTENT — NOT FINANCIAL ADVICE
        </h4>

        <p class="mt-3 leading-7 text-slate-600">
          Everything on CryptoLearner is created to help you understand how
          cryptocurrency works. Nothing on this website should be considered
          investment, legal, or financial advice. Always do your own research
          and consult a qualified professional before making financial decisions
        </p>
      </div>
    </div>
  </section>
  <!-- Educational Disclaimer -->
</template>
