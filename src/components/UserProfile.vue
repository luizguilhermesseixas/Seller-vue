<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/context/authStore'
import DefaultMessage from '../components/DefaultMessage.vue'
// import CreateStores from '../components/store/CreateStores.vue'
// import ListStores from '../components/store/ListStores.vue'

const authStore = useAuthStore()
const isLoggedIn = ref(authStore.auth?.isLoggedIn())
const currentUser = ref(authStore.auth?.currentUser())
const successMessage = ref('Login efetuado com sucesso!')

const signOut = function () {
  authStore.auth?.signOut(() => {
    isLoggedIn.value = authStore.auth?.isLoggedIn()
  })
}

setTimeout(() => {
  successMessage.value = ''
}, 3000)
</script>

<template>
  <main>
    <template v-if="isLoggedIn">
      <!-- message component em caso de sucesso de autenticação -->
      <DefaultMessage v-if="successMessage" :msg="successMessage" />
      <h3>Olá, {{ currentUser && currentUser.email }}!</h3>

      <br />
      <nav>
        <RouterLink :to="{ name: 'stores' }"> Lojas </RouterLink>
        <a @click="signOut">Sair</a>
      </nav>
    </template>

    <template v-else>
      <h3>Olá, faça login para ter acesso.</h3>
      <br />
      <nav>
        <RouterLink :to="{ name: 'signin' }"> Login </RouterLink>
      </nav>
    </template>
  </main>
</template>
