import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/HomePage.vue')
        },
        {
            path: '/typescript',
            name: 'typescript',
            component: () => import('@/pages/TypescriptPage.vue')
        },
        {
            path: '/vite',
            name: 'vite',
            component: () => import('@/pages/VitePage.vue')
        },
        {
            path: '/vuetify',
            name: 'vuetify',
            component: () => import('@/pages/VuetifyPage.vue')
        }
    ]
})