import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StoresView from '@/views/StoresView.vue'
import StoresProfile from '@/components/store/StoresProfile.vue'
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
    },
    {
      path: '/stores/:id',
      name: 'StoresProfile',
      component: StoresProfile
    }
  ]
})

export default router
