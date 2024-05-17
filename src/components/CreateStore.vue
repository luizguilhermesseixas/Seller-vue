<!--This is a page for a user to create a store.-->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main>
    <h1>Create Store</h1>

    <form action="" @submit.prevent="onSubmit">
      <label for="storeName">Store Name: </label><br />
      <input type="text" id="storeName" required /><br />

      <button type="submit">Create Store</button>
    </form>
  </main>
</template>
