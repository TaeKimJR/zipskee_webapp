import * as types from '../actions/authed';

const initialState = {
  isFetching: true,
  accessToken: null,
  user: null
};
export default function authed(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_AUTHED_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    case types.RECEIVE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        accessToken: action.accessToken
      });
    case types.SET_AUTHING_FETCH_COMPLETE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case types.RESET_AUTHED:
      return Object.assign({}, initialState, { isFetching: false });
    default:
      return state;
  }
}
