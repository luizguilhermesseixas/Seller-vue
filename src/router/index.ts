import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import HomeView from '@/views/HomeView.vue'
import StoresView from '@/views/StoresView.vue'
import DetailsStores from '@/components/store/DetailsStores.vue'
import ListProducts from '@/components/product/ListProducts.vue'
import DetailsProducts from '@/components/product/DetailsProducts.vue'
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
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/stores',
      name: 'stores',
      component: StoresView
    },
    {
      path: '/stores/:id',
      name: 'DetailsStores',
      component: DetailsStores
    },
    {
      path: '/stores/:id/products',
      name: 'ListProducts',
      component: ListProducts
    },
    {
      path: '/stores/:id/products/:productId',
      name: 'DetailsProducts',
      component: DetailsProducts
    }
  ]
})

export default router
