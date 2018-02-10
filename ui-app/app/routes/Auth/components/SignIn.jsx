import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './SignIn.scss';

class SignIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            formError: false,
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username === 'test' && this.state.password === 'pass') {
            this.props.signin()
        } else {
            this.setState({formError: true})
        }
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className={ styles.main }>
                <form onSubmit={this.handleSubmit}>
                    {this.state.formError &&
                        <div>Make sure credentials are valid</div>
                    }
                    <input type="text" placeholder="Username" value={this.state.value} onChange={this.handleChangeUsername}  />
                    <input type="password" placeholder="Password" value={this.state.value} onChange={this.handleChangePassword} />
                    <button className="button expanded">Sign In</button>
                    <div className="text-center"><NavLink exact to="/password">Forgot Password</NavLink></div>
                </form>
            </div>
        )
    }
}

module.exports = SignIn;
