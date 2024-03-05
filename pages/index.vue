<script setup>
import { ref } from "vue";

const count = ref(0);

</script>

<template>
    <h1>Home page</h1>
    <h2>Count is: {{ count }}</h2>
    <button @click="count++">Count is: {{ count }}</button>
    <a href="/options-api">Options API</a>
</template>