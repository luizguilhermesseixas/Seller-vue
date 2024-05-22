<!--This is a page for a user to create a store.-->
<script setup lang="ts">
import DefaultMessage from '../DefaultMessage.vue'
import { useStoresStore } from '@/context/storesStore'

const store = useStoresStore()

const storeName = defineModel<string>('storeName', { default: '' })
const createStoreSuccesMessage = defineModel<string>('message', { default: '' })

const onSubmit = async () => {
  const data = await store.createStore(storeName.value)

  createStoreSuccesMessage.value = `Loja ${data.name} criada com sucesso!`
  storeName.value = ''

  setTimeout(() => {
    createStoreSuccesMessage.value = ''
  }, 3000)
}
</script>

<template>
  <main>
    <h1>Create stores</h1>
    <DefaultMessage v-if="createStoreSuccesMessage" :msg="createStoreSuccesMessage" />

    <form action="" @submit.prevent="onSubmit">
      <label for="storeName">Store Name: </label><br />
      <input type="text" id="storeName" v-model="storeName" required /><br />

      <button type="submit">Create Store</button>
    </form>
  </main>
</template>
