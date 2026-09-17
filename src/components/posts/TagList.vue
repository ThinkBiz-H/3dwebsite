<script setup>
defineProps({
  tags: { type: Array, default: () => [] },
})
</script>

<template>
  <div v-if="tags.length" class="flex flex-wrap justify-center gap-2">
    <span
      v-for="t in tags"
      :key="t"
      class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-slate-200 hover:text-gray-700"
    >
      #{{ t }}
    </span>
  </div>
</template>
