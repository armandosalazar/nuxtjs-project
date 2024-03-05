<script setup>
import { ref } from 'vue'

const email = ref('')

</script>

<template>
    <n-flex justify="center">
        <n-input v-model:value="email" type="text" placeholder="Email" />
    </n-flex>
</template>