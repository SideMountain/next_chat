import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

// Firebaseの初期化
var config = {
    apiKey: "dummy",
    authDomain: "dummy",
    databaseURL: "dummy",
    projectId: "dummy",
    storageBucket: "dummy",
    messagingSenderId: "dummy",
    appId: "dummy",
    measurementId: "dummy"
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