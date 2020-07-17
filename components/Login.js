import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import 'firebase/storage';

import Router from 'next/router';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    // ログイン処理
    login() {
        let provider = new firebase.auth.GoogleAuthProvider();
        var self = this;
        firebase.auth().signInWithPopup(provider).then((result) => {
            this.props.dispatch({
                type: 'UPDATE_USER',
                value: {
                    login: true,
                    user_name: result.user.displayName,
                    address: result.user.email,
                    data: this.props.data
                }
            });
            this.go();
        });
    }

    // ログアウト処理
    logout() {
        console.log('logout');
        firebase.auth().signOut();
        this.props.dispatch({
            type: 'UPDATE_USER',
            value: {
                login: false,
                user_name: '(click here!)',
                address: '',
                data: []
            }
        });
        this.props.onLogouted();
    }

    go() {
        Router.push('/home');
    }

    // レンダリング
    render() {
        return (
            <div id="login">
                <span onClick={this.login}>
                    LOGIN
                </span>
                {this.props.user_name != null ? <p>{this.props.user_name}</p> : <p>not login</p>}
            </div>
        );
    }
}
Login = connect((state) => state)(Login);
export default Login;