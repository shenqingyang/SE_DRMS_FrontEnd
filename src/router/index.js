import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
