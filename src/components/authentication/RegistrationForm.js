import React, { PropTypes } from 'react';

const propTypes = {
  handleRegistration: PropTypes.func.isRequired
};
const RegistrationForm = React.createClass({
  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  },

  handleSubmit(e) {
    e.preventDefault();

    const { firstName, lastName, email, password, passwordConfirmation } = this.state;
    if (firstName && lastName && email && password && passwordConfirmation
      && password === passwordConfirmation) {
      this.props.handleRegistration(firstName, lastName, email, password, passwordConfirmation);
    }
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })} />

          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={e => this.setState({ lastName: e.target.value })} />

          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })} />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })} />

          <input
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            placeholder="Confirm Password"
            onChange={e => this.setState({ passwordConfirmation: e.target.value })} />

          <button type="submit" >Submit</button>
        </form>
      </div>
    );
  }
});
RegistrationForm.propTypes = propTypes;

export default RegistrationForm;
