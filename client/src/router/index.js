import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/components/Register'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Presentations from '@/components/Presentations'
import EditPresentation from '@/components/EditPresentation'
import ViewPresentation from '@/components/ViewPresentation'
import CreatePresentation from '@/components/CreatePresentation'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HelloWorld
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/presentations',
    name: 'presentations',
    component: Presentations
  },
  {
    path: '/presentations/create',
    name: 'presentations-create',
    component: CreatePresentation
  },
  {
    path: '/presentations/:presentationId',
    name: 'presentation',
    component: ViewPresentation
  },
  {
    path: '/presentations/:presentationId/edit',
    name: 'presentation-edit',
    component: EditPresentation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
