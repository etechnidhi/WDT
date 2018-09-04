// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import fa from 'fontawesome-vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import SkillNeededPage from './pages/SkillNeededPage.vue'
import JobPaymentInfoPage from './pages/JobPaymentInfoPage.vue'
import CreateNewJob from './pages/CreateNewJob.vue'
import TransactionalDetailPage from './pages/TransactionalDetailPage.vue'
import SubmitInfoPage from './pages/SubmitInfoPage.vue'
import 'font-awesome/css/font-awesome.css'
import store from './store'

Vue.use(fa)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Login},
  {path: '/home', component: Home},
  {path: '/createNewJob', component: CreateNewJob},
  {path: '/skillNeededPage', component: SkillNeededPage},
  {path: '/jobPaymentInfoPage', component: JobPaymentInfoPage},
  {path: '/transactionalDetailPage', component: TransactionalDetailPage},
  {path: '/submitInfoPage', component: SubmitInfoPage}
]
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  store,
  template: '<App/>'
})
