<script setup>
import { computed, nextTick, onMounted, ref } from "vue";
import { gsap } from "../../composables/gsapSetup";
import { revealHeading } from "../../composables/useReveal";
import { formatDate } from "../../composables/text";
import { optimizedUrl } from "../../services/cloudinary";
import CategoryChip from "../sections/blog/CategoryChip.vue";
import AuthorAvatar from "../sections/blog/AuthorAvatar.vue";

const props = defineProps({
  post: { type: Object, required: true },
  basePath: { type: String, required: true },
  listLabel: { type: String, default: "Blog" },
});

const DIFFICULTY_STYLES = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-rose-50 text-rose-700",
};

const difficultyClass = computed(
  () =>
    DIFFICULTY_STYLES[props.post.difficulty] || "bg-slate-100 text-gray-500",
);

const introEl = ref(null);
const titleEl = ref(null);
const metaEl = ref(null);
const imageEl = ref(null);

onMounted(async () => {
  await nextTick();

  gsap.set(introEl.value, { opacity: 0, y: 16 });
  gsap.set(metaEl.value, { opacity: 0, y: 14 });
  if (imageEl.value) gsap.set(imageEl.value, { opacity: 0, scale: 1.12 });

  const tl = gsap.timeline({ delay: 0.05 });
  tl.to(introEl.value, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
  revealHeading(titleEl.value, {
    type: "words",
    trigger: titleEl.value,
    start: "top 98%",
    stagger: 0.035,
    delay: 0.15,
  });
  tl.to(
    metaEl.value,
    { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
    "-=0.15",
  );
  if (imageEl.value)
    tl.to(
      imageEl.value,
      { opacity: 1, scale: 1, duration: 1.15, ease: "power4.out" },
      "-=0.25",
    );
});
</script>

<template>
  <header class="bg-white pt-32 sm:pt-40">
    <div class="mx-auto max-w-3xl px-6 text-center lg:px-10">
      <div ref="introEl">
        <nav
          aria-label="Breadcrumb"
          class="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-gray-400"
        >
          <router-link
            :to="{ name: 'home' }"
            class="transition-colors hover:text-gray-700"
            >Home</router-link
          >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-3 w-3 text-gray-300"
          >
            <path d="m8 4 6 6-6 6" />
          </svg>
          <router-link
            :to="basePath"
            class="transition-colors hover:text-gray-700"
            >{{ listLabel }}</router-link
          >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-3 w-3 text-gray-300"
          >
            <path d="m8 4 6 6-6 6" />
          </svg>
          <span class="max-w-[12rem] truncate text-gray-600 sm:max-w-xs">{{
            post.title
          }}</span>
        </nav>

        <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
          <CategoryChip v-if="post.category" :label="post.category" />
          <span
            v-if="post.difficulty"
            class="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold"
            :class="difficultyClass"
          >
            {{ post.difficulty }}
          </span>
        </div>
      </div>

      <h1
        ref="titleEl"
        class="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]"
      >
        {{ post.title }}
      </h1>

      <div
        ref="metaEl"
        class="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-gray-500"
      >
        <div class="flex items-center gap-2.5">
          <AuthorAvatar
            :name="post.author || 'cryptolearner.us Team'"
            size="sm"
          />
          <span class="font-medium text-gray-800">{{
            post.author || "cryptolearner.us Team"
          }}</span>
        </div>
        <span class="h-1 w-1 rounded-full bg-gray-300" />
        <span class="flex items-center gap-1.5">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            class="h-4 w-4 text-gray-400"
          >
            <rect x="3" y="4" width="14" height="13" rx="2" />
            <path d="M3 8h14M7 2v4M13 2v4" />
          </svg>
          {{ formatDate(post.createdAt) }}
        </span>
        <span class="h-1 w-1 rounded-full bg-gray-300" />
        <span class="flex items-center gap-1.5">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            class="h-4 w-4 text-gray-400"
          >
            <circle cx="10" cy="10" r="7" />
            <path d="M10 6v4l3 2" />
          </svg>
          {{ post.readingTime }} min read
        </span>
        <template v-if="post.views">
          <span class="h-1 w-1 rounded-full bg-gray-300" />
          <span class="flex items-center gap-1.5">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              class="h-4 w-4 text-gray-400"
            >
              <path d="M2 10s2.7-5 8-5 8 5 8 5-2.7 5-8 5-8-5-8-5Z" />
              <circle cx="10" cy="10" r="2" />
            </svg>
            {{ post.views.toLocaleString() }} views
          </span>
        </template>
      </div>
    </div>

    <div v-if="post.coverImage" class="mx-auto mt-10 max-w-6xl px-6 lg:px-10">
      <div class="overflow-hidden rounded-[2rem] shadow-lift">
        <img
          ref="imageEl"
          :src="optimizedUrl(post.coverImage, { width: 1600 })"
          :alt="post.title"
          fetchpriority="high"
          class="aspect-video w-full object-cover"
        />
      </div>
    </div>
  </header>
</template>
