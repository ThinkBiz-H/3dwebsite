<script setup>
import { aboutHero, aboutStats, aboutCta } from "../data/content";
import { useSeoMeta } from "../composables/useSeoMeta";
import PageHero from "../components/sections/PageHero.vue";
import CompanyStory from "../components/sections/about/CompanyStory.vue";
import EditorialProcess from "../components/sections/about/EditorialProcess.vue";

import AuthorsGrid from "../components/sections/about/AuthorsGrid.vue";

import NeverList from "../components/sections/about/NeverList.vue";

import CorrectionsPolicy from "../components/sections/about/CorrectionsPolicy.vue";
import AboutContactOptions from "../components/sections/about/AboutContactOptions.vue";
import ClosingQuote from "../components/sections/about/ClosingQuote.vue";
import CtaBanner from "../components/sections/CtaBanner.vue";

useSeoMeta({
  title: "About",
  description: aboutHero.subtitle,
  path: "/about",
});
</script>

<template>
  <PageHero
    :eyebrow="aboutHero.eyebrow"
    :heading="aboutHero.heading"
    :subtitle="aboutHero.subtitle"
  />
  <CompanyStory />
  <EditorialProcess />

  <AuthorsGrid />

  <NeverList />

  <CorrectionsPolicy />
  <AboutContactOptions />
  <ClosingQuote />
</template>
