import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { vuetify } from '@/plugins/vuetify';
import { router } from '@/router';
import App from '@/App.vue'

import '@/styles/tailwind.css'

Vue.use(VueCompositionApi);

new Vue({
    vuetify: vuetify,
    router: router,
    render: h => h(App)
}).$mount('#app')
