<script setup>
import { getArticle, getArticles, incrementArticleViews } from '../services/articles'
import PostDetailsView from '../components/posts/PostDetailsView.vue'
</script>

<template>
  <PostDetailsView
    :get-fn="getArticle"
    :list-fn="getArticles"
    :increment-views-fn="incrementArticleViews"
    base-path="/articles"
    list-route-name="articles"
    json-ld-type="Article"
    variant="magazine"
  />
</template>
