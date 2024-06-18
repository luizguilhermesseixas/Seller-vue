<script setup lang="ts">
import { type INewProduct } from '../../interfaces/IProduct'
import DefaultMessage from '../DefaultMessage.vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '../../context/productsStore'
import { ref, computed } from 'vue'

const router = useRouter()
const productsStore = useProductsStore()

const storeId = computed(() => router.currentRoute.value.params.id)
const productId = computed(() => router.currentRoute.value.params.productId)

const newTitle = defineModel<string>('newTitle', { default: '' })
const newDescription = defineModel<string>('newDescription', { default: '' })
const newPrice = defineModel<number>('newPrice', { default: 0 })
const newImage = ref<File | null>(null)
const updatedProductMessage = defineModel<string>('message', { default: '' })

const handleImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    newImage.value = target.files[0]
  }
}

const onSubmit = () => {
  const newProduct: INewProduct = {
    title: newTitle.value,
    description: newDescription.value,
    price: newPrice.value,
    image: newImage.value || ''
  }

  productsStore.updateProduct(Number(storeId.value), Number(productId.value), newProduct)

  updatedProductMessage.value = `Produto ${newProduct.title} atualizado com sucesso!`

  newTitle.value = ''
  newDescription.value = ''
  newPrice.value = 0
  newImage.value = null

  setTimeout(() => {
    updatedProductMessage.value = ''
  }, 3000)
}
</script>

<template>
  <main>
    <div>
      <h1>Editar Produto</h1>
      <DefaultMessage v-if="updatedProductMessage" :msg="updatedProductMessage" />
      <form action="" @submit.prevent="onSubmit">
        <label for="title">Título</label><br />
        <input type="text" placeholder="..." id="title" v-model="newTitle" required /><br />

        <label for="description">Descrição</label><br />
        <textarea id="description" cols="30" rows="10" v-model="newDescription" required></textarea
        ><br />

        <label for="price">Preço</label><br />
        <input
          type="number"
          step="0.001"
          placeholder="..."
          id="price"
          v-model="newPrice"
          required
        /><br />

        <label for="image">Imagem</label><br />
        <input type="file" id="image" @change="handleImageChange" required /><br />

        <button type="submit">Salvar</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
