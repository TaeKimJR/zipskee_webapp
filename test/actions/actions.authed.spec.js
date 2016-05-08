import expect from 'expect';
import * as actions from '../../src/actions/authed';
import * as mockData from '../MockData';

describe('actions - authed', () => {
  it('should create an action to receive an access token', () => {
    const accessToken = mockData.ACCESS_TOKEN;
    const expectedAction = {
      type: actions.RECEIVE_ACCESS_TOKEN,
      accessToken
    };
    expect(actions.receiveAccessToken(accessToken)).toEqual(expectedAction);
  });

  it('should create an action to receive an authed user', () => {
    const user = mockData.USER;
    const expectedAction = {
      type: actions.RECEIVE_AUTHED_USER,
      user
    };
    expect(actions.receiveAuthedUser(user)).toEqual(expectedAction);
  });

  it('should create an action to reset authed back to initial state', () => {
    const expectedAction = {
      type: actions.RESET_AUTHED
    };
    expect(actions.resetAuthed()).toEqual(expectedAction);
  });
});