import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import { SignUpLink } from '../UserRegisterComponent/UserRegister';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../Constants/Routes';

const SignInPage = () => (
    <div>
        <h1>Sign In</h1>
        <SignInForm />
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};




class SignInFormBase extends Component{
    constructor(props){
        super(props);

        this.state={...INITIAL_STATE};
    }

    onChange=(e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    onSubmit=(e)=>{
        const {email,password} = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() =>{
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.FORUMS)
            })
            .catch(error => {
                this.setState({ error });
            })
        e.preventDefault();
    }
    render(){
        const { email,password,error } = this.state;

        const isInvalid = 
            password === '' ||
            email === '';

        return(
            <div>
                Log In:
                <form onSubmit={this.onSubmit}>
                    <input name="email" value={email} type="text" onChange={this.onChange} placeholder="Email Address"/>
                    <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Password"/>
                    <button disabled={isInvalid} type="submit" value="Log In" />
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };