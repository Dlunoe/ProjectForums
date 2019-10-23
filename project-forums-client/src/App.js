import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../src/Components/NavigationComponent/Navigation';
import ForumsPage from '../src/Components/Forums/ForumContainer';
import SignInPage from './Components/User/UserLoginComponent/Login'

import * as ROUTES from './Constants/Routes';

const App = () => (
  <Router>
    <div>
      <Navigation/>

      <hr />

      <Route path={ROUTES.FORUMS} component={ForumsPage}/>
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    </div>
  </Router>
)

export default App;
