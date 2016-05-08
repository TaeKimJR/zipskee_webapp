import React from 'react';
import { connect } from 'react-redux';

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
            <h2>NOT LOGGED IN </h2>
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