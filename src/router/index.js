import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import WeekOne from '../views/WeekOne.vue'
import WeekTwo from '../views/WeekTwo.vue'
import WeekThree from '../views/WeekThree.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/week01',
      component: WeekOne
    },
    {
      path: '/week02',
      component: WeekTwo
    },
    {
      path: '/week03',
      component: WeekThree
    }
  ]
})

export default router
