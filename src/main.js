import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('../public/sass/mystyles.scss')

new Vue({
  render: h => h(App),
}).$mount('#app')
