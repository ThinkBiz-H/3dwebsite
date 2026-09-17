<script setup>
import { getBlog, getBlogs, incrementBlogViews } from '../services/blogs'
import PostDetailsView from '../components/posts/PostDetailsView.vue'
</script>

<template>
  <PostDetailsView
    :get-fn="getBlog"
    :list-fn="getBlogs"
    :increment-views-fn="incrementBlogViews"
    base-path="/blog"
    list-route-name="blog"
    json-ld-type="BlogPosting"
    variant="blog"
  />
</template>
