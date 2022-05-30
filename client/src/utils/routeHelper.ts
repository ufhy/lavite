import { RouterMetaType } from '@/types'
import Vue, { AsyncComponent, ComponentOptions } from 'vue';
import VueRouter, { NavigationGuardNext, Route } from 'vue-router';
import middleware, { RouterMiddlewareType } from '@/middlewares';

type ResolveComponentType =  ComponentOptions<Vue> | typeof Vue | AsyncComponent;

export function resolveComponents (components: ResolveComponentType[]) {
    const callback = components.map(component => {
        return component;
    });
    return Promise.all(callback);
}

export function getMiddleware (meta?: RouterMetaType, globalMiddleware?: string[]): Promise<RouterMiddlewareType[]> {
    const register: Record<string, RouterMiddlewareType> = {};
    if (globalMiddleware && globalMiddleware.length >= 1) {
        globalMiddleware.forEach(async (value) => {
            register[value] = middleware[value];
        });
    }

    if (meta) {
        if (typeof meta.middleware !== 'undefined') {
            if (Array.isArray(meta.middleware)) {
                meta.middleware.forEach((value) => {
                    if (!Object.prototype.hasOwnProperty.call(register, value)) {
                        register[value] = middleware[value];
                    }
                });
            } else {
                if (!Object.prototype.hasOwnProperty.call(register, meta.middleware)) {
                    register[meta.middleware] = middleware[meta.middleware];
                }
            }
        }
    }

    return new Promise((resolve, reject) => {
        Promise.all(Object.values(register)).then((result) => {
            const modules: RouterMiddlewareType[] = [];
            result.forEach((value: any) => {
                modules.push(value);
            });

            resolve(modules);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function callMiddleware (router: VueRouter, registeredMiddleware: Array<RouterMiddlewareType>, to: Route, from: Route, next: NavigationGuardNext) {
    const _next = (...args: any[]) => {
        // Stop if "_next" was called with an argument or the stack is empty.
        if (args.length > 0 || registeredMiddleware.length === 0) {
            return next(...args);
        }

        registeredMiddleware.forEach((registered) => {
            registered(to, from, next);
        });
    };

    _next();
}