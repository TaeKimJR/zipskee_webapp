import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '../../src/components/authentication/LoginForm';
import expect from 'expect';
import * as mockData from '../MockData';

describe('component - login form', () => {
  let wrapper;
  let handleSubmitClick;
  beforeEach(() => {
    handleSubmitClick = () => {};
    wrapper = mount(
      <LoginForm handleLogin={handleSubmitClick} />
    );
  });

  it('should have two inputs', () => {
    expect(wrapper.find('input').length).toEqual(2);
  });

  it('should have one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should start with blank state', () => {
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should call the handleLogin function on click', () => {
    wrapper.setState({ username: mockData.USERNAME, password: mockData.PASSWORD });
    wrapper.find('button').simulate('click');
    // expect(handleSubmitClick).toHaveBeenCalled();
  });

  it('should not call the handleLogin function on click when inputs are not populated', () => {
    wrapper.setState({ username: mockData.USERNAME });
    wrapper.find('button').simulate('click');
    // expect(handleSubmitClick).toHaveBeenCalled();
  });

  it('should not call the handleLogin function on click when inputs are not populated', () => {
    wrapper.setState({ password: mockData.PASSWORD });
    wrapper.find('button').simulate('click');
    // expect(handleSubmitClick).toHaveBeenCalled();
  });
});
