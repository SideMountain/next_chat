import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/storage';
import Lib from '../static/chat_lib';
import Router from 'next/router';

class AddFriend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            friendId: '',
            friendName: null
        }
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.addFriends = this.addFriends.bind(this);
    }

    // 入力されたアドレスをステートにセット
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    // アドレスからユーザIDを検索する
    doSearch() {
        // 「.」を「*」にエンコード(firebaseでは検索に「.」が使用できないため)
        let key = Lib.encodeAddress(this.state.address);
        let db = firebase.database();
        let ref = db.ref('address_info/' + key);
        let userId;
        ref.orderByKey().on('value', (snapshot) => {
            userId = snapshot.val();
            this.setState({
                friendId: userId,
                friendName: ''
            })
            console.log('userId:' + userId);
            if (userId != null) {
                this.getUserInfo(userId);
            }
        });
    }

    // ユーザIDからユーザ情報を取得する
    getUserInfo(userId) {
        let db = firebase.database();
        let ref = db.ref('user_info/' + userId);
        ref.orderByKey().on('value', (snapshot) => {
            let res = snapshot.val();
            console.log('userInfo:' + JSON.stringify(snapshot.val()));
            this.setState({
                friendName: res.user_name
            })
        });
    }

    // 検索結果を表示する
    createFriendInfo() {
        let result;
        if (this.state.friendName == '') {
            result = ['※入力されたアドレスに紐づくユーザは存在しません。'];
        } else {
            result = [
                    <div>
                        <span>{this.state.friendName}</span>
                        <button onClick={this.addFriends}>追加</button>
                    </div>
                ]
        }
        console.log('result:' + result);
        return result;
    }

    // 友人リストへ追加
    addFriends() {
        let db = firebase.database();
        let ref = db.ref('friend_info/1/' + this.state.friendId);
        let now = new Date().toLocaleString();
        console.log('idid:' + this.state.friendId);
        let data = {
            active_flag: 1,
            create_date: now,
            update_date: now
        }
        ref.set(data);
    }

    // 戻る
    go() {
        Router.push('/home');
    }

    render() {
        return (
            <div>
                メールアドレス：<input type="text" size="40" value={this.state.address} onChange={this.onChangeAddress} />
                <button onClick={this.doSearch}>検索</button>
                {this.state.friendName != null
                ?
                <div>
                    {this.createFriendInfo()}
                </div>
                :
                <div>
                    ※追加したい友人のメールアドレスを入力して「検索」をクリックしてください。
                </div>
                }
                <button onClick={this.go.bind()}>Home</button>
            </div>
        );
    }
}
export default AddFriend;