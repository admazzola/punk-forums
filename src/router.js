import Vue from 'vue'
import Router from 'vue-router'


import Home from './views/Home.vue'
 

import Dashboard from './views/Dashboard.vue'

import Application from './views/Application.vue'


import Profile from './views/Profile.vue'

import TopicNew from './views/topic/New.vue'

import TopicShow from './views/topic/Show.vue'

import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({  
  mode: 'history',
  base: process.env.PUBLIC_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    } ,

    {
      path: '/profile',
      name: 'profile',
      component: Profile
    } ,

    

    {
      path: '/topic/new',
      name: 'topicnew',
      component: TopicNew
    } ,

    {
      path: '/topic/:hash',
      name: 'topicshow',
      component: TopicShow
    } ,


    {
      path: '/application/:app_id',
      name: 'application',
      component: Application
    } ,


    

   
    {
      path: '/*',
      component: NotFound
    },
  ]
})
