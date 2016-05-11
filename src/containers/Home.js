import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LoginForm from '../components/authentication/LoginForm';
import RegistrationForm from '../components/authentication/RegistrationForm';
import * as actions from '../actions/authed';

const propTypes = {
  dispatch: React.PropTypes.func.isRequired
};
const Home = React.createClass({
  login(username, password) {
    this.props.dispatch(actions.loginUser(username, password));
  },

  logout() {
    this.props.dispatch(actions.logoutUser());
  },

  register(firstName, lastName, email, password, passwordConfirmation) {
    this.props.dispatch(actions.registerUser(firstName, lastName, email, password, passwordConfirmation));
  },

  render() {
    const { authed } = this.props;
    const isAuthed = !!authed.user;
    return (
      <div>
        <h1>ZIPSKEE</h1>
        {
          isAuthed ?
            <div>
              <Link to={`/user/${authed.id}`}>Home</Link>
              <Link to='/inbox'>Inbox</Link>
              <Link to='/notifications'>Notifications</Link>
              <a onClick={this.logout}>Logout</a>
            </div> :
            <div>
              <h2>Login</h2>
              <LoginForm handleLogin={this.login} />
              <h2>Register</h2>
              <RegistrationForm handleRegistration={this.register} />
            </div>
        }
      </div>
    );
  }
});
Home.propTypes = propTypes;

function mapStateToProps(state) {
  const { authed } = state;
  return {
    authed
  };
}

export default connect(mapStateToProps)(Home);