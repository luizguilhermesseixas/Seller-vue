<!-- This component will list all products of a store -->

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useProductsStore } from '../../context/productsStore'
import { onMounted } from 'vue'
import { computed } from 'vue'

const router = useRouter()
const productsStore = useProductsStore()

const storeId = computed(() => router.currentRoute.value.params.id)

onMounted(async () => {
  if (storeId.value) {
    await productsStore.getProducts(Number(storeId.value))
  }
})

const products = computed(() => productsStore.products)

const detailsProduct = (productId: number) => {
  router.push(`/stores/${storeId.value}/products/${productId}`)
}
</script>

<template>
  <main>
    <h1>Produtos</h1>
    <div v-for="item in products" :key="item.id">
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
      <p>{{ item.price }}</p>
      <img :src="item.image_urls?.thumbnail_url" alt="Thumbnail do Produto." />
      <button type="button" @click="detailsProduct(item.id)">Detalhes</button>
    </div>
  </main>
</template>
