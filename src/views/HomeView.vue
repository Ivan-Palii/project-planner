<script setup>
import { onMounted, ref, watchEffect } from "vue";
import SingleProject from '@/components/SingleProject.vue'
import FilterNav from '@/components/FilterNav.vue'

const projects = ref([])
const filteredProjects = ref([])
const currentFilter = ref('all')

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

watchEffect(() => {
  switch (currentFilter.value) {
    case 'completed': {
      return (filteredProjects.value = projects.value.filter((project) => project.complete))
    }
    case 'uncompleted': {
      return (filteredProjects.value = projects.value.filter((project) => !project.complete))
    }
    default: {
      return (filteredProjects.value = projects.value)
    }
  }
})
</script>

<template>
  <main>
    <FilterNav @filterChange="currentFilter = $event" :current-filter="currentFilter" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </main>
</template>
