<script setup lang="ts">
import ListStores from '../components/store/ListStores.vue'
import CreateStores from '../components/store/CreateStores.vue'
</script>

<template>
  <main class="store-view">
    <ListStores class="list-stores" />
    <CreateStores class="create-stores" />
  </main>
</template>

<style scoped>
.store-view {
  display: flex;
  gap: 20px;
}

.list-stores {
  flex: 1 1 60%; /* Ocupa 60% do espaço disponível */
  overflow-y: auto; /* Adiciona barra de rolagem vertical se necessário */
  max-height: 100vh; /* Limita a altura para não ultrapassar a altura da tela */
}

.create-stores {
  flex: 1 1 40%; /* Ocupa 40% do espaço disponível */
}
</style>
