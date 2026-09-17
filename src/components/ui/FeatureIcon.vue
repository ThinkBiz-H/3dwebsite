<script setup>
defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
    <template v-if="name === 'book'">
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5C20 4.67 19.33 4 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </template>
    <template v-else-if="name === 'wallet'">
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 9.5h18" />
      <circle cx="16.5" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 3.5 5 6v5.2c0 4.4 3 8 7 9.3 4-1.3 7-4.9 7-9.3V6l-7-2.5Z" />
      <path d="M9.2 12.2l1.9 1.9 3.7-3.9" />
    </template>
    <template v-else-if="name === 'pulse'">
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </template>
    <template v-else-if="name === 'map'">
      <path d="M9 4 4 6.5v13L9 17l6 2.5 5-2.5v-13L15 6.5 9 4Z" />
      <path d="M9 4v13" />
      <path d="M15 6.5v13" />
    </template>
    <template v-else-if="name === 'chat'">
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9h8M8 12.5h5" />
    </template>
  </svg>
</template>
