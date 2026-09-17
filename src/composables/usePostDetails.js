import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { withTableOfContents } from './useTableOfContents'

/** Shared fetch-by-slug + TOC + related + prev/next logic for BlogDetails/ArticleDetails. */
export function usePostDetails({ getFn, listFn, incrementViewsFn }) {
  const route = useRoute()

  const post = ref(null)
  const allPosts = ref([])
  const loading = ref(true)
  const notFound = ref(false)
  const error = ref('')

  const contentHtml = ref('')
  const headings = ref([])

  async function load(slug) {
    loading.value = true
    notFound.value = false
    error.value = ''

    try {
      const [found, list] = await Promise.all([getFn(slug), listFn({ publishedOnly: true })])
      allPosts.value = list

      if (!found || !found.published) {
        notFound.value = true
        post.value = null
        return
      }

      post.value = found
      const parsed = withTableOfContents(found.content)
      contentHtml.value = parsed.html
      headings.value = parsed.headings
      incrementViewsFn?.(found.id)
    } catch (err) {
      console.error('[post-details] load failed:', err.code, err.message, err)
      error.value = import.meta.env.DEV
        ? `${err.code || 'unknown-error'} — ${err.message || 'Load failed.'}`
        : 'Could not load this post. Check your Firebase configuration.'
    } finally {
      loading.value = false
    }
  }

  watch(() => route.params.slug, (slug) => slug && load(slug), { immediate: true })

  const related = computed(() => {
    if (!post.value) return []
    return allPosts.value.filter((p) => p.id !== post.value.id && p.category === post.value.category).slice(0, 3)
  })

  const sortedForNav = computed(() => [...allPosts.value].sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0)))

  const prevPost = computed(() => {
    if (!post.value) return null
    const idx = sortedForNav.value.findIndex((p) => p.id === post.value.id)
    return idx > 0 ? sortedForNav.value[idx - 1] : null
  })

  const nextPost = computed(() => {
    if (!post.value) return null
    const idx = sortedForNav.value.findIndex((p) => p.id === post.value.id)
    return idx >= 0 && idx < sortedForNav.value.length - 1 ? sortedForNav.value[idx + 1] : null
  })

  return { post, loading, notFound, error, contentHtml, headings, related, prevPost, nextPost }
}
