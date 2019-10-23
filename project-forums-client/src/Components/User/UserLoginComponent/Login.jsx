import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit=(e)=>{
        console.log(this.state)
    }
    render(){
        return(
            <div>
                Log In:
                <form>
                    <label for="username">Username:</label>
                    <input name="username" type="text" onChange={this.handleChange}/>
                    <label for="password">Password:</label>
                    <input type="text" name="password" onChange={this.handleChange}/>
                    <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}

export default Login;