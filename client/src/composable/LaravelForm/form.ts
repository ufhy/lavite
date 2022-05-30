import { useApi } from '@/composable';
import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { BaseUrlParam } from '../api';
import { LaravelFormErrors } from './errors';
import { deepCopy } from './util';

export class LaravelForm {
    static Routes: {[key: string]: string};
    static ErrorMessage: string;
    static Ignore: string[];

    public busy = false;
    public successful = false;
    public errors: InstanceType<typeof LaravelFormErrors>;

    private readonly originalData: Record<string, any>;
    private baseUrl: BaseUrlParam = undefined

    /**
     * Create a form
     */
    constructor(data: Record<string, any>, baseUrl?: BaseUrlParam) {
        this.errors = new LaravelFormErrors();
        this.originalData = deepCopy(data) as Record<string, any>;
        this.baseUrl = baseUrl;
        Object.assign(this, data);
    }

    /**
     * Fill form data.
     */
    fill(data: Record<string, any>) {
        this.keys().forEach((key: string) => {
            // eslint-disable-next-line
            (<any>this)[key] = data[key]
        });
    }

    /**
     * Get the form data.
     */
    data() {
        return this.keys().reduce(
            // eslint-disable-next-line
            (data, key) => ({ ...data, [key]: (<any>this)[key] }),
            {}
        );
    }

    /**
     * Get the form data keys.
     */
    keys() {
        return Object.keys(this).filter(
            key => !LaravelForm.Ignore.includes(key)
        );
    }

    /**
     * Start processing the form.
     */
    startProcessing() {
        this.errors.clear();
        this.busy = true;
        this.successful = false;
    }

    /**
     * Finish processing the form.
     */
    finishProcessing() {
        this.busy = false;
        this.successful = true;
    }

    /**
     * Clear the form errors.
     */
    clear() {
        this.errors.clear();
        this.successful = false;
    }

    /**
     * Reset the form fields.
     */
    reset() {
        Object.keys(this)
            .filter(key => !LaravelForm.Ignore.includes(key))
            .forEach(key => {
                // eslint-disable-next-line
                (<any>this)[key] = this.originalData[key]
            });
    }

    /**
     * Submit the form via a POST request.
     */
    post(url: string, config?: AxiosRequestConfig) {
        return this.submit('post', url, config);
    }

    /**
     * Submit the form via a PATCH request.
     */
    patch(url: string, config?: AxiosRequestConfig) {
        return this.submit('patch', url, config);
    }

    /**
     * Submit the form via a PUT request.
     */
    put(url: string, config?: AxiosRequestConfig) {
        return this.submit('put', url, config);
    }

    /**
     * Submit the form data via an HTTP request.
     */
    submit(method: Method, url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        this.startProcessing();

        const data = this.data();

        return new Promise((resolve, reject) => {
            useApi(this.baseUrl)
                .request({ url: this.route(url), method, data, ...config })
                .then(response => {
                    this.finishProcessing();

                    resolve(response);
                })
                .catch(error => {
                    this.busy = false;
                    if (error) {
                        this.errors.set(this.extractErrors(error));
                    }

                    reject(error);
                });
        });
    }

    /**
     * Extract the errors from the response object.
     */
    extractErrors(response: {data: {errors: any; message: any}}) {
        if (!response.data || typeof response.data !== 'object') {
            return { error: LaravelForm.ErrorMessage };
        }

        if (response.data.errors) {
            return { ...response.data.errors };
        }

        if (response.data.message) {
            return { error: response.data.message };
        }

        return { ...response.data };
    }

    /**
     * Get a named route.
     */
    route(name: string, parameters: {[key: string]: string} = {}) {
        let url = name;

        // eslint-disable-next-line no-prototype-builtins
        if (LaravelForm.Routes.hasOwnProperty(name)) {
            url = decodeURI(LaravelForm.Routes[name]);
        }

        if (typeof parameters !== 'object') {
            parameters = { id: parameters };
        }

        Object.keys(parameters).forEach(key => {
            url = url.replace(`{${key}}`, parameters[key]);
        });

        return url;
    }
}

LaravelForm.Routes = {};
LaravelForm.ErrorMessage = 'Something went wrong. Please try again.';
LaravelForm.Ignore = ['busy', 'successful', 'errors', 'originalData', 'baseUrl'];
