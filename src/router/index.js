import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import AboutMe from '@/components/AboutMe'
import MyCv from '@/components/MyCv'
import Blog from '@/components/Blog'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import ThisWebsite from '@/components/ThisWebsite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/mycv',
      name: 'MyCv',
      component: MyCv
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/technology',
      name: 'ThisWebsite',
      component: ThisWebsite
    }
  ]
})
