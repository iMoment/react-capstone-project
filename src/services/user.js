import apiService from "./apiService"

export const createUser = ({ username, password }) => 
    apiService('POST', '/users', {
        username,
        password,
});