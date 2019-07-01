import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginForm from '@/components/member/LoginForm'
import JoinForm from '@/components/member/JoinForm'
import MemberList from '@/components/member/MemberList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/loginform',
      name: 'loginform',
      component: LoginForm
    },

    {
      path: '/joinform',
      name: 'joinform',
      component : JoinForm
    },
    
    {
      path: '/memberlist',
      name: 'memberlist',
      component : MemberList
    }
  ]
})
