import Cookies from 'js-cookie';
import { SESSION_TOKEN_COOKIE } from '../constants/CookieConstants';

export function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(SESSION_TOKEN_COOKIE);
    if (accessToken) {
      return dispatch(authUser(accessToken, false));
    }
    return dispatch(setAuthingFetchComplete());
  };
}

export function authUser(accessToken) {
  return dispatch =>
    dispatch(fetchAuthedUser(accessToken));
}

export function fetchAuthedUser(accessToken) {
  return dispatch =>
    fetch('http://localhost:8000/api/v1/login/session-info', { headers: { 'X-ZIPSKEE-SESSION': accessToken } })
      .then(response => {
        debugger;
        response.json();
      })
      .then(json => {  // eslint-disable-line
        debugger;
        // TODO: mocked
        const user = {
          id: '1',
          firstName: 'tae',
          lastName: 'kim',
          email: 'taekimjr@gmail.com'
        };
        dispatch(receiveAuthedUserPre(accessToken, user));
      })
      .catch(err => { throw err; });
}

export function receiveAuthedUserPre(accessToken, user) {
  return dispatch => {
    // TODO: normalizr
    dispatch(receiveAccessToken(accessToken));
    dispatch(receiveAuthedUser(user));
    dispatch(setAuthingFetchComplete());
    // TODO: fetch contacts, favorites
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
      .then(response => {
        debugger;
        response.json();
      })
      .then(json => { // eslint-disable-line
        debugger;
        const mockAccessToken = '1'; // TODO: mocked
        Cookies.set(SESSION_TOKEN_COOKIE, mockAccessToken);
        dispatch(receiveAccessToken(mockAccessToken));
        dispatch(fetchAuthedUser(mockAccessToken));
      })
      .catch(err => { throw err; });
}

export function logoutUser() {
  return dispatch => {
    const accessToken = Cookies.get(SESSION_TOKEN_COOKIE);
    fetch('http://localhost:8000/api/v1/logout',
      {
        method: 'POST',
        headers: { 'X-ZIPSKEE-SESSION': accessToken }
      }
    )
      .then(response => {
        debugger;
        response.json();
      })
      .then(json => { // eslint-disable-line
        Cookies.remove(SESSION_TOKEN_COOKIE);
        dispatch(resetAuthed());
      })
      .catch(err => {
        throw err;
      });
  };
}

export function registerUser(firstName, lastName, email, password, passwordConfirmation) {
  return dispatch =>
    fetch('http://localhost:8000/api/v1/users',
      {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password, passwordConfirmation })
      }
    )
      .then(response => {
        debugger;
        response.json();
      })
      .then(json => {   // eslint-disable-line
        debugger;
        const mockEmail = 'taekimjr@gmail.com';
        const mockPassword = 'password';
        dispatch(loginUser(mockEmail, mockPassword));
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

export const SET_AUTHING_FETCH_COMPLETE = 'SET_AUTHING_FETCH_COMPLETE';
export function setAuthingFetchComplete() {
  return {
    type: SET_AUTHING_FETCH_COMPLETE
  };
}

export const RESET_AUTHED = 'RESET_AUTHED';
export function resetAuthed() {
  return {
    type: RESET_AUTHED
  };
}