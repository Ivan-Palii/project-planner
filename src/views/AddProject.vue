<script setup>
import { ref } from 'vue'
import router from '@/router/index.js'

const project = ref({
  title: '',
  details: '',
  complete: false
})

function handleSubmit() {
  fetch('http://localhost:3000/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project.value)
  })
    .then(() => router.push({ path: '/' }))
    .catch((err) => console.error(err))
}
</script>
<template>
  <form @submit.prevent="handleSubmit" class="form">
    <label class="form__label" for="title">Title:</label>
    <input class="form__input" type="text" id="title" v-model.trim="project.title" required />
    <label class="form__label" for="details">Details:</label>
    <textarea
      class="form__textarea"
      id="details"
      v-model.trim="project.details"
      required
    ></textarea>
    <button class="form__btn" type="submit">Submit</button>
  </form>
</template>
<style scoped lang="scss">
.form {
  margin-top: 50px;
  background-color: $form-bg;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);

  // .form__label
  &__label {
    display: block;
    color: $form-label-color;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 20px 0 10px;
  }

  // .form__input
  &__input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid $form-input-border-color;
    width: 100%;
  }

  // .form__textarea
  &__textarea {
    border: 1px solid $form-input-border-color;
    padding: 10px;
    width: 100%;
    height: 100px;
  }

  // .form__btn
  &__btn {
    display: block;
    position: relative;
    margin: 20px auto 0;
    background-color: $form-btn-color;
    color: $form-bg;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    transition: background-color 0.3s;
    &:hover {
      background-color: $form-btn-hover-color;
    }
    &:active {
      background-color: $form-btn-active-color;
      transform: scale(0.97);
    }
  }
}
</style>
