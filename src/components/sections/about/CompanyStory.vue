<script setup>
import { onMounted, ref } from 'vue'
import { revealHeading, revealUp } from '../../../composables/useReveal'
import { aboutStory } from '../../../data/content'

const sectionEl = ref(null)
const headingEl = ref(null)
const paraEl = ref(null)
const visualEl = ref(null)

onMounted(() => {
  revealHeading(headingEl.value, { type: 'words', trigger: sectionEl.value, stagger: 0.02 })
  revealUp(paraEl.value.children, { trigger: paraEl.value, start: 'top 85%', y: 24, stagger: 0.1 })
  revealUp(visualEl.value, { trigger: sectionEl.value, start: 'top 80%', y: 30 })
})
</script>

<template>
  <section ref="sectionEl" class="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
    <div>
      <p class="mb-4 text-sm font-semibold text-blue-600">{{ aboutStory.eyebrow }}</p>
      <h2 ref="headingEl" class="font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
        {{ aboutStory.heading }}
      </h2>

      <div ref="paraEl" class="mt-8 space-y-5">
        <p v-for="(p, i) in aboutStory.paragraphs" :key="i" class="text-base leading-relaxed text-gray-500">
          {{ p }}
        </p>
      </div>
    </div>

    <div ref="visualEl" class="relative h-80 lg:h-full">
      <div class="absolute inset-0 rounded-2xl border border-slate-200/80 bg-white shadow-lift">
        <div class="flex h-full flex-col justify-between p-8">
          <div class="flex items-center justify-between">
            <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-gray-500">Since 2021</span>
            <span class="h-2 w-2 rounded-full bg-cyan-500" />
          </div>
          <div>
            <p class="font-display text-5xl font-bold text-blue-600">12</p>
            <p class="mt-1 text-sm text-gray-400">Full-time mentors teaching live, every week</p>
          </div>
        </div>
      </div>
      <div class="absolute -bottom-6 -left-6 h-28 w-40 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card sm:-left-10">
        <p class="font-display text-2xl font-bold text-gray-900">46</p>
        <p class="mt-1 text-xs text-gray-400">Countries represented</p>
      </div>
      <div
        class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/[0.12] blur-[90px]"
      />
    </div>
  </section>
</template>
