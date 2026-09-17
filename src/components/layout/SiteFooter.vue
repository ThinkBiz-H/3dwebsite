<script setup>
import { footer } from '../../data/content'
import { useSiteNav } from '../../composables/useSiteNav'

const { goTo } = useSiteNav()
</script>

<template>
  <footer class="relative border-t border-slate-200 bg-slate-50 px-6 pb-10 pt-20 lg:px-10">
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-2 gap-10 pb-16 md:grid-cols-6">
        <div class="col-span-2">
          <div class="font-display text-2xl font-semibold tracking-tight text-gray-900">{{ footer.brand }}</div>
          <p class="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">{{ footer.tagline }}</p>
        </div>

        <div v-for="col in footer.columns" :key="col.title">
          <h4 class="text-sm font-semibold text-gray-900">{{ col.title }}</h4>
          <ul class="mt-4 space-y-3">
            <li v-for="link in col.links" :key="link.label">
              <a href="#" data-cursor-hover class="text-sm text-gray-500 transition-colors hover:text-blue-600" @click.prevent="goTo(link.href)">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-gray-400 md:flex-row md:items-center">
        <p>{{ footer.legal }}</p>
        <div class="flex gap-6">
          <a href="#" data-cursor-hover class="hover:text-gray-700">Twitter</a>
          <a href="#" data-cursor-hover class="hover:text-gray-700">LinkedIn</a>
          <a href="#" data-cursor-hover class="hover:text-gray-700">Discord</a>
        </div>
      </div>
    </div>
  </footer>
</template>
