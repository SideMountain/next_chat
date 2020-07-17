import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import 'firebase/storage';
import Router from 'next/router';

import Layout from '../components/Layout';
import UserList from '../components/UserList';
import TalkList from '../components/TalkList';
import userListStyle from '../static/UserListStyle';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    // 友達追加ページへ遷移
    go() {
        Router.push('/add_friends');
    }

    render() {
        return (
            <Layout header="Home" title={this.props.user_name}>
                {userListStyle}
                <div id="add_friends">
                    <button onClick={this.go.bind()}>add</button>
                </div>
                <div class="tabs">
                    <input id="home" type="radio" name="tab_item" checked />
                    <input id="talk" type="radio" name="tab_item" />
                    <div class="tab_content" id="home_content">
                        <div class="tab_content_description">
                            <p class="c-txtsp">
                                <UserList />
                            </p>
                        </div>
                    </div>
                    <div class="tab_content" id="talk_content">
                        <div class="tab_content_description">
                            <p class="c-txtsp">
                                <TalkList />
                            </p>
                        </div>
                    </div>
                    <label class="tab_item tab_home" for="home">Home</label>
                    <label class="tab_item tab_talk" for="talk">Talk</label>
                </div>
            </Layout>
        );
    }
}
Home = connect((state) => state)(Home);
export default Home;