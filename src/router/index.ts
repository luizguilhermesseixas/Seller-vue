import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StoresView from '@/views/StoresView.vue'
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
    },
    {
      path: '/stores',
      name: 'stores',
      component: StoresView
    }
  ]
})

export default router
