import { computed, onMounted, ref, watch } from 'vue'

const PAGE_SIZE = 9

/** Shared search + category/tag filter + pagination + featured/trending logic for Blog/Articles listings. */
export function usePostListing(fetchFn) {
  const posts = ref([])
  const loading = ref(true)
  const error = ref('')
  const search = ref('')
  const category = ref('all')
  const tag = ref('all')
  const sortBy = ref('newest') // 'newest' | 'oldest' | 'popular' | 'az'
  const page = ref(1)

  onMounted(async () => {
    try {
      posts.value = await fetchFn({ publishedOnly: true })
    } catch (err) {
      console.error('[post-listing] load failed:', err.code, err.message, err)
      error.value = import.meta.env.DEV
        ? `${err.code || 'unknown-error'} — ${err.message || 'Load failed.'}`
        : 'Could not load posts. Check your Firebase configuration.'
    } finally {
      loading.value = false
    }
  })

  const categories = computed(() => {
    const set = new Set(posts.value.map((p) => p.category).filter(Boolean))
    return ['all', ...set]
  })

  const allTags = computed(() => {
    const set = new Set(posts.value.flatMap((p) => p.tags || []))
    return [...set].sort()
  })

  // Multiple posts can be marked featured — used for the hero carousel.
  const featuredPosts = computed(() => {
    const marked = posts.value.filter((p) => p.featured)
    return marked.length ? marked : posts.value.slice(0, 1)
  })
  const featured = computed(() => featuredPosts.value[0] || null)

  const byViewsDesc = computed(() => [...posts.value].sort((a, b) => (b.views || 0) - (a.views || 0)))
  const trending = computed(() => byViewsDesc.value.slice(0, 5))
  // The next tier down from Trending — a distinct section, not a repeat.
  const editorsChoice = computed(() => byViewsDesc.value.slice(5, 9))

  const recentlyUpdated = computed(() =>
    [...posts.value]
      .filter((p) => p.updatedAt && p.createdAt && p.updatedAt.getTime() - p.createdAt.getTime() > 60000)
      .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
      .slice(0, 6)
  )

  const filtered = computed(() => {
    const q = search.value.trim().toLowerCase()
    return posts.value.filter((p) => {
      if (q && !p.title?.toLowerCase().includes(q) && !p.description?.toLowerCase().includes(q)) return false
      if (category.value !== 'all' && p.category !== category.value) return false
      if (tag.value !== 'all' && !p.tags?.includes(tag.value)) return false
      return true
    })
  })

  const isFiltering = computed(() => !!search.value.trim() || category.value !== 'all' || tag.value !== 'all')

  const featuredIds = computed(() => new Set(featuredPosts.value.map((p) => p.id)))

  const latest = computed(() => {
    const base = isFiltering.value ? filtered.value : posts.value.filter((p) => !featuredIds.value.has(p.id))
    const sorted = [...base]
    if (sortBy.value === 'oldest') sorted.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0))
    else if (sortBy.value === 'popular') sorted.sort((a, b) => (b.views || 0) - (a.views || 0))
    else if (sortBy.value === 'az') sorted.sort((a, b) => a.title.localeCompare(b.title))
    else sorted.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
    return sorted
  })

  watch([search, category, tag, sortBy], () => {
    page.value = 1
  })

  const totalPages = computed(() => Math.max(1, Math.ceil(latest.value.length / PAGE_SIZE)))

  const paged = computed(() => {
    const start = (page.value - 1) * PAGE_SIZE
    return latest.value.slice(start, start + PAGE_SIZE)
  })

  function relatedTo(post, count = 3) {
    return posts.value.filter((p) => p.id !== post.id && p.category === post.category).slice(0, count)
  }

  return {
    posts,
    loading,
    error,
    search,
    category,
    tag,
    sortBy,
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
    relatedTo,
  }
}
