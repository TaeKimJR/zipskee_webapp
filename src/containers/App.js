import '../assets/stylesheets/base.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as authActions from '../actions/authed';


const propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
const App = React.createClass({
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(authActions.initAuth());
  },

  render() {
    return (
      <div>
        Welcome!
        {' '}
        <Link to='/'>Home</Link>
        {' '}
        <Link to='/about'>About</Link>
        {' '}
        <Link to='/termsandconditions'>Terms And Conditions</Link>
        {' '}
        <Link to='/privacypolicy'>PrivacyPolicy</Link>
        {' '}
        <Link to='/contact'>Contact</Link>
        {' '}
        <Link to='/team'>Team</Link>
        {' '}
        <Link to='/setup'>Profile Setup</Link>
        {' '}
        <Link to='/search'>Search Results</Link>
        {' '}
        <Link to='/usersettings'>User Settings</Link>
        {' '}
        <Link to='/inbox'>Inbox</Link>
        {' '}
        <Link to='/notifications'>Notifications</Link>

        <br /><br />

        {this.props.children}
      </div>
    );
  }
});
App.propTypes = propTypes;

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
