import { NavigationGuardNext, Route } from 'vue-router';
import auth from './auth';
import redirectIfAuthenticated from './redirectIfAuthenticated';

export type RouterMiddlewareType = (to: Route, from: Route, next: NavigationGuardNext) => void;

export default {
    auth: auth,
    redirectIfAuthenticated: redirectIfAuthenticated,
} as Record<string, RouterMiddlewareType>;
