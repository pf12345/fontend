import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
import Index from '../views/index.vue'
import Add from '../views/add.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Article from '../views/article.vue'

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {path: '/add', component: Add},
      { path: '/', component: Index },
      {path: '/login', component: Login},
      {path: '/register', component: Register},
      {path: '/article/:id', component: Article}
    ]
  })
}
