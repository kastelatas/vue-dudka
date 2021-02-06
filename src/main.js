import Vue from 'vue'
import App from './App.vue'
import store from './store'
import InlineSvg from 'vue-inline-svg'
import '@/assets/scss/index.scss';

Vue.component('inline-svg', InlineSvg)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
