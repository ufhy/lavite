import { getRuntimeVM } from '@/utils/vm';
import { AxiosResponse } from 'axios';
import { LaviteSnackbarOptionType } from './components';

export function useSnackbar() {
    const vm = getRuntimeVM();

    function snackbarSuccess(message: string, options?: LaviteSnackbarOptionType) {
        return vm.$root.$snackbars.success(message, options);
    }
    function snackbarError(message: string, options?: LaviteSnackbarOptionType) {
        return vm.$root.$snackbars.error(message, options);
    }
    async function snackbarErrorHttp(errorData: AxiosResponse, redirect = false) {
        if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log(errorData);
        }

        if (errorData.status === 404 && redirect) {
            let path = vm.$route.path;
            if (path) {
                const pathFirstWord = path.substr(0, 1);
                if (pathFirstWord === '/') {
                    path = path.substring(1);
                }
                const pathSplitting = path.split('/');

                snackbarError('Code ' + errorData.status + ': Unable to find data according to your request');
                await vm.$router.push('/not-found-404');
            }
        } else {
            snackbarError(
                Object.prototype.hasOwnProperty.call(errorData.data, 'message') && errorData.data.message
                    ? errorData.data.message
                    : Object.prototype.hasOwnProperty.call(errorData.data, 'error')
                        ? errorData.data.error
                        : errorData.status + ' - ' + errorData.statusText
            );
        }
    }

    return {
        snackbarSuccess, snackbarError, snackbarErrorHttp,
    };
}