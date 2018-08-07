import Vue from 'vue'
import Router from 'vue-router'
import Introduct from '@/components/Introduct'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/introduct"
    },
    {
      path: "/introduct",
      name: "introduct",
      component: Introduct
    },
    {
      path: "/work",
      name: "word",
      component: Work
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills
    },
    {
      path: "/experience",
      name: "experience",
      component: Experience
    }
    
  ]
})
