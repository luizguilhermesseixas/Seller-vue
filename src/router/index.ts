import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignIn from '@/components/SignIn.vue'
// import CreateStore from '@/components/CreateStore.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
    // {
    //   path: '/store',
    //   name: 'store',
    //   component: CreateStore
    // }
  ]
})

export default router
