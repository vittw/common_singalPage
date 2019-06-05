import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//如果要让app端页面重置，就引入下面的样式文件
import './assets/css/base.styl'
//如果想使用一倍图开发app，就使用下面的文件进行屏幕适配
import './rem/rem.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
