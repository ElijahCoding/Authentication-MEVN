import Vue from 'vue'
import Main from './pages/Main.vue'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import TextInput from '@/client/components/TextInput.vue'
import Validator from 'vee-validate'
import store from './store'

Vue.use(Router)
Vue.use(Validator)

Vue.component('text-input', TextInput)

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Main)
})