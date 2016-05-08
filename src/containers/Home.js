import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/authed/LoginForm';

const propTypes = {
  dispatch: React.PropTypes.func.isRequired
};
const Home = React.createClass({
  render() {
    const { authed } = this.props;
    const isAuthed = !!authed.user;

    return (
      <div>
        <h1>ZIPSKEE</h1>
        {
          isAuthed ?
            <h2>LOGGED IN</h2> :
            <LoginForm handleLogin={() => { console.log('RAWR'); }} />
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