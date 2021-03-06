import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import(/* webpackChunkName: "login" */ '@/components/Login')
const Register = () => import(/* webpackChunkName: "register" */ '@/components/Register')
const Bicycle = () => import(/* webpackChunkName: "bicycle" */ '@/components/Bicycle')
const Order = () => import(/* webpackChunkName: "order" */ '@/components/Order')
const Me = () => import(/* webpackChunkName: "me" */ '@/components/Me')
const List = () => import(/* webpackChunkName: "list" */ '@/components/List')
const Manage = () => import(/* webpackChunkName: "manage" */ '@/components/Manage')
const ModifyPwd = () => import(/* webpackChunkName: "modifyPwd" */ '@/components/ModifyPwd')
const ModifyInfo = () => import(/* webpackChunkName: "modifyInfo" */ '@/components/ModifyInfo')
const Detail = () => import(/* webpackChunkName: "detail" */ '@/components/Detail')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: Login},
    { path: '/register', name: 'Register', component: Register },
    { path: '/bicycle', name: 'Bicycle', component: Bicycle },
    { path: '/order', name: 'Order', component: Order },
    { path: '/me', name: 'Me', component: Me },
    { path: '/list', name: 'List', component: List },
    { path: '/manage', name: 'Manage', component: Manage },
    { path: '/modifyPwd', name: 'ModifyPwd', component: ModifyPwd },
    { path: '/modifyInfo', name: 'ModifyInfo', component: ModifyInfo },
    { path: '/detail/:id', name: 'Detail', component: Detail }
  ]
})
