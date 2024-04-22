<script setup lang="ts">
import { Auth } from '@/utils/Auth'
import { ref } from 'vue'
// import { onMounted } from 'vue'

const auth = new Auth()
const isLoggedIn = ref(auth.isLoggedIn())
const currentUser = ref(auth.currentUser())

const signOut = function () {
  auth.signOut(() => {
    isLoggedIn.value = auth.isLoggedIn()
  })
}

/* onMounted(() => {
  alert('bem vindo')
}) */
</script>

<template>
  <main>
    <template v-if="isLoggedIn">
      <p>Login successful!</p>
      <h3>Hi, {{ currentUser && currentUser.email }}</h3>
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
