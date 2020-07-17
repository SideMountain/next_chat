import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/storage';
import Router from 'next/router';

class UserList extends Component {
    style = {
        fontSize: '12pt',
        padding: '5px 10px'
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activeUserData: []
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
                
                activeUserList.push(snapshot.val());
                self.setState({
                    activeUserData: activeUserList
                });
            });
        }
    }

    // 表示するユーザリストの生成
    createUserList() {
        let result = [];
        if (this.state.activeUserData == null || this.state.activeUserData.length == 0) {
            return [<tr key="0"><th>NO DATA.</th></tr>];
        }
        for (let i in this.state.activeUserData) {
            result.push(
                <tr data-tag={this.state.activeUserData[i].user_id}
                onClick={this.go.bind(null, this.state.activeUserData[i].user_id)}>
                    <td class="user_image">image</td>
                    <td class="user_name">
                            {this.state.activeUserData[i].user_name}
                    </td>
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
                {this.state.data.length == 0
                ?
                <p>Please wait...</p>
                :
                <table>
                    <tbody>
                        {this.createUserList()}
                    </tbody>
                </table>
                }
            </div>
        );
    }
}
export default UserList;