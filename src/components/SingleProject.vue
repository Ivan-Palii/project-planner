<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: { required: true, type: Object }
})
const emits = defineEmits(['delete', 'complete'])

const showDetails = ref(false)
const uri = 'http://localhost:3000/projects/' + props.project.id

function deleteProject() {
  fetch(uri, { method: 'DELETE' })
    .then(() => emits('delete', props.project.id))
    .catch((err) => console.error(err))
}

function completeProject() {
  fetch(uri, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ complete: !props.project.complete })
  })
    .then(() => emits('complete', props.project.id))
    .catch((err) => console.error(err))
}
</script>
<template>
  <div class="project" :class="{ project_complete: project.complete }">
    <div class="project__actions">
      <h3 class="project__title" @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="project__icons">
        <span class="project__icon material-icons-outlined" @click="completeProject">done</span>
        <span class="project__icon material-icons-outlined">edit</span>
        <span class="project__icon material-icons-outlined" @click="deleteProject">delete</span>
      </div>
    </div>
    <div class="project__details-section" v-if="showDetails">
      <p class="project__details">{{ project.details }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.project {
  margin: 20px auto;
  background-color: $project-item-bg;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 6px solid $project-item-incomplete;

  // .project__complete
  &_complete {
    border-color: $project-item-complete;

  }

  // .project__actions
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .project__title
  &__title {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }

  // .project__icons
  &__icons {
  }

  // .project__icon
  &__icon {
    color: $project-icon-color;
    cursor: pointer;
    transition: color 0.2s;
    &:not(:last-child) {
      margin-right: 10px;
    }
    &:hover {
      color: $project-icon-color-hover;
    }
  }

  // .project__details-section
  &__details-section {
    padding-top: 20px;
  }

  // .project__details
  &__details {
  }
}
</style>
