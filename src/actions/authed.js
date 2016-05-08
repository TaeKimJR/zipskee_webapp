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
    fetch('http://localhost:8000/api/v1/me', { headers: { 'X-ZIPSKEE-SESSION': accessToken } })
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