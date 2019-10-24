import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../src/Components/NavigationComponent/Navigation';
import ForumsPage from '../src/Components/Forums/ForumContainer';
import SignInPage from './Components/User/UserLoginComponent/Login'

import * as ROUTES from './Constants/Routes';
import { SignUpForm } from './Components/User/UserRegisterComponent/UserRegister';
import { withFirebase } from '../src/Components/Firebase';
import { AuthUserContext } from '../src/Components/Sessions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser =>{
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null })
    })
  }

  componentWillUnmount(){
    this.listener();
  }

  render() {
    return(
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <div>
            <Navigation />

            <hr />

            <Route path={ROUTES.FORUMS} component={ForumsPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          < Route path={ROUTES.SIGN_UP} component={SignUpForm} />
          </div>
        </Router>
      </AuthUserContext.Provider>
      
    )
  }
}

export default withFirebase(App);