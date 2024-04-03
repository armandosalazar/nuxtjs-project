<script setup>
import {ref} from "vue";
import Drawer from "../components/Drawer.vue";

const count = ref(0);

// @todo set ssr false by

</script>

<template>
  <main class="container m-auto">
    <!--    <Drawer />-->
    <!--    <Menu />-->
    <h1 class="text-2xl font-bold">Home page</h1>
    <h2 class="text-xl font-bold">Count is: {{ count }}</h2>
    <button @click="count++" class="bg-green-400 py-2 px-4 rounded font-bold">
      Count is: {{ count }}
    </button>
    <br/>
    <a href="/options-api">Options API</a>
  </main>
</template>
