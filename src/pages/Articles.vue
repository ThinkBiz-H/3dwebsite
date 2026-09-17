<script setup>
import { computed, ref } from 'vue'
import { getArticles } from '../services/articles'
import { usePostListing } from '../composables/usePostListing'
import { useSeoMeta, SITE_URL } from '../composables/useSeoMeta'
import Breadcrumbs from '../components/ui/Breadcrumbs.vue'
import ArticlesHero from '../components/articles/ArticlesHero.vue'
import FeaturedStory from '../components/articles/FeaturedStory.vue'
import ArticleCard from '../components/articles/ArticleCard.vue'
import EditorsPicks from '../components/articles/EditorsPicks.vue'
import ArticleTimeline from '../components/articles/ArticleTimeline.vue'
import TopicInsights from '../components/articles/TopicInsights.vue'
import EmptyState from '../components/posts/EmptyState.vue'
import CategoryFilter from '../components/posts/CategoryFilter.vue'
import TagFilter from '../components/posts/TagFilter.vue'
import SearchInput from '../components/posts/SearchInput.vue'
import Pagination from '../components/posts/Pagination.vue'
import NewsletterSignup from '../components/posts/NewsletterSignup.vue'

const {
  posts,
  loading,
  error,
  search,
  category,
  tag,
  allTags,
  sortBy,
  page,
  categories,
  featured,
  featuredPosts,
  isFiltering,
  paged,
  totalPages,
} = usePostListing(getArticles)

// The first featured post becomes the big cover story; any other posts an
// editor also marked "featured" become the picks list, rather than pulling
// arbitrary posts — keeps it consistent with `latest` excluding all of them.
const editorsPicks = computed(() => featuredPosts.value.slice(1, 5))

const showFilters = ref(false)

// "Large / minimal / default" rotation so the research list doesn't repeat
// the same card shape down the page.
function cardVariant(index) {
  if (index % 4 === 0) return 'large'
  if (index % 4 === 2) return 'minimal'
  return 'default'
}

function clearFilters() {
  search.value = ''
  category.value = 'all'
  tag.value = 'all'
}

useSeoMeta(() => ({
  title: 'Articles',
  description: 'Deeper, reference-style articles on how blockchain, custody, and on-chain markets actually work.',
  path: '/articles',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Lumen Ledger Articles',
    url: `${SITE_URL}/articles`,
  },
}))
</script>

<template>
  <ArticlesHero
    eyebrow="Reference reading"
    heading="Articles worth bookmarking."
    subtitle="Longer, deeper pieces for when a short lesson is not quite enough."
    :count="loading ? 0 : posts.length"
  />

  <div class="space-y-24 py-24 sm:space-y-28">
    <section v-if="!loading && featured && !isFiltering" class="mx-auto max-w-7xl px-6 lg:px-10">
      <FeaturedStory :post="featured" />
    </section>

    <ArticleTimeline v-if="!loading && posts.length > 3 && !isFiltering" :posts="posts" />

    <TopicInsights v-if="!loading && !isFiltering" :posts="posts" />

    <section class="relative mx-auto max-w-7xl px-6 lg:px-10">
      <Breadcrumbs :items="[{ label: 'Articles' }]" class="mb-8" />

      <div class="border-t border-slate-200 pt-10">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">The archive</p>
        <h2 class="mt-2 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Latest research</h2>
      </div>

      <div class="mt-8 flex flex-col gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter v-model="category" :categories="categories" />
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div class="sm:w-64">
            <SearchInput v-model="search" placeholder="Search articles…" />
          </div>
          <button
            type="button"
            data-cursor-hover
            class="flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300"
            :class="showFilters ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 bg-white text-gray-600 hover:border-slate-300'"
            @click="showFilters = !showFilters"
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" class="h-4 w-4">
              <path d="M3 5h14M6 10h8M8.5 15h3" />
            </svg>
            Advanced filters
          </button>
        </div>
      </div>

      <div class="grid transition-[grid-template-rows] duration-500 ease-out" :style="{ gridTemplateRows: showFilters ? '1fr' : '0fr' }">
        <div class="overflow-hidden">
          <div class="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <TagFilter v-model="tag" :tags="allTags" />
            <select
              v-model="sortBy"
              class="w-fit rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-blue-400"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="popular">Most read</option>
              <option value="az">A–Z</option>
            </select>
          </div>
        </div>
      </div>

      <p v-if="error" class="mt-10 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{{ error }}</p>

      <div class="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-[1fr,280px]">
        <div>
          <div v-if="loading" class="space-y-8 pt-8">
            <div v-for="i in 4" :key="i" class="grid grid-cols-1 gap-5 sm:grid-cols-[220px,1fr] sm:gap-8">
              <div class="aspect-[16/11] animate-pulse rounded-xl bg-slate-100" />
              <div class="space-y-3 py-2">
                <div class="h-3 w-24 animate-pulse rounded-full bg-slate-100" />
                <div class="h-6 w-3/4 animate-pulse rounded-full bg-slate-100" />
                <div class="h-4 w-full animate-pulse rounded-full bg-slate-100" />
              </div>
            </div>
          </div>

          <EmptyState
            v-else-if="!paged.length"
            :title="isFiltering ? 'No articles match your filters.' : 'No articles yet.'"
            :message="isFiltering ? 'Try a different search term or clear your filters.' : 'Longer reference pieces will show up here as soon as they’re published.'"
            @clear="clearFilters"
          >
            <template v-if="isFiltering" #action>Clear filters</template>
          </EmptyState>

          <template v-else>
            <div>
              <ArticleCard v-for="(post, i) in paged" :key="post.id" :post="post" :variant="cardVariant(i)" />
            </div>
            <div class="mt-10">
              <Pagination v-model="page" :total-pages="totalPages" />
            </div>
          </template>
        </div>

        <aside class="space-y-10">
          <EditorsPicks :posts="editorsPicks" />
          <div class="border-t border-slate-200 pt-8">
            <NewsletterSignup source="articles-sidebar" compact />
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
