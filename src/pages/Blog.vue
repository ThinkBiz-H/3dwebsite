<script setup>
import { computed, ref } from 'vue'
import { getBlogs } from '../services/blogs'
import { usePostListing } from '../composables/usePostListing'
import { useSeoMeta, SITE_URL } from '../composables/useSeoMeta'
import Breadcrumbs from '../components/ui/Breadcrumbs.vue'
import BlogHero from '../components/blog/BlogHero.vue'
import FeaturedCarousel from '../components/blog/FeaturedCarousel.vue'
import TrendingRow from '../components/blog/TrendingRow.vue'
import EditorsChoiceSection from '../components/blog/EditorsChoiceSection.vue'
import MostPopularSection from '../components/blog/MostPopularSection.vue'
import RecentlyUpdatedSection from '../components/blog/RecentlyUpdatedSection.vue'
import ExploreByTopic from '../components/blog/ExploreByTopic.vue'
import PopularSidebar from '../components/blog/PopularSidebar.vue'
import PostCard from '../components/posts/PostCard.vue'
import PostCardSkeleton from '../components/posts/PostCardSkeleton.vue'
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
  page,
  categories,
  allTags,
  featured,
  featuredPosts,
  trending,
  editorsChoice,
  recentlyUpdated,
  isFiltering,
  paged,
  totalPages,
} = usePostListing(getBlogs)

const filterBarEl = ref(null)

// Featured posts beyond the hero's headline story become the editorial rail.
const editorsSelection = computed(() => featuredPosts.value.filter((p) => p.id !== featured.value?.id))

const heroStats = computed(() => [
  { value: posts.value.length, label: 'Lessons' },
  { value: Math.max(0, categories.value.length - 1), label: 'Topics' },
  { value: trending.value.reduce((sum, p) => sum + (p.views || 0), 0).toLocaleString(), label: 'Reads' },
])

// A "large / small / small" rhythm every 5 cards keeps the grid from
// reading as a flat repeated card design (Verge/Vercel-style magazine grid).
function cardVariant(index) {
  return index % 5 === 0 ? 'landscape' : 'grid'
}
function cardSpan(index) {
  return index % 5 === 0 ? 'sm:col-span-2' : ''
}

function clearFilters() {
  search.value = ''
  category.value = 'all'
  tag.value = 'all'
}

function jumpToCategory(cat) {
  category.value = cat
  filterBarEl.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

useSeoMeta(() => ({
  title: 'Blog',
  description: 'Plain-language lessons and updates on blockchain, wallets, and digital assets from the Lumen Ledger team.',
  path: '/blog',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Lumen Ledger Blog',
    url: `${SITE_URL}/blog`,
  },
}))
</script>

<template>
  <BlogHero
    :post="loading ? null : featured"
    kicker="Lumen Ledger · Blog"
    fallback-heading="The Lumen Ledger blog"
    fallback-subtitle="Plain-language notes on blockchain, wallets, and the parts of crypto that actually matter."
    :stats="loading ? [] : heroStats"
  />

  <div class="space-y-24 py-24 sm:space-y-28">
    <template v-if="!loading && !isFiltering">
      <FeaturedCarousel v-if="editorsSelection.length" :posts="editorsSelection" base-path="/blog" />
      <TrendingRow v-if="trending.length" :posts="trending" base-path="/blog" />
      <EditorsChoiceSection v-if="editorsChoice.length" :posts="editorsChoice" base-path="/blog" />
      <MostPopularSection v-if="trending.length > 2" :posts="trending.slice(0, 3)" base-path="/blog" />
      <RecentlyUpdatedSection v-if="recentlyUpdated.length" :posts="recentlyUpdated" base-path="/blog" />
      <ExploreByTopic :posts="posts" base-path="/blog" @select-category="jumpToCategory" />
    </template>

    <section ref="filterBarEl" class="relative mx-auto max-w-7xl scroll-mt-24 px-6 lg:px-10">
      <Breadcrumbs :items="[{ label: 'Blog' }]" class="mb-8" />

      <div class="border-t border-slate-200 pt-10">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Every lesson</p>
        <h2 class="mt-2 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Latest articles</h2>
      </div>

      <div class="mt-8 space-y-4">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter v-model="category" :categories="categories" />
          <div class="sm:w-72">
            <SearchInput v-model="search" placeholder="Search posts…" />
          </div>
        </div>
        <TagFilter v-model="tag" :tags="allTags" />
      </div>

      <p v-if="error" class="mt-10 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{{ error }}</p>

      <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,300px]">
        <div>
          <div v-if="loading" class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <PostCardSkeleton v-for="i in 6" :key="i" />
          </div>

          <EmptyState
            v-else-if="!paged.length"
            :title="isFiltering ? 'No posts match your filters.' : 'No posts yet.'"
            :message="isFiltering ? 'Try a different search term or clear your filters.' : 'New lessons and updates will show up here as soon as they’re published.'"
            @clear="clearFilters"
          >
            <template v-if="isFiltering" #action>Clear filters</template>
          </EmptyState>

          <template v-else>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <PostCard
                v-for="(post, i) in paged"
                :key="post.id"
                :post="post"
                base-path="/blog"
                :variant="cardVariant(i)"
                :class="cardSpan(i)"
              />
            </div>
            <div class="mt-12">
              <Pagination v-model="page" :total-pages="totalPages" />
            </div>
          </template>
        </div>

        <aside class="space-y-6">
          <PopularSidebar :posts="trending" base-path="/blog" />
          <NewsletterSignup source="blog-sidebar" compact />
        </aside>
      </div>
    </section>
  </div>
</template>
