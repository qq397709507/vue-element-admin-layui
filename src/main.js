// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import axios from 'axios';
import QS from 'qs'
import http from './http.js'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vdr from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'

require('./mock.js')

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.component('vdr', vdr)

Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.prototype.$http = http;
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

import VueDND from 'awe-dnd'
Vue.use(VueDND)


Vue.use(router)
Vue.use(ElementUI)
Vue.use(VueVideoPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
