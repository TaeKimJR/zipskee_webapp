import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/users';
import GenderQuestion from '../components/profileSetup/GenderQuestion';

const propTypes = {
  authed: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired
};
const ProfileSetup = React.createClass({
  handleGenderOnChange(gender) {
    const { dispatch } = this.props;

    dispatch(actions.updateUser({ gender }));
  },

  nextQuestion() {
    console.log('next question');
  },

  render() {
    const { authed } = this.props;
    const { user } = authed;

    return (
      <div>
        <h1>Set up your profile!</h1>
        <h3>Answer the following set of questions:</h3>

        <GenderQuestion selectedGender={user.gender} onGenderChange={this.handleGenderOnChange} onQuestionCompletion={this.nextQuestion} />

      </div>
    );
  }
});
ProfileSetup.propTypes = propTypes;

function mapStateToProps(state) {
  const { authed } = state;
  return {
    authed
  };
}

export default connect(mapStateToProps)(ProfileSetup);
