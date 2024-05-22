<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/store/authStore'
import DefaultMessage from '../components/DefaultMessage.vue'
import CreateStore from '../components/CreateStore.vue'

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
      <h3>Hi, {{ currentUser && currentUser.email }}</h3>
      <br />
      <CreateStore />
      <br />
      <nav>
        <a @click="signOut">Sign Out</a>
      </nav>
    </template>

    <template v-else>
      <h3>Hello! To have access, please Sign In!</h3>
      <br />
      <nav>
        <RouterLink :to="{ name: 'signin' }"> Sign In </RouterLink>
      </nav>
    </template>
  </main>
</template>
