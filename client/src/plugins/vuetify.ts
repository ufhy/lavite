import { getRuntimeVM } from '@/utils/vm';
import Vue from 'vue'
import Vuetify, {
    VApp, VMain, VAppBar, 
    VSpacer, VContainer, VDivider, VSnackbar, VMenu, VTooltip,
    VBtn, VIcon, VSwitch,
    VCard, VCardTitle, VCardText, VCardActions,
    VTextField, VCheckbox,
    VList, VListItem, VListItemContent, VListItemTitle, VListItemSubtitle,
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VApp, VMain, VAppBar, 
        VSpacer, VContainer, VDivider, VSnackbar, VMenu, VTooltip,
        VBtn, VIcon, VSwitch,
        VCard, VCardTitle, VCardText, VCardActions,
        VTextField, VCheckbox,
        VList, VListItem, VListItemContent, VListItemTitle, VListItemSubtitle,
    }
})

export const vuetify = new Vuetify({
    icons: {
        iconfont: 'mdiSvg'
    }
})

export function useVuetify() {
    const vm = getRuntimeVM();

    return vm.$vuetify;
}