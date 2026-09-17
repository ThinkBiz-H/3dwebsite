<script setup>
import { onMounted, ref } from "vue";
import { revealHeading, revealUp } from "../../../composables/useReveal";
import { cryptoUpside } from "../../../data/content";

const sectionEl = ref(null);
const headingEl = ref(null);
const risksEl = ref(null);

onMounted(() => {
  revealHeading(headingEl.value, {
    type: "words",
    trigger: sectionEl.value,
    stagger: 0.025,
  });
  revealUp(risksEl.value.children, {
    trigger: risksEl.value,
    start: "top 85%",
    y: 30,
    stagger: 0.08,
  });
});
</script>

<template>
  <section
    ref="sectionEl"
    class="relative overflow-hidden py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-6">
      <!-- Heading -->
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-sm font-semibold text-red-600"
        >
          READ THIS CAREFULLY
        </p>

        <h2
          ref="headingEl"
          class="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl"
        >
          The good side & the risks of crypto
        </h2>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Crypto has advantages, but it also carries real risks. Learn both
          before investing.
        </p>
      </div>

      <!-- Center Cards -->
      <div class="mt-20 flex justify-center">
        <div ref="risksEl" class="w-full max-w-3xl space-y-6">
          <p
            class="text-sm font-bold uppercase tracking-[0.18em] text-amber-600"
          >
            Risks
          </p>

          <div
            v-for="(risk, index) in cryptoUpside.risks"
            :key="risk.title"
            class="rounded-[28px] border border-amber-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-2xl font-semibold text-slate-900">
                {{ risk.title }}
              </h3>

              <span class="text-5xl font-black text-amber-100">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
            </div>

            <p class="mt-5 text-[17px] leading-8 text-slate-600">
              {{ risk.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
