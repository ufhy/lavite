import { RouterMetaType } from '@/types';
import { RouteConfig } from 'vue-router';

const authRoutes = [
    {
        path: '/auth',
        redirect: {name: 'auth.login'},
    },
] as RouteConfig[];

if (LAVITE.hasLogin) {
    authRoutes.push({
        path: import.meta.env.VITE_AUTH_LOGIN_ROUTE,
        name: 'auth.login',
        meta: {
            middleware: ['redirectIfAuthenticated'],
        } as RouterMetaType,
        component: () => import('./LoginPage.vue')
    })
}
if (LAVITE.hasRegister) {
    authRoutes.push({
        path: import.meta.env.VITE_AUTH_REGISTER_ROUTE,
        name: 'auth.register',
        component: () => import('./RegisterPage.vue')
    })
}
if (LAVITE.hasResetPassword) {
    authRoutes.push({
        path: import.meta.env.VITE_AUTH_FORGOT_PASSWORD_ROUTE,
        name: 'auth.password.request',
        component: () => import('./ForgotPasswordPage.vue')
    })
    authRoutes.push({
        path: import.meta.env.VITE_AUTH_RESET_PASSWORD_ROUTE,
        name: 'auth.password.reset',
        component: () => import('./ResetPassword.vue')
    })
}

export default authRoutes;