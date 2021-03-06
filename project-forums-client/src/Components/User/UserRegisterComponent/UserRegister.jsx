import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../Constants/Routes';

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne:'',
    passwordTwo:'',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props){
        super(props);

        this.state = {INITIAL_STATE};
    }

    onSubmit = (e) =>{
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({...INITIAL_STATE });
                this.props.history.push(ROUTES.FORUMS);
            })
            .catch(error => {
                this.setState({ error });
            })

        e.preventDefault();
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    render(){
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        // adds validation requirements to make signup button available
        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return(
            <form onSubmit={this.onSubmit}>
                <input name="username" value={username} onChange={this.onChange} type="text" placeholder="Username"/>
                <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email address" />
                <input name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="password" />
                <input name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password" />
                <button disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
    </p>
)

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpForm;

export {SignUpForm, SignUpLink};