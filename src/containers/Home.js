import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/authed/LoginForm';
import * as actions from '../actions/authed';

const propTypes = {
  dispatch: React.PropTypes.func.isRequired
};
const Home = React.createClass({
  login(username, password) {
    this.props.dispatch(actions.loginUser(username, password));
  },

  render() {
    const { authed } = this.props;
    const isAuthed = !!authed.user;

    return (
      <div>
        <h1>ZIPSKEE</h1>
        {
          isAuthed ?
            <h2>LOGGED IN</h2> :
            <LoginForm handleLogin={this.login} />
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