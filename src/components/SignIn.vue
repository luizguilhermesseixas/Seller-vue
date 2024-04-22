<script setup lang="ts">
import { Auth } from '@/utils/Auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = defineModel<string>('email', { default: '' })
const password = defineModel<string>('password', { default: '' })
const remember = defineModel<boolean>('remember', { default: false })

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
    }
  )
}
</script>

<template>
  <main>
    <h1>Sign In</h1>

    <form action="" @submit.prevent="onSubmit">
      <label for="email">Email: </label><br />
      <input type="email" id="email" v-model="email" /><br />

      <label for="password">Password: </label><br />
      <input type="password" id="password" v-model="password" /> <br />

      <label for="remember">Remember Me: </label>
      <input type="checkbox" id="remember" v-model="remember" /><br />

      <button type="submit">Sign In</button>
    </form>
  </main>
</template>
