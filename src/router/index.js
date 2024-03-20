import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About ' + process.env.VUE_APP_TITLE
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Set the title of the page based on the route
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? to.meta.title | 'Vue 3 App' 
  console.log('to', process.env.BASE_URL)
})

export default router
