import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSocketIO from 'vue-socket.io';

import App from './App.vue';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

import axios from 'axios';
axios.defaults.withCredentials = true;


Vue.use(new VueSocketIO({
  debug: true,
  connection: (process.env.NODE_ENV !== 'development')? '' : 'http://localhost:3003',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  }
}))



new Vue({
  VueRouter,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
