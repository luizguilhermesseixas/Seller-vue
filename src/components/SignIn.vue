<script setup lang="ts">
import { Auth } from '@/utils/Auth'
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginMessage from '../components/LoginMessage.vue'

const router = useRouter()

const email = defineModel<string>('email', { default: '' })
const password = defineModel<string>('password', { default: '' })
const remember = defineModel<boolean>('remember', { default: false })
const message = defineModel<string>('message', { default: '' })

const onSubmit = (event: Event) => {
  let auth = new Auth(remember.value)

  auth.signIn(
    email.value,
    password.value,
    () => {
      router.push('/')
    },
    () => {
      console.log('não foi dessa vez!')
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
    <!-- message component em caso de erro de autenticação -->
    <LoginMessage v-if="message" :msg="message" />
  </main>
</template>
