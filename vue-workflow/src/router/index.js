import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (resolve) => {
  import('components/HelloWorld').then((module) => {
    resolve(module)
  })
}

const Test = (resolve) => {
  import('components/test/test').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
