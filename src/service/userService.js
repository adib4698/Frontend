import {getFormBody, getRequestOptions} from '../helpers';
import {getUserDto} from "../helpers";

export const userService = {
    login,
    logout,

};

function login(username, password) {

    return fetch(`http://localhost:8080/auth/login`, getRequestOptions(getFormBody(getUserDto(username, password))))
        .then(handleResponse)
        .then(jwtToken => {
            return {username, jwtToken};
        });
}

function logout() {
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
