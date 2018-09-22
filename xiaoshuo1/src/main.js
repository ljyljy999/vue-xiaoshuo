// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import { NavBar } from 'vant';
import { Icon } from 'vant';
import {  Tabbar, TabbarItem } from 'vant';
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false
import axios from "axios";
Vue.prototype.$axios = axios;
import './common.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
