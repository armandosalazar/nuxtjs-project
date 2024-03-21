<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

console.log(email.value, password.value);

function handleKeydown(evt) {
  console.log(evt.key);
}
</script>

<template>
  <n-layout class="container m-auto border rounded p-4">
    <n-layout-content>
      <n-flex justify="center">
        <n-input
          @keydown="handleKeydown"
          v-model:value="email"
          type="text"
          placeholder="Email"
        />
        <n-input
          v-model:value="password"
          type="password"
          placeholder="Password"
        />
      </n-flex>
    </n-layout-content>
  </n-layout>
</template>
