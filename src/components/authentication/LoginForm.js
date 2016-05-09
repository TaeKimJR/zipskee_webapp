import React, { PropTypes } from 'react';

const propTypes = {
  handleLogin: PropTypes.func.isRequired
};
const LoginForm = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: ''
    };
  },

  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    if (username && password) {
      this.props.handleLogin(username, password);
    }
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })} />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })} />

          <button type="submit" >Submit</button>
        </form>
      </div>
    );
  }
});
LoginForm.propTypes = propTypes;

export default LoginForm;
