import axios from 'axios';
import {METHOD} from '../common/constants/CommonConst';

let config = {
    contextPath: "/member-manager",
    methodSupport: {
        "get": "GET",
        "post": "POST",
        "put": "PUT",
        "delete": "DELETE"
    }
};

const instance = axios.create({
    baseURL: getRootUrl(),
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
});

export function getRootUrl() {
    return location.origin + config.contextPath;
}

function isMethodSupport(method: string) {
    // @ts-ignore
    return config.methodSupport[method];
}

const get = (url: string, params?: object) => {
    return request(METHOD.GET, url, params);
};

const create = (url: string, params?: object, body?: object) => {
    return request(METHOD.POST, url, params, body);
};

const update = (url: string, params?: object, body?: object) => {
    return request(METHOD.PUT, url, params, body);
};

const deleteSource = (url: string, params: object) => {
    return request(METHOD.DELETE, url, params);
};

const request = (method: string, url: string, params?: object, body?: object) => {
    let promise;
    params = params ? params : {};
    body = body ? body : {};
    
    if (!isMethodSupport(method)) {
        console.error(`The method ${method} is not support `);
        return undefined;
    }

    switch (method) {
        case METHOD.GET:
            promise = instance.get(url, {params: params});
            break;
        case METHOD.POST:
            promise = instance.post(url, body, {params: params});
            break;
        case METHOD.PUT:
            promise = instance.put(url, body, {params: params});
            break;
        case METHOD.DELETE:
            promise = instance.delete(url, {params: params});
            break;
        default:
            promise = undefined;
    }

    return promise;
};

export const Http = {
    get,
    create,
    update,
    deleteSource
};