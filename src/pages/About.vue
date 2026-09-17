<script setup>
import { aboutHero, aboutStats, aboutCta } from '../data/content'
import { useSeoMeta } from '../composables/useSeoMeta'
import PageHero from '../components/sections/PageHero.vue'
import CompanyStory from '../components/sections/about/CompanyStory.vue'
import MissionVision from '../components/sections/about/MissionVision.vue'
import AboutTimeline from '../components/sections/about/AboutTimeline.vue'
import ValuesGrid from '../components/sections/about/ValuesGrid.vue'
import StatsCounter from '../components/sections/StatsCounter.vue'
import CtaBanner from '../components/sections/CtaBanner.vue'

useSeoMeta({
  title: 'About',
  description: aboutHero.subtitle,
  path: '/about',
})
</script>

<template>
  <PageHero :eyebrow="aboutHero.eyebrow" :heading="aboutHero.heading" :subtitle="aboutHero.subtitle" />
  <CompanyStory />
  <MissionVision />
  <AboutTimeline />
  <StatsCounter :stats="aboutStats" />
  <ValuesGrid />
  <CtaBanner :data="aboutCta" />
</template>
