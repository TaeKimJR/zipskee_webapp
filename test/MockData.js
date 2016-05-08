export const ACCESS_TOKEN = '123456789';

export const USER_ID = '1';
export const USER_FIRST_NAME = 'jon';
export const USER_LAST_NAME = 'snow';
export const USER_EMAIL = 'jonsnow@got.com';
export const USER = {
  id: USER_ID,
  firstName: USER_FIRST_NAME,
  lastName: USER_LAST_NAME,
  email: USER_EMAIL
};

export const OTHER_USER_ID = '2';
export const OTHER_USER_FIRST_NAME = 'daenerys';
export const OTHER_USER_LAST_NAME = 'targaryen';
export const OTHER_USER_EMAIL = 'daenerystargaryen@got.com';
export const OTHER_USER = {
  id: OTHER_USER_ID,
  firstName: OTHER_USER_FIRST_NAME,
  lastName: OTHER_USER_LAST_NAME,
  email: OTHER_USER_EMAIL
};

export const INITIAL_AUTHED_STATE = {
  user: null,
  accessToken: null
};

export const POPULATED_AUTHED_STATE = {
  user: USER,
  accessToken: ACCESS_TOKEN
};