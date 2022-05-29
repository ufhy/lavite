import Vue from 'vue'
import Vuetify, {
    VApp, VMain, VAppBar, 
    VSpacer, VContainer, VDivider,
    VBtn,
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VApp, VMain, VAppBar, 
        VSpacer, VContainer, VDivider,
        VBtn,
    }
})

export const vuetify = new Vuetify()