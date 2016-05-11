import _ from 'lodash';

const initialState = {
  users: {},
  photos: {},
  referrals: {}
};

export default function entities(state = initialState, action) {
  if (action.entities) {
    return _.merge({}, state, action.entities);
  }

  return state;
}
