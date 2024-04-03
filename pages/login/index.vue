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
  <h1>Hi</h1>
</template>
