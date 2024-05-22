<script lang="'ts'">
export default {
  name: 'DefaultMessage',
  props: {
    msg: {
      type: String
    }
  }
}
</script>

<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>
.message-container {
  background-color: #cce5ff;
  color: #004085;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
