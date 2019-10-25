import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../src/Components/NavigationComponent/Navigation';
import ForumContainer from '../src/Components/Forums/ForumContainer';
import SignInPage from './Components/User/UserLoginComponent/Login'

import * as ROUTES from './Constants/Routes';
import { SignUpForm } from './Components/User/UserRegisterComponent/UserRegister';
import withAuthentication from './Components/Sessions/withAuthentication';



const App = () => (
 <Router>
    <div>
      <Navigation />

      <hr />

      <Route path={ROUTES.FORUMS} component={ForumContainer}/>
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
    </div>
  </Router>
  
)


export default withAuthentication(App);