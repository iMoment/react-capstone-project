import apiService from "./apiService"

export const createUser = ({ username, password }) => 
    apiService('POST', '/users', {
        username,
        password,
});

export const createSession = ({ username, password }) =>
    apiService('POST', '/users/session', {
        username,
        password,
});