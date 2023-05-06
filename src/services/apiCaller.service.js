import axios from 'axios';
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token');
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
const getAuthToken = (options) => {
    return {
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem('user-token'),
            ...options?.headers

        }
    }
}
export function getApi(params) {
    return axios.get(params.url, getAuthToken())
}

export function postApi(params) {
    return axios.post(params.url, params.body, getAuthToken(params.options))
}

export function patchApi(params) {
    return axios.patch(params.url, params.body, getAuthToken(params.options))
}

export function deleteApi(params) {
    return axios.delete(params.url, getAuthToken())
}