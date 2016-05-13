import React from 'react';
import { GENDER_MALE, GENDER_FEMALE, GENDER_OTHER } from '../../constants/UserConstants';

const propTypes = {
  selectedGender: React.PropTypes.string,
  onGenderChange: React.PropTypes.func.isRequired,
  onQuestionCompletion: React.PropTypes.func.isRequired
};
const GenderQuestion = React.createClass({
  render() {
    const { selectedGender, onGenderChange, onQuestionCompletion } = this.props;

    return (
      <div>
        <input
          type="radio"
          name="gender"
          checked={selectedGender === GENDER_MALE}
          onChange={onGenderChange.bind(null, GENDER_MALE)}
        />
        Male<br />

        <input
          type="radio"
          name="gender"
          checked={selectedGender === GENDER_FEMALE}
          onChange={onGenderChange.bind(null, GENDER_FEMALE)}
        />
        Female<br />

        <input
          type="radio"
          name="gender"
          checked={selectedGender === GENDER_OTHER}
          onChange={onGenderChange.bind(null, GENDER_OTHER)}
        />
        Other<br />

        <button onClick={onQuestionCompletion}>Next</button>
      </div>
    );
  }
});
GenderQuestion.propTypes = propTypes;

export default GenderQuestion;