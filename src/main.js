import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './directivas'

import './globalFilters.js'

new Vue({
  render: h => h(App),
}).$mount('#app')
