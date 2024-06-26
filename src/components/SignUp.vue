<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/context/authStore'

const router = useRouter()
const authStore = useAuthStore()

const email = defineModel<string>('email', { default: '' })
const password = defineModel<string>('password', { default: '' })
const confirmPassword = defineModel<string>('confirmPassword', { default: '' })

const onSubmit = (event: Event) => {}
</script>

<template>
  <main>
    <h1>Sign Up</h1>

    <form action="" @submit.prevent="onSubmit">
      <label for="email">Email: </label><br />
      <input type="email" id="email" v-model="email" required /><br />

      <label for="password">Password: </label><br />
      <input type="password" id="password" v-model="password" required /> <br />

      <label for="confirmPassword">Confirm Password: </label><br />
      <input type="password" id="confirmPassword" v-model="confirmPassword" required /><br />

      <button type="submit">Sign Up</button>
    </form>
    <!-- message component em caso de erro de autenticação -->
  </main>
</template>
