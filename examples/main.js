import Vue from 'vue'
import App from './App.vue'

import menuPlu from '../packages/menu/index'
Vue.use(menuPlu)
import '../packages/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
