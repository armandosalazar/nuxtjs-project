<script setup>
import { ref } from 'vue'

const email = ref('')

</script>

<template>
    <n-layout>
        <n-layout-content>
            <n-flex justify="center">
                <n-input v-model:value="email" type="text" placeholder="Email" />
            </n-flex>
        </n-layout-content>
    </n-layout>
</template>