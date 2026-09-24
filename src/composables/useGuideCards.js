import { onMounted, ref } from 'vue'
import { listGuideCards } from '../services/guideCards'
import { getArticles } from '../services/articles'

/**
 * Loads the enabled guide cards for one category and resolves each card's
 * linked article, if any published article carries a matching
 * `guideCardId` — one extra query total (not one per card), joined
 * client-side so publishing a new article never requires a code change or
 * redeploy to appear on its card.
 */
export function useGuideCards(category) {
  const cards = ref([])
  const loading = ref(true)
  const error = ref('')

  onMounted(async () => {
    try {
      const [guideCards, articles] = await Promise.all([
        listGuideCards({ category, enabledOnly: true }),
        getArticles({ publishedOnly: true }),
      ])
      const byCardId = new Map(articles.filter((a) => a.guideCardId).map((a) => [a.guideCardId, a]))
      cards.value = guideCards.map((card) => ({ ...card, article: byCardId.get(card.cardId) || null }))
    } catch (err) {
      console.error('[guide-cards] load failed:', err.code, err.message, err)
      error.value = 'Could not load guides right now.'
    } finally {
      loading.value = false
    }
  })

  return { cards, loading, error }
}
