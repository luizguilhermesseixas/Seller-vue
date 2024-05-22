<!-- This component is for list stores -->
<script setup lang="ts">
import { useStoresStore } from '../../context/storesStore'
import { onMounted } from 'vue'

const store = useStoresStore()

onMounted(() => {
  store.getStores()
})
</script>

<template>
  <main>
    <h1>Obter Lojas</h1>
    <div v-for="item in store.stores" :key="item.id">
      <h2>{{ item.name }}</h2>
    </div>
  </main>
</template>
