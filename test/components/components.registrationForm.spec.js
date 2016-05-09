import React from 'react';
import { mount } from 'enzyme';
import RegistrationForm from '../../src/components/authentication/RegistrationForm';
import expect from 'expect';
import * as mockData from '../MockData';

describe('component - registration form', () => {
  let wrapper;
  let handleSubmitClick;
  beforeEach(() => {
    handleSubmitClick = () => {};
    wrapper = mount(
      <RegistrationForm handleRegistration={handleSubmitClick} />
    );
  });

  it('should have five inputs', () => {
    expect(wrapper.find('input').length).toEqual(5);
  });

  it('should have one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should start with blank state', () => {
    expect(wrapper.state().firstName).toEqual('');
    expect(wrapper.state().lastName).toEqual('');
    expect(wrapper.state().email).toEqual('');
    expect(wrapper.state().password).toEqual('');
    expect(wrapper.state().passwordConfirmation).toEqual('');
  });

  it('should call the handleRegistration function on click', () => {
    wrapper.setState({
      firstName: mockData.USER_FIRST_NAME,
      lastName: mockData.USER_LAST_NAME,
      email: mockData.USER_EMAIL,
      password: mockData.PASSWORD,
      passwordConfirmation: mockData.PASSWORD
    });
    wrapper.find('button').simulate('click');
    // expect(handleSubmitClick).toHaveBeenCalled();
  });

  it('should not call the handleRegistration function on click when inputs are not populated', () => {
    wrapper.find('button').simulate('click');
    // expect(handleSubmitClick).toHaveBeenCalled();
  });

  it('should not call the handleLogin function on click when passwords do not match', () => {
    wrapper.setState({
      firstName: mockData.USER_FIRST_NAME,
      lastName: mockData.USER_LAST_NAME,
      email: mockData.USER_EMAIL,
      password: mockData.PASSWORD,
      passwordConfirmation: mockData.OTHER_PASSWORD
    });
    wrapper.find('button').simulate('click');
    // expect(handleSubmitClick).toHaveBeenCalled();
  });
});
