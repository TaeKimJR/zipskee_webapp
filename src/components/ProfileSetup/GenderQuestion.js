import React from 'react';
import { GENDER_MALE, GENDER_FEMALE, GENDER_OTHER } from '../../constants/UserConstants';

const GenderQuestion = React.createClass({
  getInitialState() {
    return { genderValue: null };
  },

  handleGenderOnChange(e) {
    this.setState({
      genderValue: e.target.value
    });
  },

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.genderValue) {
      // set app state
      console.log('submitting');
    }
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="radio"
          name="gender"
          value={GENDER_MALE}
          onChange={this.handleGenderOnChange}
        />
        Male<br />

        <input
          type="radio"
          name="gender"
          value={GENDER_FEMALE}
          onChange={this.handleGenderOnChange}
        />
        Female<br />

        <input
          type="radio"
          name="gender"
          value={GENDER_OTHER}
          onChange={this.handleGenderOnChange}
        />
        Other<br />

        <button type="submit">Next</button>
      </form>
    );
  }
});

export default GenderQuestion;
