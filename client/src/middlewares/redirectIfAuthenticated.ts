import { useUserStore } from '@/stores';
import { NavigationGuardNext, Route } from 'vue-router';

export default (to: Route, from: Route, next: NavigationGuardNext) => {
    const userStore = useUserStore();

    if (userStore.isLogin) {
        window.location.replace(import.meta.env.VITE_HOME_ROUTE);
    }
    else {
        next();
    }
};
