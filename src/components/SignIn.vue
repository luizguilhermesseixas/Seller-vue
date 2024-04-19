<script setup lang="ts">
const email = defineModel<string>('email', { default: '' })
const password = defineModel<string>('password', { default: '' })
</script>

<template>
  <main>
    <h1>Sign In</h1>

    <form action="">
      <label for="email">Email: </label><br />
      <input type="email" id="email" v-model="email" /><br />

      <label for="password">Password: </label><br />
      <input type="password" id="password" v-model="password" /> <br />

      <button>Sign In</button>
    </form>
  </main>
</template>
