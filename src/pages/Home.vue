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
  title: "Learn Crypto With Confidence",
  description: "Lumen Ledger teaches blockchain, Bitcoin and Crypto.",
  path: "/",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lumen Ledger",
    url: SITE_URL,
  },
});

onMounted(async () => {
  await nextTick();

  // The fixed #bg-layer holds exactly one flat color at any scroll position.
  // For each color zone we run a single scrubbed tween whose scroll range
  // spans from the previous zone's centered position to this zone's
  // centered position ("center center" -> "center center"). Consecutive
  // ranges share their boundary exactly (zone N's range ends where zone
  // N+1's range begins), so the ranges tile the scroll distance with no
  // gaps and no overlap: only one tween is ever "live" at a given scroll
  // position, color always matches scroll progress continuously, and two
  // colors are never blended or shown together.
  const sections = gsap.utils.toArray("[data-bg]");

  sections.forEach((section, i) => {
    const prevSection = sections[i - 1];
    const color = section.dataset.bg;
    const prevColor = prevSection ? prevSection.dataset.bg : "#ffffff";

    gsap.fromTo(
      bg.value,
      { backgroundColor: prevColor },
      {
        backgroundColor: color,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: prevSection || section,
          start: prevSection ? "center center" : "top bottom",
          endTrigger: section,
          end: "center center",
          scrub: true,
        },
      },
    );
  });

  ScrollTrigger.refresh();

  if (route.hash) {
    scrollTo(route.hash, { immediate: true });
  }
});
</script>

<template>
  <!-- Fullscreen color-zone background: one fixed layer behind all content,
       whose backgroundColor is scroll-scrubbed by the [data-bg] sections
       below. Never animate color on the sections themselves. -->
  <div id="bg-layer" ref="bg" style="background-color: #ffffff"></div>

  <HeroSection />

  <section data-bg="#DCEEFF">
    <CryptoBasics />
  </section>

  <section data-bg="#EADFFF">
    <BenefitsRisks />
  </section>

  <section data-bg="#FFF4D8">
    <ProsVsCons />
  </section>

  <section data-bg="#DDF8EA">
    <FeaturesGrid />
  </section>

  <section data-bg="#E8F3FF">
    <StatsCounter />
  </section>

  <section data-bg="#FFF7E8">
    <SafetyChecklist />
  </section>

  <section data-bg="#F3E5FF">
    <AnimatedCards />
  </section>

  <section data-bg="#F5F8FC">
    <TrustStrip />
  </section>

  <section data-bg="#FFFFFF">
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
