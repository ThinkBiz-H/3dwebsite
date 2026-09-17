<script setup>
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main class="relative">
    <slot />
  </main>
  <SiteFooter />
</template>
