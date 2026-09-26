<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { gsap, ScrollTrigger } from "../composables/gsapSetup";

import { useLenis } from "../composables/useLenis";
import { useSeoMeta, SITE_URL } from "../composables/useSeoMeta";

import HeroSection from "../components/sections/HeroSection.vue";
import CryptoBasics from "../components/sections/home/CryptoBasics.vue";
import BenefitsRisks from "../components/sections/home/BenefitsRisks.vue";
import FeaturesGrid from "../components/sections/FeaturesGrid.vue";
import ProsVsCons from "../components/sections/home/ProsVsCons.vue";
import StatsCounter from "../components/sections/StatsCounter.vue";
import SafetyChecklist from "../components/sections/home/SafetyChecklist.vue";
import AnimatedCards from "../components/sections/AnimatedCards.vue";
import TrustStrip from "../components/sections/home/TrustStrip.vue";
import FaqSection from "../components/sections/FaqSection.vue";

const bg = ref(null);

const route = useRoute();
const { scrollTo } = useLenis();

useSeoMeta({
  title: "CryptoLearner.us | Learn Cryptocurrency, Blockchain, Bitcoin & Web3",
  description:
    "Learn cryptocurrency, Bitcoin, Ethereum, blockchain, Web3, DeFi and NFTs with beginner-friendly tutorials, in-depth guides and expert insights. Start your crypto journey with CryptoLearner.us.",
  path: "/",
});

onMounted(async () => {
  await nextTick();

  // Each [data-bg-color] wrapper owns one solid color scene. A section's
  // "active range" runs from the moment its top edge crosses the viewport
  // center to the moment its bottom edge does — and because sections sit
  // flush against each other in the document, one section's bottom edge
  // is the exact same point as the next section's top edge. That makes
  // the ranges tile the scroll distance perfectly: no gaps, no overlap,
  // so exactly one section is ever "active" at a time. onToggle only
  // reacts when a section *becomes* active, in either scroll direction,
  // which is what drives the single fade to that section's color. Colors
  // are never scrubbed or blended — only ever crossfaded between two flat
  // values, and any in-flight fade is replaced (never stacked) by the next.
  const sections = gsap.utils.toArray("[data-bg-color]");
  let activeColor = sections[0]?.dataset.bgColor ?? "#ffffff";

  const activateColor = (color) => {
    if (color === activeColor) return;
    activeColor = color;
    gsap.to(bg.value, {
      backgroundColor: color,
      duration: 0.7,
      ease: "power2.inOut",
      overwrite: true,
    });
  };

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onToggle: (self) => {
        if (self.isActive) activateColor(section.dataset.bgColor);
      },
    });
  });

  ScrollTrigger.refresh();

  if (route.hash) {
    scrollTo(route.hash, { immediate: true });
  }
});
</script>

<template>
  <!-- Fullscreen color-scene background: a single fixed layer behind every
       section. It always holds exactly one flat color — never a gradient
       or a blend of two. The [data-bg-color] wrappers below are the only
       thing that ever changes it, and only via the ScrollTrigger logic
       above; the sections themselves stay fully transparent so this layer
       is what the viewport actually shows. -->

  <div id="bg-layer" ref="bg" style="background-color: #ffffff"></div>

  <section data-bg-color="#ffffff">
    <HeroSection />
  </section>

  <section data-bg-color="#C1E1FB">
    <CryptoBasics />
  </section>

  <section data-bg-color="#EADFFF">
    <BenefitsRisks />
  </section>

  <section data-bg-color="#FFF4D8">
    <ProsVsCons />
  </section>

  <section data-bg-color="#DDF8EA">
    <FeaturesGrid />
  </section>

  <section data-bg-color="#E8F3FF">
    <StatsCounter transparent />
  </section>

  <section data-bg-color="#FFF7E8">
    <SafetyChecklist />
  </section>

  <section data-bg-color="#F3E5FF">
    <AnimatedCards />
  </section>

  <section data-bg-color="#F5F8FC">
    <TrustStrip />
  </section>

  <section data-bg-color="#FFFFFF">
    <FaqSection />
  </section>
</template>

<style scoped>
#bg-layer {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  will-change: background-color;
}
</style>
