<script setup>
import { contactHero, contactFaqs } from '../data/content'
import { useSeoMeta } from '../composables/useSeoMeta'
import PageHero from '../components/sections/PageHero.vue'
import ContactInfoCards from '../components/sections/contact/ContactInfoCards.vue'
import ContactForm from '../components/sections/contact/ContactForm.vue'
import VisitPanel from '../components/sections/contact/VisitPanel.vue'
import FaqSection from '../components/sections/FaqSection.vue'

useSeoMeta({
  title: 'Contact',
  description: contactHero.subtitle,
  path: '/contact',
})
</script>

<template>
  <PageHero :eyebrow="contactHero.eyebrow" :heading="contactHero.heading" :subtitle="contactHero.subtitle" />
  <ContactInfoCards />

  <section class="relative mx-auto max-w-7xl px-6 pb-24 lg:px-10">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <ContactForm />
      <VisitPanel />
    </div>
  </section>

  <FaqSection
    :faqs="contactFaqs"
    eyebrow="Common questions"
    heading="A few things people usually ask."
    section-id="contact-faq"
  />
</template>
