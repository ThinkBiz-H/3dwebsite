import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../pages/Home.vue') },
  { path: '/about', name: 'about', component: () => import('../pages/About.vue') },
  { path: '/contact', name: 'contact', component: () => import('../pages/Contact.vue') },

  { path: '/blog', name: 'blog', component: () => import('../pages/Blog.vue') },
  { path: '/blog/:slug', name: 'blog-details', component: () => import('../pages/BlogDetails.vue') },

  { path: '/articles', name: 'articles', component: () => import('../pages/Articles.vue') },
  { path: '/articles/:slug', name: 'article-details', component: () => import('../pages/ArticleDetails.vue') },

  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../pages/admin/Login.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/admin',
    redirect: { name: 'admin-dashboard' },
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('../pages/admin/Dashboard.vue'),
    meta: { layout: 'admin', requiresAuth: true },
  },
  {
    path: '/admin/blogs',
    name: 'admin-blogs',
    component: () => import('../pages/admin/BlogList.vue'),
    meta: { layout: 'admin', requiresAuth: true },
  },
  {
    path: '/admin/blogs/new',
    name: 'admin-blog-new',
    component: () => import('../pages/admin/PostEditor.vue'),
    props: { postType: 'blog' },
    meta: { layout: 'admin', requiresAuth: true },
  },
  {
    path: '/admin/blogs/:id/edit',
    name: 'admin-blog-edit',
    component: () => import('../pages/admin/PostEditor.vue'),
    props: (route) => ({ postType: 'blog', id: route.params.id }),
    meta: { layout: 'admin', requiresAuth: true },
  },
  {
    path: '/admin/articles',
    name: 'admin-articles',
    component: () => import('../pages/admin/ArticleList.vue'),
    meta: { layout: 'admin', requiresAuth: true },
  },
  {
    path: '/admin/articles/new',
    name: 'admin-article-new',
    component: () => import('../pages/admin/PostEditor.vue'),
    props: { postType: 'article' },
    meta: { layout: 'admin', requiresAuth: true },
  },
  {
    path: '/admin/articles/:id/edit',
    name: 'admin-article-edit',
    component: () => import('../pages/admin/PostEditor.vue'),
    props: (route) => ({ postType: 'article', id: route.params.id }),
    meta: { layout: 'admin', requiresAuth: true },
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  if (!to.meta.requiresAuth) return true

  // Dynamically imported so the Firebase SDK never ships in the main bundle
  // for visitors who only ever see the marketing site.
  try {
    const { useAuthStore } = await import('../stores/auth')
    const auth = useAuthStore()
    await auth.ensureLoaded()

    if (!auth.isAuthenticated) {
      return { name: 'admin-login', query: { redirect: to.fullPath } }
    }

    return true
  } catch (err) {
    // Firebase isn't configured (or is unreachable) — fail safe to the
    // login screen rather than crashing route resolution entirely.
    return { name: 'admin-login', query: { redirect: to.fullPath } }
  }
})

export default router
