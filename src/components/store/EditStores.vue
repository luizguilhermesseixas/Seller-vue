<!-- This component is for edit a store -->
<script setup lang="ts">
import DefaultMessage from '../DefaultMessage.vue'
import { useStoresStore } from '@/context/storesStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStoresStore()

const newName = defineModel<string>('newName', { default: '' })
const updatedStoreMessage = defineModel<string>('message', { default: '' })

const onSubmit = async () => {
  const storeId = router.currentRoute.value.params.id

  const data = await store.updateStore(Number(storeId), newName.value)

  updatedStoreMessage.value = `Loja ${data.name} atualizada com sucesso!`
  newName.value = ''

  setTimeout(() => {
    updatedStoreMessage.value = ''
  }, 3000)
}
</script>

<template>
  <main>
    <DefaultMessage v-if="updatedStoreMessage" :msg="updatedStoreMessage" />
    <div>
      <h1>EDITAR LOJA</h1>
      <form action="" @submit.prevent="onSubmit">
        <label for="newName">Novo Nome</label><br />
        <input type="text" placeholder="..." id="newName" v-model="newName" required /><br />

        <button type="submit">Salvar</button>
      </form>
      <nav>
        <router-link to="/stores">Voltar</router-link>
      </nav>
    </div>
  </main>
</template>
