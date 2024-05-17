<script setup lang="ts">
import { Auth } from '@/utils/Auth'
import { ref } from 'vue'
import LoginMessage from '../components/LoginMessage.vue'
import CreateStore from '../components/CreateStore.vue'

const auth = new Auth()
const isLoggedIn = ref(auth.isLoggedIn())
const currentUser = ref(auth.currentUser())
const successMessage = ref('Login efetuado com sucesso!')

const signOut = function () {
  auth.signOut(() => {
    isLoggedIn.value = auth.isLoggedIn()
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
      <LoginMessage v-if="successMessage" :msg="successMessage" />
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
