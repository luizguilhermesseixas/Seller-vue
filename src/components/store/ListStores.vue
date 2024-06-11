<!-- This component is for list stores -->
<script setup lang="ts">
import { useStoresStore } from '../../context/storesStore'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()
const store = useStoresStore()

onMounted(() => {
  store.getStores()
})

const storeProfile = (id: number) => {
  router.push(`/stores/${id}`)
}

const destroyStore = async (id: number) => {
  const data = await store.destroyStore(id)
  console.log(data.message)
}
</script>

<template>
  <main>
    <h1>Suas Lojas</h1>
    <div v-for="item in store.stores" :key="item.id">
      <h2>{{ item.name }}</h2>
      <button type="button" @click="storeProfile(item.id)">Acessar</button>
      <button type="button" @click="destroyStore(item.id)">Excluir</button>
    </div>
  </main>
</template>
