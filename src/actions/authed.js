import Cookies from 'js-cookie';
import { SESSION_TOKEN_COOKIE } from '../constants/CookieConstants';

export function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(SESSION_TOKEN_COOKIE);
    if (accessToken) {
      return dispatch(authUser(accessToken, false));
    }
    return null;
  };
}

export function authUser(accessToken) {
  return dispatch =>
    dispatch(fetchAuthedUser(accessToken));
}

export function fetchAuthedUser(accessToken) {
  return dispatch =>
    fetch('http://localhost:8000/api/v1/login/session-info', { headers: { 'X-ZIPSKEE-SESSION': accessToken } })
      .then(response => response.json())
      .then(json => dispatch(receiveAuthedUserPre(accessToken, json)))
      .catch(err => { throw err; });
}

export function receiveAuthedUserPre(accessToken, user) {
  return dispatch => {
    dispatch(receiveAccessToken(accessToken));
    dispatch(receiveAuthedUser(user));
  };
}

export function loginUser(username, password) {
  return dispatch =>
    fetch('http://localhost:8000/api/v1/login',
      {
        method: 'POST',
        body: JSON.stringify({ username, password })
      }
    )
      .then(response => response.json())
      .then(json => {
        const { accessToken } = json;
        Cookies.set(SESSION_TOKEN_COOKIE, accessToken);
        dispatch(receiveAccessToken(accessToken));
        dispatch(fetchAuthedUser(accessToken));
      })
      .catch(err => { throw err; });
}

export function registerUser(firstName, lastName, email, password, passwordConfirmation) {
  return dispatch =>
    fetch('http://localhost:8000/api/v1/users',
      {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password, passwordConfirmation })
      }
    )
      .then(response => response.json())
      .then(json => {
        dispatch(loginUser(json.email, json.password));
      })
      .catch(err => { throw err; });
}

export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN';
export function receiveAccessToken(accessToken) {
  return {
    type: RECEIVE_ACCESS_TOKEN,
    accessToken
  };
}

export const RECEIVE_AUTHED_USER = 'RECEIVE_AUTHED_USER';
export function receiveAuthedUser(user) {
  return {
    type: RECEIVE_AUTHED_USER,
    user
  };
}

export const RESET_AUTHED = 'RESET_AUTHED';
export function resetAuthed() {
  return {
    type: RESET_AUTHED
  };
}