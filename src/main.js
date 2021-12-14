import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

import {store} from './store/store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

new Vue({
    store,
    Vuex,
    render: h => h(App),
}).$mount('#app')
