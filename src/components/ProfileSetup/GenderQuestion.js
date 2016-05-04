import React from 'react';

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
      console.log('submitting');
    }
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.handleGenderOnChange}
        />
        Male<br />

        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.handleGenderOnChange}
        />
        Female<br />

        <input
          type="radio"
          name="gender"
          value="other"
          onChange={this.handleGenderOnChange}
        />
        Other<br />

        <button type="submit">Next</button>
      </form>
    );
  }
});

export default GenderQuestion;
