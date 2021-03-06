import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloAgain from '@/components/HelloAgain'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.ROUTER_BASE,
  routes: [
    {
      path: '/',
      redirect: '/helloworld'
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloagain/:text',
      name: 'HelloAgain',
      component: HelloAgain
    }
  ]
})
