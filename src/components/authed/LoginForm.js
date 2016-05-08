import React, { PropTypes } from 'react';

const ListItemForm = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: ''
    };
  },

  handleSubmit() {
    const { username, password } = this.state;
    if (username && password) {
      this.props.handleLogin(username, password);
    }
  },

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.username}
          onChange={e => this.setState({ username: e.target.value })} />

        <input
          type='password'
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })} />

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  },

  propTypes: {
    handleLogin: PropTypes.func.isRequired
  }
});

export default ListItemForm;
