<script setup>
import { ref } from "vue";
import { NDrawer, NDrawerContent } from "naive-ui";

const active = ref(false);

function handleOpenDrawer() {
  active.value = true;
}
</script>

<template>
  <br />
  <button @click="handleOpenDrawer">Open Drawer</button>
  <n-drawer v-model:show="active" :width="300" placement="left">
    <n-drawer-content title="Stoner">
      Stoner is Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aspernatur assumenda dignissimos doloribus incidunt quod unde vitae?
      Alias, aspernatur, eaque? Consequatur dolore doloremque eligendi harum
      inventore nam neque quidem similique tempora!
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped></style>
