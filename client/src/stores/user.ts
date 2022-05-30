import { useApi } from '@/composable';
import { UserItemType } from '@/eloquent';
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'userStore',
    state: () => {
        return {
            user: null as UserItemType | null,
        }
    },
    getters: {
        isLogin: (state) => state.user ? true : false,
    },
    actions: {
        setUser(payload: UserItemType | null) {
            this.user = payload
        },
        async logout() {
            try {
                await useApi().post('auth/logout').then((response) => {
                    const { data } = response;
                    this.user = null;
                    if (data.redirect_url) {
                        window.location.replace(data.redirect_url);
                    }
                });
            } catch (e) {
                alert(e);
            }
        }
    }
});