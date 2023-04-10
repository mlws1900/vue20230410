import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Homehtml.vue')
  },
  {
    path: '/home',
    name: 'home1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Homehtml1.vue'),
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import(/* webpackChunkName: "about" */ '../views/Show.vue')
  },
  {
    path: '/p1',
    name: 'Show',
    component: () => import(/* webpackChunkName: "about" */ '../views/P1.vue')
  },
  {
    path: '/z1',
    name: 'Show',
    component: () => import(/* webpackChunkName: "about" */ '../views/z1.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/login1',
    name: 'Login1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login1.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/manageuser',
    component: () => import('../views/manageuser.vue'),
    children: [
      {path: 'info', name: '个人信息', component: () => import(/* webpackChunkName: "about" */ '../views/info.vue')},
      {path: 'zhiwuupload', name: '植物上传', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwuupload.vue')},
      {path: 'zhiwumanage', name: '植物管理', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwumanage.vue')},
      {path: 'zhiwuchange', name: '植物修改', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwuchange.vue')},
      {path: 'zhiwunamesearch', name: '植物名称查询', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwunamesearch.vue')},
      {path: 'zhiwusearch', name: '植物证书号查询', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwusearch.vue')},
      {path: 'zhiwureload', name: '植物数据恢复', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwureload.vue')},
    ]
  },
  {
    path: '/manageadmin',
    component: () => import('../views/manageadmin.vue'),
    children: [
      {path: 'info', name: '管理员信息', component: () => import(/* webpackChunkName: "about" */ '../views/info.vue')},
      {path: 'zhiwumanage', name: '植物管理', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwumanage.vue')},
      {path: 'zhiwuchange', name: '植物修改', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwuchange.vue'),},
      {path: 'zhiwunamesearch', name: '植物名称查询', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwunamesearch.vue'),},
      {path: 'zhiwusearch', name: '植物证书号查询', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwusearch.vue'),},
      {path: 'zhiwuupload', name: '植物登记', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwuupload.vue')},
      {path: 'file', name: '建模管理', component: () => import(/* webpackChunkName: "about" */ '../views/file.vue')},
      {path: 'zhiwureload', name: '植物数据恢复', component: () => import(/* webpackChunkName: "about" */ '../views/zhiwureload.vue')},


    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  localStorage.setItem("currentPathName", to.name)
  store.commit("setPath")
  next()
})


export default router
