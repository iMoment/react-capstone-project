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

const SESSION_STORAGE_TOKEN = 'user_session_token';

export const setSessionTokenStorage = (session_token) => localStorage.setItem(SESSION_STORAGE_TOKEN, session_token);

export const getSessionTokenStorage = () => localStorage.getItem(SESSION_STORAGE_TOKEN);

export const removeSessionTokenStorage = () => localStorage.removeItem(SESSION_STORAGE_TOKEN);