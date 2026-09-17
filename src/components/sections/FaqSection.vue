<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from '../../composables/gsapSetup'
import { revealHeading, revealUp } from '../../composables/useReveal'
import { faqs as defaultFaqs } from '../../data/content'

const props = defineProps({
  faqs: { type: Array, default: () => defaultFaqs },
  eyebrow: { type: String, default: 'Before you start' },
  heading: { type: String, default: 'Questions we get asked the most.' },
  sectionId: { type: String, default: 'faq' },
})

const sectionEl = ref(null)
const headingEl = ref(null)
const listEl = ref(null)
const openIndex = ref(null)
const panelRefs = ref([])

function toggle(i) {
  const panel = panelRefs.value[i]
  const isOpen = openIndex.value === i

  if (openIndex.value !== null && openIndex.value !== i) {
    const prevPanel = panelRefs.value[openIndex.value]
    gsap.to(prevPanel, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' })
  }

  if (isOpen) {
    gsap.to(panel, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' })
    openIndex.value = null
  } else {
    gsap.set(panel, { height: 'auto' })
    gsap.from(panel, { height: 0, opacity: 0, duration: 0.45, ease: 'power2.inOut' })
    gsap.to(panel, { opacity: 1, duration: 0.4 })
    openIndex.value = i
  }
}

onMounted(() => {
  revealHeading(headingEl.value, { type: 'words', trigger: sectionEl.value, stagger: 0.03 })
  revealUp(listEl.value.children, { trigger: listEl.value, start: 'top 85%', y: 30, stagger: 0.08 })
  panelRefs.value.forEach((p) => gsap.set(p, { height: 0, opacity: 0 }))
})
</script>

<template>
  <section :id="sectionId" ref="sectionEl" class="relative mx-auto max-w-4xl px-6 py-28 lg:px-10">
    <div class="mx-auto max-w-xl text-center">
      <p class="mb-4 text-sm font-semibold text-cyan-600">{{ eyebrow }}</p>
      <h2 ref="headingEl" class="font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
        {{ heading }}
      </h2>
    </div>

    <div ref="listEl" class="mt-14 space-y-3">
      <div v-for="(faq, i) in props.faqs" :key="faq.question" class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card">
        <button
          class="flex w-full items-center justify-between px-7 py-6 text-left"
          data-cursor-hover
          @click="toggle(i)"
        >
          <span class="pr-6 text-base font-medium text-gray-900">{{ faq.question }}</span>
          <span
            class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-gray-500 transition-transform duration-300"
            :class="openIndex === i && 'rotate-45'"
          >
            +
          </span>
        </button>
        <div :ref="(el) => (panelRefs[i] = el)" class="overflow-hidden px-7">
          <p class="pb-6 text-sm leading-relaxed text-gray-500">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
