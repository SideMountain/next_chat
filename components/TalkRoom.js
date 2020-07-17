import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/storage';
import Lib from '../static/chat_lib';
import Router from 'next/router';
import Layout from '../components/Layout';

class TalkRoom extends Component {

    style = {
        fontSize: '12pt',
        padding: '5px 10px'
    }

    constructor(props) {
        super(props);
        this.state = {
            friendId: Router.query.user_id,
            friendName: '',
            talkData: [],
            content: '',
            lastId: -1
        }
        this.getFriendName();
        this.getLastId();
        this.getTalkData();
        this.doAction = this.doAction.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
    }

    // トーク内容を取得
    getTalkData() {
        let db = firebase.database();
        let ref = db.ref('messages/1/' + this.state.friendId);
        let self = this;
        ref.orderByKey().on('value', (snapshot) => {
            let res = snapshot.val();
            if (res == null || res.length == 0) {
                return;
            }
            self.setState({
                talkData: snapshot.val()
            });
        });
    }

    // トーク相手の名前を返却
    getFriendName() {
        let db = firebase.database();
        let ref = db.ref('user_info/' + this.state.friendId);
        let self = this;
        let res;
        ref.orderByKey().on('value', (snapshot) => {
            res = snapshot.val();
        });
        return res.user_name;
    }

    // トーク履歴を作成
    createTalkData() {
        let result = [];
        if (this.state.talkData == null || this.state.talkData.length == 0) {
            return [<tr><td>No Talk Data.</td></tr>];
        }
        for (let i in this.state.talkData) {
            result.push(
                <tr class={this.state.talkData[i].from_flag == 1 ? "from_style" : "to_style"}>
                    <td>
                        {this.state.talkData[i].content}
                    </td>
                    <td>
                        {this.state.talkData[i].create_date}
                    </td>
                </tr>
            );
        }
        return result;
    }

    // 最後のIDを取得
    getLastId() {
        let db = firebase.database();
        let ref = db.ref('messages/1/' + this.state.friendId);
        let self = this;
        ref.orderByKey().limitToLast(1).on('value', (snapshot) => {
            let res = snapshot.val();
            if (res == null || res.length == 0) {
                self.setState({
                    lastId: 1
                });
                return;
            }
            for(let i in res) {
                self.setState({
                    lastId:i
                });
                return;
            }
        });
    }

    // メッセージ内容
    onChangeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    // メッセージ送信
    doAction(e) {
        if (this.state.lastId == -1) {
            return;
        }
        if (this.state.content == '') {
            return;
        }
        let key = this.state.content;
        let now = new Date().toLocaleString();
        let userId = this.state.lastId * 1 + 1;
        let data = {
            content: this.state.content,
            from_flag: 1,
            read_flag: 0,
            create_date: now,
            update_date: now
        }
        let db = firebase.database();
        let ref = db.ref('messages/1/' + this.state.friendId + '/' + userId);
        ref.set(data);
        this.setState({
            content: '',
            lastId: -1
        });
    }

    // 戻る
    go() {
        Router.push('/home');
    }

    render() {
        if (this.state.talkData == null || this.state.talkData.length == 0) {
            this.getTalkData();
        }
        if (this.state.lastId == -1) {
            this.getLastId();
        }
        return (
            <Layout header="Talk." title={this.getFriendName()}>
                <div>
                    {this.state.lastId == -1
                    ?
                    <p>Please wait...</p>
                    :
                    <table>
                        <tbody>
                            {this.createTalkData()}
                            <tr>
                                <td><input type="text" size="30" value={this.state.content} onChange={this.onChangeContent} /></td>
                    <td><button onClick={this.doAction}>send</button></td>
                            </tr>
                        </tbody>
                    </table>
                    }
                    <button onClick={this.go.bind()}>home</button>
                </div>
            </Layout>
        );
    }
}
export default TalkRoom;