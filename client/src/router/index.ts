import Vue from 'vue';
import VueRouter from 'vue-router';
import { callMiddleware, getMiddleware } from '@/utils/routeHelper';
import { RouterMetaType } from '@/types';

import authRouter from '@/pages/auth/router';

Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('@/pages/WelcomePage.vue')
        },
        {
            path: import.meta.env.VITE_HOME_ROUTE,
            name: 'dashboard',
            meta: {
                middleware: ['auth'],
                title: 'Dashboard',
            } as RouterMetaType,
            component: () => import('@/pages/DashboardPage.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            meta: {
                middleware: ['auth'],
                title: 'Profile',
            } as RouterMetaType,
            component: () => import('@/pages/profile/ProfilePage.vue')
        },
        ...authRouter,
    ]
})

const globalMiddleware: string[] = [];

router.beforeEach(async (to, from, next) => {
    // Get the middleware for all the matched components.
    const middleware = await getMiddleware(to.meta, globalMiddleware);
    callMiddleware(router, middleware, to, from, (...args) => {
        // Set the application layout only if "next()" was called with no args.
        if (args.length === 0) {
            // router.app.$nextTick(() => {
            //     if (to.meta) {
            //         router.app.setLayout(to.meta.layout);
            //     }
            // });
        }

        next(...args);
    });

    next();
});

router.afterEach(() => {});