<script setup lang="ts">
import { type INewProduct } from '../../interfaces/IProduct'
// import DefaultMessage from '../DefaultMessage.vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '../../context/productsStore'
import { computed, ref } from 'vue'

const router = useRouter()
const productsStore = useProductsStore()

const storeId = computed(() => router.currentRoute.value.params.id)

const newTitle = defineModel<string>('newTitle', { default: '' })
const newDescription = defineModel<string>('newDescription', { default: '' })
const newPrice = defineModel<number>('newPrice', { default: 0 })
const newImage = ref<File | null>(null)

const handleImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    newImage.value = target.files[0]
  }
}

const onSubmit = async () => {
  const newProduct: INewProduct = {
    title: newTitle.value,
    description: newDescription.value,
    price: newPrice.value,
    image: newImage.value || ''
  }

  await productsStore.createProduct(Number(storeId.value), newProduct)

  newTitle.value = ''
  newDescription.value = ''
  newPrice.value = 0
  newImage.value = null
}
</script>

<template>
  <main>
    <div>
      <h1>Criar Produto</h1>
      <form action="" @submit.prevent="onSubmit">
        <label for="title">Título</label><br />
        <input type="text" placeholder="..." id="title" v-model="newTitle" required /><br />

        <label for="description">Descrição</label><br />
        <textarea id="description" cols="30" rows="10" v-model="newDescription" required></textarea
        ><br />

        <label for="price">Preço</label><br />
        <input type="number" id="price" v-model="newPrice" min="0" step="0.001" required /><br />

        <label for="image">Imagem</label><br />
        <input type="file" id="image" @change="handleImageChange" required /><br />

        <button type="submit">Criar</button>
      </form>
    </div>
  </main>
</template>
