import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import About from './components/staticPages/About';
import Contact from './components/staticPages/Contact';
import PrivacyPolicy from './components/staticPages/PrivacyPolicy';
import Team from './components/staticPages/Team';
import TermsAndConditions from './components/staticPages/TermsAndConditions';
import ProfileSetup from './containers/ProfileSetup';
import SearchResults from './containers/SearchResults';
import User from './containers/User';
import UserProfile from './containers/UserProfile';
import UserPhotos from './containers/UserPhotos';
import UserReferences from './containers/UserReferences';
import UserSettings from './containers/UserSettings';
import Inbox from './containers/Inbox';
import Notifications from './containers/Notifications';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About} />
    <Route path="termsandconditions" component={TermsAndConditions} />
    <Route path="privacypolicy" component={PrivacyPolicy} />
    <Route path="contact" component={Contact} />
    <Route path="team" component={Team} />

    <Route path="setup" component={ProfileSetup} />

    <Route path="search" component={SearchResults} />

    <Route path="user/:userId" component={User}>
      <IndexRoute component={UserProfile} />
      <Route path="photos" component={UserPhotos} />
      <Route path="references" component={UserReferences} />
    </Route>

    <Route path="usersettings" component={UserSettings} />

    <Route path="messages" component={Inbox} />

    <Route path="notifications" component={Notifications} />
  </Route>
);
