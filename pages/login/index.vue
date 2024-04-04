<script setup>
import { ref } from "vue";
import { NInput } from "naive-ui";

const email = ref("hola");
const password = ref("");

console.log(email.value, password.value);

function handleKeydown(evt) {
  console.log(evt.key);
}

function handleLogin() {
  console.log(email.value, password.value);
}
</script>

<template>
  <main class="container">
    <n-input v-model="email" placeholder="Email" />
    <n-input v-model="password" placeholder="Password" type="password" />
    <button
      @click="handleLogin"
      class="bg-sky-500 py-2 px-4 rounded text-white font-bold mt-4"
    >
      Login
    </button>
  </main>
</template>
