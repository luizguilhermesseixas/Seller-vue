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
    <div>
      <h1>Detalhes da Loja</h1>
      <h2>{{ currentStore }}</h2>
      <button type="button" @click="storeProducts">Ver Produtos</button>
    </div>
    <div>
      <EditStores />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 20px; /* adiciona espaço entre os elementos filhos */
  padding: 20px; /* adiciona espaço ao redor do elemento */
  width: 80%; /* define a largura do elemento para 80% da largura do viewport */
  margin: 50px auto; /* centraliza o elemento horizontalmente */
}
h1 {
  white-space: nowrap;
}
</style>
