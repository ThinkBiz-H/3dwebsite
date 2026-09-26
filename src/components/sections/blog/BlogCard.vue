<script setup>
import { formatDate } from "../../../composables/text";
import { optimizedUrl } from "../../../services/cloudinary";
import { prefetchRoute } from "../../../composables/usePrefetch";
import { useBookmarks } from "../../../composables/useBookmarks";
import CategoryChip from "./CategoryChip.vue";
import AuthorAvatar from "./AuthorAvatar.vue";

const props = defineProps({
  post: { type: Object, required: true },
  basePath: { type: String, default: "/blog" },
});

const { isBookmarked, toggle } = useBookmarks();

function onBookmarkClick(e) {
  e.preventDefault();
  e.stopPropagation();
  toggle(props.post.id);
}
</script>

<template>
  <router-link
    :to="`${basePath}/${post.slug}`"
    data-cursor-hover
    class="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E8EEF5] bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_-20px_rgba(15,23,42,0.16)]"
    @mouseenter="prefetchRoute('blog-details')"
  >
    <div class="relative aspect-[16/10] overflow-hidden bg-slate-100">
      <img
        v-if="post.coverImage"
        :src="optimizedUrl(post.coverImage, { width: 640 })"
        :alt="post.title"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center text-sm text-gray-300"
      >
        No cover image
      </div>

      <span
        v-if="post.category"
        class="absolute left-4 top-4 transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <CategoryChip :label="post.category" size="sm" />
      </span>

      <button
        type="button"
        :aria-pressed="isBookmarked(post.id)"
        :aria-label="
          isBookmarked(post.id) ? 'Remove bookmark' : 'Bookmark this article'
        "
        class="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm backdrop-blur transition-all duration-300 hover:text-blue-600 group-hover:rotate-[8deg]"
        :class="isBookmarked(post.id) && 'text-blue-600'"
        @click="onBookmarkClick"
      >
        <svg
          viewBox="0 0 20 20"
          :fill="isBookmarked(post.id) ? 'currentColor' : 'none'"
          stroke="currentColor"
          stroke-width="1.6"
          class="h-4 w-4"
        >
          <path
            d="M5.5 3.5h9a1 1 0 0 1 1 1v12l-5.5-3.2L4.5 16.5v-12a1 1 0 0 1 1-1Z"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="flex items-center gap-2 text-xs text-gray-400">
        <span
          v-if="post.difficulty"
          class="rounded-full bg-slate-50 px-2 py-0.5 font-semibold text-gray-500"
          >{{ post.difficulty }}</span
        >
        <span>{{ post.readingTime }} min read</span>
      </div>

      <h3
        class="mt-3 text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-blue-700"
      >
        {{ post.title }}
      </h3>

      <p class="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500">
        {{ post.description }}
      </p>

      <div
        class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"
      >
        <div class="flex items-center gap-2.5">
          <AuthorAvatar
            :name="post.author || 'cryptolearner.us Team'"
            size="sm"
          />
          <div class="leading-tight">
            <p class="text-xs font-medium text-gray-700">
              {{ post.author || "cryptolearner.us Team" }}
            </p>
            <p class="text-[11px] text-gray-400">
              {{ formatDate(post.createdAt) }}
            </p>
          </div>
        </div>

        <span
          class="flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          Read
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M4 10h12M11 5l5 5-5 5" />
          </svg>
        </span>
      </div>
    </div>
  </router-link>
</template>
