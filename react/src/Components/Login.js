import React, { Component } from 'react';
import axios from 'axios'
import backend from '../globals'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewUser = this.handleNewUser.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleNewUser() {
        axios.post(`${backend.value}/auth/users/`, {
            username: this.state.username,
            password: this.state.password,
        })
            .then(res => {
                console.log("new user created")
            });
    }

    handleSubmit(event) {
        if (typeof event !== 'undefined') {
            event.preventDefault();
        }
        axios.post(`${backend.value}/auth/jwt/create`, {
            username: this.state.username,
            password: this.state.password,
        })
            .then(res => {
                localStorage.setItem("refresh-token", res.data.refresh);
                localStorage.setItem("access-token", res.data.access);
                this.props.history.push('/map')
            })
            .catch(function (error) {
                console.warn(error);
            });
    }


    render() {
        return (
            <div className='login-wrapper-large'>
                <div className='login-wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <h1>skyprecision</h1>
                        <label>Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                        </label>
                        <label>Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </label>
                        <div>
                            <input type="submit" name="Log In" value="Log In" className='input-button' />
                            <input type="button" name="Create New Account" value="Create New Account" onClick={this.handleNewUser} className='input-button' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login
