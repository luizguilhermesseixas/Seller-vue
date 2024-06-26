<!-- This component will list all products of a store -->

<script setup lang="ts">
import CreateProducts from './CreateProducts.vue'
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
  <main class="product-view">
    <div class="list-products">
      <h1>Produtos</h1>
      <div v-for="item in products" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <p>{{ item.price }}</p>
        <img :src="item.image_urls?.thumbnail_url" alt="Thumbnail do Produto." />
        <div>
          <button type="button" @click="detailsProduct(item.id)">Detalhes</button>
        </div>
      </div>
    </div>
    <CreateProducts class="create-products" />
  </main>
</template>

<style scoped>
.product-view {
  display: flex;
  gap: 20px;
  align-items: flex-start; /* Alinha os itens no topo */
}

.list-products {
  flex: 1 1 50%; /* Ocupa 50% do espaço disponível */
  overflow-y: auto; /* Adiciona barra de rolagem vertical se necessário */
  max-height: 400px; /* Reduz a altura do cartão */
  width: 400px; /* Reduz a largura do cartão */
  border: 1px solid #ccc; /* Adiciona borda ao cartão */
  border-radius: 10px; /* Arredonda os cantos do cartão */
  padding: 20px; /* Adiciona espaço interno ao cartão */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); /* Adiciona sombra ao cartão */
}

.create-products {
  flex: 1 1 50%; /* Ocupa 50% do espaço disponível */
}
</style>
