import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '@/views/AddProject.vue'
import EditProject from "@/views/EditProject.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'addProject',
      component: AddProject
    },
    {
      path: '/projects/:id',
      name: 'editProject',
      component: EditProject,
      props: true
    }
  ]
})

export default router
