import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../../Constants/Routes';

const RegisterPage = () => (
    <div>
        <h1>Sign up</h1>
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

class SignUpForm extends Component {
    constructor(props){
        super(props);

        this.state = {INITIAL_STATE};
    }

    onSubmit = (e) =>{
        console.log("onSubmit")
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

export default SignUpPage;

export {SignUpForm, SignUpLink};