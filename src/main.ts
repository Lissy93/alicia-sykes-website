import Vue from 'vue';
import App from './App.vue';
import VueAnalytics from 'vue-analytics';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-53932003-1',
  router,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
