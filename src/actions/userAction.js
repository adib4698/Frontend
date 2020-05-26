import {userService} from "../service/userService";
import {history} from "../helpers";
import {userConstants} from "../constants/userConstants";

export const userAction = {
    login,
    logout,
};

function login(username, password) {

    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                jwtToken => {
                    dispatch(success(username, jwtToken));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };
    function logout() {
        userService.logout();
        return { type: userConstants.LOGOUT };
    }

    function request(username, jwtToken) { return { type: userConstants.LOGIN_REQUEST, payload: {username,jwtToken} } }
    function success(username, jwtToken) { return { type: userConstants.LOGIN_SUCCESS, payload: {username,jwtToken} } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
