import Vue from 'vue'
import vueCompositionApi from '@vue/composition-api';
import { router } from '@/router';
import { vuetify } from '@/plugins/vuetify';
import { pinia } from '@/plugins/pinia';
import { useLayoutStore, useUserStore } from '@/stores';
import { decrypt } from '@/utils/crypt';
import App from '@/App.vue'

import '@/utils/mixin';
import '@/styles/tailwind.css'

Vue.use(vueCompositionApi);

Vue.prototype.$snackbars = null;

new Vue({
    router: router,
    vuetify: vuetify,
    pinia: pinia,
    created() {
        // init dark mode
        const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
        this.$vuetify.theme.dark = dark
        useLayoutStore().setDarkMode(dark)

        // init user information
        if (LAVITE.user) {
            const decryptUser = decrypt(LAVITE.user)
            const parseUser = JSON.parse(decryptUser)

            const userStore = useUserStore()
            userStore.setUser(parseUser)
        }
    },
    render: h => h(App)
}).$mount('#lavite')
