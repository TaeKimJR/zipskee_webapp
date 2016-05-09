import React from 'react';
import GenderQuestion from '../components/profileSetup/GenderQuestion';

const ProfileSetup = React.createClass({
  render() {
    return (
      <div>
        <h1>Set up your profile!</h1>
        <h3>Answer the following set of questions:</h3>

        <GenderQuestion />

      </div>
    );
  }
});

export default ProfileSetup;

/* <ProfileSetupNavigation /> */
/* Based on Profile Setup Step - render correct question */