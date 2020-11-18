import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

// Firebaseの初期化を実行します！！実行します！
var config = {
    apiKey: "AIzaSyB4lbe4IWpbyCKZJGPNOuW89pRPz8YnFiQ",
    authDomain: "yu-yama-chat.firebaseapp.com",
    databaseURL: "https://yu-yama-chat.firebaseio.com",
    projectId: "yu-yama-chat",
    storageBucket: "yu-yama-chat.appspot.com",
    messagingSenderId: "95381286371",
    appId: "1:95381286371:web:d65ec973ed17bb89ed84d6",
    measurementId: "G-5E9FPFWBE7"
}

var fireapp;
try {
    firebase.initializeApp(config);
} catch (error) {
    console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
    login: false
}

// レデューサー(ダミー)
function fireReducer(state = initial, action) {
    switch (action.type) {
        // ダミー
        case 'UPDATE_USER':
            return action.value;
        // デフォルト
        default:
            return state;
    }
}

// initStore関数
export function initStore(state = initial) {
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware));
}
