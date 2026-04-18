import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page1View from '../views/Page1View.vue'
import Page2View from '../views/Page2View.vue'
import { appState } from '../stores/appState'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/page1', name: 'page1', component: Page1View },
  { path: '/page2', name: 'page2', component: Page2View }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  appState.pageID = to.name
})

export default router