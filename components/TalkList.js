import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/storage';
import Router from 'next/router';

class TalkList extends Component {
    style = {
        fontSize: '12pt',
        padding: '5px 10px'
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activeUserData: [],
            talkData: []
        }
        this.getUserList();
    }

    // 友人データ取得
    getUserList() {
        let db = firebase.database();
        let ref = db.ref('friend_info/1');
        let self = this;
        ref.orderByKey().on('value', (snapshot) => {
            self.setState({
                data: snapshot.val()
            }, () => {this.getActiveUserList();});
        });
    }

    // アクティブユーザのみデータ取得
    getActiveUserList() {
        let activeUserList = [];
        let db = firebase.database();
        let ref;
        let self = this;

        for (let i in this.state.data) {
            if (this.state.data[i].active_flag == 0) {
                continue;
            }
            ref = db.ref('user_info/' + i);
            ref.orderByKey().on('value', (snapshot) => {
                console.log('activeUserList:' + JSON.stringify(snapshot.val()));
                activeUserList.push(snapshot.val());
                self.setState({
                    activeUserData: activeUserList
                }, () => {this.getTalkList()});
            });
        }
    }

    // トークリスト取得
    getTalkList() {
        let talkList = [];
        let db = firebase.database();
        let ref;
        let self = this;
        for (let i in this.state.activeUserData) {
            ref = db.ref('messages/1/' + this.state.activeUserData[i].user_id);
            ref.orderByKey().limitToLast(1).on('value', (snapshot) => {
                let res = snapshot.val();
                for (let j in res) {
                    talkList.push({
                        user_id: this.state.activeUserData[i].user_id,
                        user_name: this.state.activeUserData[i].user_name,
                        content: res[j].content,
                        from_flag: res[j].from_flag,
                        read_flag: res[j].read_flag,
                        create_date: res[j].create_date,
                        update_date: res[j].update_date
                    });
                    self.setState({
                        talkData: talkList
                    });    
                }
            });
        }
    }

    // 表示するトークリストの生成
    createTalkList() {
        let result = [];

        if (this.state.talkData == null || this.state.talkData.length == 0) {
            return [<tr key="0"><th>NO DATA.</th></tr>];
        }
        for (let i in this.state.talkData) {
            if (this.state.talkData[i] == null || this.state.talkData[i].length == 0) {
                continue;
            }
            result.push(
                <tr data-tag={this.state.talkData[i].user_id}
                    onClick={this.go.bind(null, this.state.talkData[i].user_id)}>
                    <td>{this.state.talkData[i].user_name}</td>
                    <td>{this.state.talkData[i].content}</td>
                </tr>
            );
        }
        return result;
    }

    // ページ移動設定
    go(userId) {
        Router.push('/talk_room?user_id=' + userId);
    }

    render() {
        if (this.state.data.length == 0) {
            this.getUserList();
        }
        return (
            <div>
                <table>
                    <tbody>
                        {this.createTalkList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TalkList;