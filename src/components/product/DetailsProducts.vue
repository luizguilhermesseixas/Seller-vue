<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useProductsStore } from '../../context/productsStore'
import { computed } from 'vue'
import { onMounted } from 'vue'

const router = useRouter()
const productsStore = useProductsStore()

const storeId = computed(() => router.currentRoute.value.params.id)
const productId = computed(() => router.currentRoute.value.params.productId)

onMounted(async () => {
  if (storeId.value && productId.value) {
    await productsStore.getProductById(Number(storeId.value), Number(productId.value))
  }
})

const currentProduct = computed(() => productsStore.currentProduct)
</script>

<template>
  <main>
    <h1>Detalhes do Produto</h1>
    <h2>Nome: {{ currentProduct?.title }}</h2>
    <h3>Loja: {{ currentProduct?.store?.name }}</h3>
    <p>Descrição: {{ currentProduct?.description }}</p>
    <p>Preço: {{ currentProduct?.price }}</p>
    <img :src="currentProduct?.image_urls?.detail_url" alt="Detalhe do Produto." />
  </main>
</template>
