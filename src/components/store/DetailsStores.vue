<!-- This componente is to show a store details -->
<script setup lang="ts">
import EditStores from './EditStores.vue'
import ListProducts from '../product/ListProducts.vue'
import { useStoresStore } from '../../context/storesStore'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()
const store = useStoresStore()

const storeId = router.currentRoute.value.params.id
const currentStore = ref('')

onMounted(async () => {
  const data = await store.getStoreById(Number(storeId))
  currentStore.value = data.name
})

const storeProducts = () => {
  router.push(`/stores/${storeId}/products`)
}

// const currentStore = computed(() => store.currentStore)
</script>

<template>
  <main>
    <h1>Detalhes da Loja</h1>
    <h2>{{ currentStore }}</h2>
    <button type="button" @click="storeProducts">Ver Produtos</button>
    <EditStores />
  </main>
</template>
