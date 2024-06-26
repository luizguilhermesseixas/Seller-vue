<script setup lang="ts">
import { useAuthStore } from '@/context/authStore'
import { useRouter } from 'vue-router'
import DefaultMessage from '../components/DefaultMessage.vue'

const router = useRouter()
const authStore = useAuthStore()

const email = defineModel<string>('email', { default: '' })
const password = defineModel<string>('password', { default: '' })
const remember = defineModel<boolean>('remember', { default: false })
const message = defineModel<string>('message', { default: '' })

const onSubmit = (event: Event) => {
  authStore.initializeAuth(remember.value)

  authStore.auth?.signIn(
    email.value,
    password.value,
    () => {
      router.push('/')
    },
    () => {
      message.value = 'Email ou senha inválidos'
    }
  )
}
</script>

<template>
  <main>
    <h1>Sign In</h1>

    <form action="" @submit.prevent="onSubmit">
      <label for="email">Email: </label><br />
      <input type="email" id="email" v-model="email" required /><br />

      <label for="password">Password: </label><br />
      <input type="password" id="password" v-model="password" required /> <br />

      <label for="remember">Remember Me: </label>
      <input type="checkbox" id="remember" v-model="remember" /><br />

      <button type="submit">Sign In</button>
    </form>
    <div>
      <p>Don't Have an Account?</p>
      <nav><RouterLink :to="{ name: 'signup' }">Sign Up</RouterLink></nav>
    </div>
    <!-- message component em caso de erro de autenticação -->
    <DefaultMessage v-if="message" :msg="message" />
  </main>
</template>
