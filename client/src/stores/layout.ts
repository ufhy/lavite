import { useVuetify } from '@/plugins/vuetify';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
    id: 'layoutStore',
    state: () => {
        return {
            darkMode: false,
        }
    },
    actions: {
        setDarkMode(payload: boolean) {
            this.darkMode = payload;
        },
        darkModeInit() {
            const vuetify = useVuetify();
            if (vuetify.theme.dark) {
                document.documentElement.classList.add('tw-dark')
            } else {
                document.documentElement.classList.remove('tw-dark')
            }
        },
        darkModeToggle() {
            const vuetify = useVuetify();
            vuetify.theme.dark = !vuetify.theme.dark;
            
            this.darkModeInit();
        }
    }
});