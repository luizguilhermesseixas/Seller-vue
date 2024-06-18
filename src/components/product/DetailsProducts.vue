<script setup lang="ts">
import EditProducts from './EditProducts.vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '../../context/productsStore'
import { computed } from 'vue'
import { onMounted } from 'vue'

const router = useRouter()
const productsStore = useProductsStore()

const storeId = computed(() => router.currentRoute.value.params.id)
const productId = computed(() => router.currentRoute.value.params.productId)
const currentProduct = computed(() => productsStore.currentProduct)

onMounted(async () => {
  if (storeId.value && productId.value) {
    await productsStore.getProductById(Number(storeId.value), Number(productId.value))
  }
})

const destroyProduct = async () => {
  if (storeId.value && productId.value) {
    const data = await productsStore.destroyProduct(Number(storeId.value), Number(productId.value))
    console.log(data)
    router.push(`/stores/${storeId.value}/products`)
  }
}
</script>

<template>
  <main>
    <div>
      <h1>Detalhes do Produto</h1>
      <h2>Nome: {{ currentProduct?.title }}</h2>
      <h3>Loja: {{ currentProduct?.store?.name }}</h3>
      <p>Descrição: {{ currentProduct?.description }}</p>
      <p>Preço: {{ currentProduct?.price }}</p>
      <img :src="currentProduct?.image_urls?.detail_url" alt="Detalhe do Produto." />
      <button type="button" @click="destroyProduct">Excluir</button>
    </div>
    <EditProducts />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
