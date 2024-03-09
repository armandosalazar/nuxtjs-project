<script setup>
// setup property is used to define the component's state and logic
import {ref} from 'vue';

const tag = ref('');
const tags = ref([]);
const showTags = ref(true);

function handleSubmit(event) {
  event.preventDefault();
  tags.value.push(tag.value);
  tag.value = '';
}

function handleKeydown(evt) {
  if (evt.key === 'Backspace' && tag.value === '' && tags.value.length > 0)
    tags.value.pop();

  const exist = tags.value.includes(tag.value);
  if (exist) {
    tag.value = ''
  } else {
    if (evt.key === 'Enter' && tag.value !== '') {
      tags.value.push(tag.value);
      tag.value = '';
    }
  }

}

function handleDelete(tag) {
  tags.value = tags.value.filter(value => value !== tag);
}

</script>

<template>
  <h1>Tags</h1>
  <p @click="showTags = !showTags" v-text="showTags ? 'Hide' : 'Show'"></p>
  <section v-if="showTags">
    <p v-for="tag in tags">
      <span @click="handleDelete(tag)">[ ]</span>
      {{ tag }}
    </p>
  </section>
  <input type="text" v-model="tag" @keydown="handleKeydown">
  <form @submit="handleSubmit" v-if="false">
    <input type="text" v-model="tag">
  </form>
</template>