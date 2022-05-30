import axios from 'axios'

export type BaseUrlParam = 'general' | undefined

export function useApi(baseUrl?: BaseUrlParam) {
    const { protocol, hostname, port } = window.location;
    let baseDomain = protocol + '//' + hostname;
    if (port) {
        baseDomain = baseDomain + ':' + port;
    }

    let base = baseDomain;
    if (baseUrl === 'general') {
        base = `${baseDomain}/ajax`;
    }

    const axiosInstance = axios.create({
        baseURL: base,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });

    axiosInstance.defaults.withCredentials = true;
    axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        async function (error) {
            const { status } = error.response;
            // redirect when not authenticate
            if (status === 401) {
                window.location.replace(baseDomain + '/login');
            }
            
            // redirect when forbidden
            if (status === 403) {
                window.location.replace(baseDomain);
            }

            return Promise.reject(error.response);
        }
    );

    return axiosInstance;
}