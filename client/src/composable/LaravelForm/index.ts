import { reactive } from '@vue/composition-api';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BaseUrlParam } from '../api';
import { LaravelForm } from './form';

type ExtendedProperties<T> = { [P in keyof T]: T[P] };

type SaveOption = {
    post: {
        url: string;
        config?: AxiosRequestConfig;
    };
    put: {
        url: string;
        config?: AxiosRequestConfig;
    };
}

export function makeLaravelForm<T>(data: T, baseUrl?: BaseUrlParam) {
    return new LaravelForm(data, baseUrl) as InstanceType<typeof LaravelForm> & ExtendedProperties<T>;
}

export function useLaravelForm<T>(data: T, baseUrl?: BaseUrlParam) {
    const laForm = reactive<InstanceType<typeof LaravelForm> & T>(makeLaravelForm<T>(data, baseUrl));

    async function laFormWithBusy(callback: () => void) {
        return Promise.resolve().then(() => {
            laForm.busy = true;
            return callback();
        }).finally(() => {
            laForm.busy = false;
        });
    }

    async function laFormSaveAction(edit: boolean, option: SaveOption) {
        if (laForm.busy) {
            return false;
        }


        try {
            let response;
            if (edit) {
                response = await laForm.put(option.put.url, option.put.config);
            } else {
                response = await laForm.post(option.post.url, option.post.config);
            }

            return Promise.resolve(response);
        }
        catch (e) {
            return Promise.reject(e as AxiosResponse);
        }
    }

    return { laForm, laFormWithBusy, laFormSaveAction };
}
