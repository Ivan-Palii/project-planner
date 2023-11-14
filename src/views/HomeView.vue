<script setup>
import { onMounted, ref } from 'vue'
import SingleProject from '@/components/SingleProject.vue'

const projects = ref([])

onMounted(async () => {
  await fetch('http://localhost:3000/projects')
    .then((res) => res.json())
    .then((data) => (projects.value = data))
    .catch((err) => console.error(err))
})

function handleDelete(id) {
  projects.value = projects.value.filter((project) => project.id !== id)
}

function handleComplete(id) {
  projects.value = projects.value.map((project) => {
    if (project.id === id) {
      project.complete = !project.complete
    }
    return project
  })
}
</script>

<template>
  <main>
    Home

    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </main>
</template>
