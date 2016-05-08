import expect from 'expect';
import reducer from '../../src/reducers';
import * as types from '../../src/actions/authed';
import * as mockData from '../MockData';

describe('reducer - authed', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toInclude(
      {
        authed: {
          user: null,
          accessToken: null
        }
      }
    );
  });

  it('should handle RECEIVE_ACCESS_TOKEN', () => {
    expect(
      reducer({}, {
        type: types.RECEIVE_ACCESS_TOKEN,
        accessToken: mockData.ACCESS_TOKEN
      })
    ).toInclude(
      {
        authed: {
          accessToken: mockData.ACCESS_TOKEN
        }
      }
    );

    expect(
      reducer(
        {
          authed: {
            accessToken: '987654321'
          }
        },
        {
          type: types.RECEIVE_ACCESS_TOKEN,
          accessToken: mockData.ACCESS_TOKEN
        }
      )
    ).toInclude(
      {
        authed: {
          accessToken: mockData.ACCESS_TOKEN
        }
      }
    );
  });

  it('should handle RECEIVE_AUTHED_USER', () => {
    expect(
      reducer({}, {
        type: types.RECEIVE_AUTHED_USER,
        user: mockData.USER
      })
    ).toInclude(
      {
        authed: {
          user: mockData.USER
        }
      }
    );

    expect(
      reducer(
        {
          authed: {
            user: mockData.OTHER_USER
          }
        },
        {
          type: types.RECEIVE_AUTHED_USER,
          user: mockData.USER
        }
      )
    ).toInclude(
      {
        authed: {
          user: mockData.USER
        }
      }
    );
  });

  it('should handle RESET_AUTHED', () => {
    expect(
      reducer({}, {
        type: types.RESET_AUTHED
      })
    ).toInclude(
      {
        authed: mockData.INITIAL_AUTHED_STATE
      }
    );

    expect(
      reducer(
        {
          authed: mockData.POPULATED_AUTHED_STATE
        },
        {
          type: types.RESET_AUTHED
        }
      )
    ).toInclude(
      {
        authed: mockData.INITIAL_AUTHED_STATE
      }
    );
  });
});
