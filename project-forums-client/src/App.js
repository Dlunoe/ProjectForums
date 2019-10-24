import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../src/Components/NavigationComponent/Navigation';
import ForumsPage from '../src/Components/Forums/ForumContainer';
import SignInPage from './Components/User/UserLoginComponent/Login'

import * as ROUTES from './Constants/Routes';
import { SignUpForm } from './Components/User/UserRegisterComponent/UserRegister';
import { withFirebase } from '../src/Components/Firebase';

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
      <Router>
        <div>
          <Navigation authUser={this.state.authUser}/>

          <hr />

          <Route path={ROUTES.FORUMS} component={ForumsPage}/>
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        </div>
      </Router>
    )
  }
}

export default withFirebase(App);