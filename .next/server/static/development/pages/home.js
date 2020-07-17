module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\env\\react\\next_chat\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }, this.props.footer));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\env\\react\\next_chat\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, this.props.header), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, this.props.title));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserList */ "./components/UserList.js");
/* harmony import */ var _components_TalkList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TalkList */ "./components/TalkList.js");
/* harmony import */ var _static_UserListStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/UserListStyle */ "./static/UserListStyle.js");
var _jsxFileName = "C:\\env\\react\\next_chat\\components\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  } // 友達追加ページへ遷移


  go() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/add_friends');
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      header: "Home",
      title: this.props.user_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, _static_UserListStyle__WEBPACK_IMPORTED_MODULE_8__["default"], __jsx("div", {
      id: "add_friends",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, __jsx("button", {
      onClick: this.go.bind(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, "add")), __jsx("div", {
      class: "tabs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("input", {
      id: "home",
      type: "radio",
      name: "tab_item",
      checked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }), __jsx("input", {
      id: "talk",
      type: "radio",
      name: "tab_item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }), __jsx("div", {
      class: "tab_content",
      id: "home_content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, __jsx("div", {
      class: "tab_content_description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, __jsx("p", {
      class: "c-txtsp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, __jsx(_components_UserList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 33
      }
    })))), __jsx("div", {
      class: "tab_content",
      id: "talk_content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx("div", {
      class: "tab_content_description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }, __jsx("p", {
      class: "c-txtsp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, __jsx(_components_TalkList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    })))), __jsx("label", {
      class: "tab_item tab_home",
      for: "home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, "Home"), __jsx("label", {
      class: "tab_item tab_talk",
      for: "talk",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, "Talk")));
  }

}

Home = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(Home);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/Style */ "./static/Style.js");
var _jsxFileName = "C:\\env\\react\\next_chat\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      id: "main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, _static_Style__WEBPACK_IMPORTED_MODULE_3__["default"], __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      header: this.props.header,
      title: this.props.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }), this.props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      footer: "copyright YU-YAMA.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/TalkList.js":
/*!********************************!*\
  !*** ./components/TalkList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\env\\react\\next_chat\\components\\TalkList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class TalkList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "style", {
      fontSize: '12pt',
      padding: '5px 10px'
    });

    this.state = {
      data: [],
      activeUserData: [],
      talkData: []
    };
    this.getUserList();
  } // 友人データ取得


  getUserList() {
    let db = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database();
    let ref = db.ref('friend_info/1');
    let self = this;
    ref.orderByKey().on('value', snapshot => {
      self.setState({
        data: snapshot.val()
      }, () => {
        this.getActiveUserList();
      });
    });
  } // アクティブユーザのみデータ取得


  getActiveUserList() {
    let activeUserList = [];
    let db = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database();
    let ref;
    let self = this;

    for (let i in this.state.data) {
      if (this.state.data[i].active_flag == 0) {
        continue;
      }

      ref = db.ref('user_info/' + i);
      ref.orderByKey().on('value', snapshot => {
        console.log('activeUserList:' + JSON.stringify(snapshot.val()));
        activeUserList.push(snapshot.val());
        self.setState({
          activeUserData: activeUserList
        }, () => {
          this.getTalkList();
        });
      });
    }
  } // トークリスト取得


  getTalkList() {
    let talkList = [];
    let db = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database();
    let ref;
    let self = this;

    for (let i in this.state.activeUserData) {
      ref = db.ref('messages/1/' + this.state.activeUserData[i].user_id);
      ref.orderByKey().limitToLast(1).on('value', snapshot => {
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
  } // 表示するトークリストの生成


  createTalkList() {
    let result = [];

    if (this.state.talkData == null || this.state.talkData.length == 0) {
      return [__jsx("tr", {
        key: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 33
        }
      }, "NO DATA."))];
    }

    for (let i in this.state.talkData) {
      if (this.state.talkData[i] == null || this.state.talkData[i].length == 0) {
        continue;
      }

      result.push(__jsx("tr", {
        "data-tag": this.state.talkData[i].user_id,
        onClick: this.go.bind(null, this.state.talkData[i].user_id),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }
      }, this.state.talkData[i].user_name), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      }, this.state.talkData[i].content)));
    }

    return result;
  } // ページ移動設定


  go(userId) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/talk_room?user_id=' + userId);
  }

  render() {
    if (this.state.data.length == 0) {
      this.getUserList();
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, __jsx("table", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }, this.createTalkList())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TalkList);

/***/ }),

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\env\\react\\next_chat\\components\\UserList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class UserList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "style", {
      fontSize: '12pt',
      padding: '5px 10px'
    });

    this.state = {
      data: [],
      activeUserData: []
    };
    this.getUserList();
  } // 友人データ取得


  getUserList() {
    let db = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database();
    let ref = db.ref('friend_info/1');
    let self = this;
    ref.orderByKey().on('value', snapshot => {
      self.setState({
        data: snapshot.val()
      }, () => {
        this.getActiveUserList();
      });
    });
  } // アクティブユーザのみデータ取得


  getActiveUserList() {
    let activeUserList = [];
    let db = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database();
    let ref;
    let self = this;

    for (let i in this.state.data) {
      if (this.state.data[i].active_flag == 0) {
        continue;
      }

      ref = db.ref('user_info/' + i);
      ref.orderByKey().on('value', snapshot => {
        activeUserList.push(snapshot.val());
        self.setState({
          activeUserData: activeUserList
        });
      });
    }
  } // 表示するユーザリストの生成


  createUserList() {
    let result = [];

    if (this.state.activeUserData == null || this.state.activeUserData.length == 0) {
      return [__jsx("tr", {
        key: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      }, "NO DATA."))];
    }

    for (let i in this.state.activeUserData) {
      result.push(__jsx("tr", {
        "data-tag": this.state.activeUserData[i].user_id,
        onClick: this.go.bind(null, this.state.activeUserData[i].user_id),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("td", {
        class: "user_image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, "image"), __jsx("td", {
        class: "user_name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, this.state.activeUserData[i].user_name)));
    }

    return result;
  } // ページ移動設定


  go(userId) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/talk_room?user_id=' + userId);
  }

  render() {
    if (this.state.data.length == 0) {
      this.getUserList();
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, this.state.data.length == 0 ? __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, "Please wait...") : __jsx("table", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, this.createUserList())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserList */ "./components/UserList.js");
/* harmony import */ var _components_TalkList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TalkList */ "./components/TalkList.js");
/* harmony import */ var _static_UserListStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/UserListStyle */ "./static/UserListStyle.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
var _jsxFileName = "C:\\env\\react\\next_chat\\pages\\home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (() => // <Layout header="{this.props.user_name}" title="home">
//     {userListStyle}
//     <div class="tabs">
//         <input id="home" type="radio" name="tab_item" checked />
//         <input id="talk" type="radio" name="tab_item" />
//         <div class="tab_content" id="home_content">
//             <div class="tab_content_description">
//                 <p class="c-txtsp">
//                     <UserList />
//                 </p>
//             </div>
//         </div>
//         <div class="tab_content" id="talk_content">
//             <div class="tab_content_description">
//                 <p class="c-txtsp">
//                     <TalkList />
//                 </p>
//             </div>
//         </div>
//         <label class="tab_item tab_home" for="home">Home</label>
//         <label class="tab_item tab_talk" for="talk">Talk</label>
//     </div>
// </Layout>
__jsx(_components_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\env\\react\\next_chat\\static\\Style.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (__jsx("style", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 16
  }
}, `
    body {
        margin: 10px;
        padding: 5px;
        background-color: lightcyan;
    }
    header {
        font-size: 64pt;
        font-weight: bold;
        text-align: right;
        letter-spacing: -8px;
        color: #DDDDFF;
        margin: -32px 5px;
    }
    footer {
        font-size: 12pt;
        text-align: center;
        border-bottom: 1px solid #99C;
        color: #99C;
        margin: 50px 0px 10px 0px;
        position: absolute;
        bottom: 10px;
        right: 10px;
        left: 10px;
    }
    h1 {
        font-size: 22pt;
        font-weight: bold;
        text-align: left;
        letter-spacing: 0px;
        color: #77A;
        margin: -50px 0px 50px 0px;
    }
    p {
        margin: 0px;
        color: #669;
        font-size: 16pt;
    }
    #main {
        height: 100hv;
    }
    /* タブ切り替えスタイル */
    .tabs {
        margin-top: 50px;
        padding-bottom: 50px;
        background-color: #FFF;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        margin: 0 auto;
    }
    .tab_item {
        width: calc(100%/2);
        height: 50px;
        border-top: 3px solid #5AB4BD;
        background-color: lightcyan;
        line-height: 50px;
        font-size: 16pt;
        text-align: center;
        color: #565656;
        display: block;
        float: left;
        font-weight: bold;
        transition: all 0.2s ease;
    }
    .tab_item:hover {
        opacity: 0.75;
    }
    input[name="tab_item"] {
        display: none;
    }
    .tab_content {
        display: none;
        padding: 20px 20px;
        height: 60vh;
        clear: both;
        overflow: hidden;
    }
    /* 選択されているタブのコンテンツのみ表示 */
    #home:checked ~ #home_content,
    #talk:checked ~ #talk_content {
        display: block;
    }
    /* 選択されているタブのスタイルを変える */
    #home:checked ~ .tab_home,
    #talk:checked ~ .tab_talk {
        background-color: #5AB4BD;
        color: #FFF;
    }
`));

/***/ }),

/***/ "./static/UserListStyle.js":
/*!*********************************!*\
  !*** ./static/UserListStyle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\env\\react\\next_chat\\static\\UserListStyle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (__jsx("style", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 16
  }
}, `
    td {
        height: 100px;
    }
    .user_image {

    }
    .user_name {
        font-size: 16pt;
        font-weight: bold;
    }
`));

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\env\react\next_chat\pages\home.js */"./pages/home.js");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFsa0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvVXNlckxpc3RTdHlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImZvb3RlciIsIkhlYWRlciIsImhlYWRlciIsInRpdGxlIiwiSG9tZSIsImNvbnN0cnVjdG9yIiwiZ28iLCJSb3V0ZXIiLCJwdXNoIiwidXNlcl9uYW1lIiwidXNlckxpc3RTdHlsZSIsImJpbmQiLCJjb25uZWN0Iiwic3RhdGUiLCJMYXlvdXQiLCJzdHlsZSIsImNoaWxkcmVuIiwiVGFsa0xpc3QiLCJmb250U2l6ZSIsInBhZGRpbmciLCJkYXRhIiwiYWN0aXZlVXNlckRhdGEiLCJ0YWxrRGF0YSIsImdldFVzZXJMaXN0IiwiZGIiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwic2VsZiIsIm9yZGVyQnlLZXkiLCJvbiIsInNuYXBzaG90Iiwic2V0U3RhdGUiLCJ2YWwiLCJnZXRBY3RpdmVVc2VyTGlzdCIsImFjdGl2ZVVzZXJMaXN0IiwiaSIsImFjdGl2ZV9mbGFnIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRUYWxrTGlzdCIsInRhbGtMaXN0IiwidXNlcl9pZCIsImxpbWl0VG9MYXN0IiwicmVzIiwiaiIsImNvbnRlbnQiLCJmcm9tX2ZsYWciLCJyZWFkX2ZsYWciLCJjcmVhdGVfZGF0ZSIsInVwZGF0ZV9kYXRlIiwiY3JlYXRlVGFsa0xpc3QiLCJyZXN1bHQiLCJsZW5ndGgiLCJ1c2VySWQiLCJVc2VyTGlzdCIsImNyZWF0ZVVzZXJMaXN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLCtDQUFyQixDQUEr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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBVCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUzs7Ozs7Ozs7Ozs7Q0FBVCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEscUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgcmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5wcm9wcy5mb290ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCByZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckxpc3QnO1xyXG5pbXBvcnQgVGFsa0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9UYWxrTGlzdCc7XHJcbmltcG9ydCB1c2VyTGlzdFN0eWxlIGZyb20gJy4uL3N0YXRpYy9Vc2VyTGlzdFN0eWxlJztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+L6YGU6L+95Yqg44Oa44O844K444G46YG356e7XHJcbiAgICBnbygpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2FkZF9mcmllbmRzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgaGVhZGVyPVwiSG9tZVwiIHRpdGxlPXt0aGlzLnByb3BzLnVzZXJfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7dXNlckxpc3RTdHlsZX1cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhZGRfZnJpZW5kc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nby5iaW5kKCl9PmFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImhvbWVcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGFiX2l0ZW1cIiBjaGVja2VkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFsa1wiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJfaXRlbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYl9jb250ZW50XCIgaWQ9XCJob21lX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYl9jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImMtdHh0c3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckxpc3QgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYl9jb250ZW50XCIgaWQ9XCJ0YWxrX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYl9jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImMtdHh0c3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFsa0xpc3QgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGFiX2l0ZW0gdGFiX2hvbWVcIiBmb3I9XCJob21lXCI+SG9tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGFiX2l0ZW0gdGFiX3RhbGtcIiBmb3I9XCJ0YWxrXCI+VGFsazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5Ib21lID0gY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShIb21lKTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdGF0aWMvU3R5bGUnO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAge3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBoZWFkZXI9e3RoaXMucHJvcHMuaGVhZGVyfSB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciBmb290ZXI9XCJjb3B5cmlnaHQgWVUtWUFNQS5cIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgVGFsa0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB0JyxcclxuICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJEYXRhOiBbXSxcclxuICAgICAgICAgICAgdGFsa0RhdGE6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj4vkurrjg4fjg7zjgr/lj5blvpdcclxuICAgIGdldFVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZiA9IGRiLnJlZignZnJpZW5kX2luZm8vMScpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNuYXBzaG90LnZhbCgpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHt0aGlzLmdldEFjdGl2ZVVzZXJMaXN0KCk7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Ki44Kv44OG44Kj44OW44Om44O844K244Gu44G/44OH44O844K/5Y+W5b6XXHJcbiAgICBnZXRBY3RpdmVVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgYWN0aXZlVXNlckxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWY7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhW2ldLmFjdGl2ZV9mbGFnID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZiA9IGRiLnJlZigndXNlcl9pbmZvLycgKyBpKTtcclxuICAgICAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmVVc2VyTGlzdDonICsgSlNPTi5zdHJpbmdpZnkoc25hcHNob3QudmFsKCkpKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJMaXN0LnB1c2goc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlckRhdGE6IGFjdGl2ZVVzZXJMaXN0XHJcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7dGhpcy5nZXRUYWxrTGlzdCgpfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4jjg7zjgq/jg6rjgrnjg4jlj5blvpdcclxuICAgIGdldFRhbGtMaXN0KCkge1xyXG4gICAgICAgIGxldCB0YWxrTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlZjtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIHJlZiA9IGRiLnJlZignbWVzc2FnZXMvMS8nICsgdGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YVtpXS51c2VyX2lkKTtcclxuICAgICAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5saW1pdFRvTGFzdCgxKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFsa0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9uYW1lOiB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLnVzZXJfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzW2pdLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fZmxhZzogcmVzW2pdLmZyb21fZmxhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZF9mbGFnOiByZXNbal0ucmVhZF9mbGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVfZGF0ZTogcmVzW2pdLmNyZWF0ZV9kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfZGF0ZTogcmVzW2pdLnVwZGF0ZV9kYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbGtEYXRhOiB0YWxrTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOihqOekuuOBmeOCi+ODiOODvOOCr+ODquOCueODiOOBrueUn+aIkFxyXG4gICAgY3JlYXRlVGFsa0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWxrRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudGFsa0RhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFs8dHIga2V5PVwiMFwiPjx0aD5OTyBEQVRBLjwvdGg+PC90cj5dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUudGFsa0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFsa0RhdGFbaV0gPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcclxuICAgICAgICAgICAgICAgIDx0ciBkYXRhLXRhZz17dGhpcy5zdGF0ZS50YWxrRGF0YVtpXS51c2VyX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ28uYmluZChudWxsLCB0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLnVzZXJfaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUudGFsa0RhdGFbaV0udXNlcl9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnRhbGtEYXRhW2ldLmNvbnRlbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Oa44O844K456e75YuV6Kit5a6aXHJcbiAgICBnbyh1c2VySWQpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3RhbGtfcm9vbT91c2VyX2lkPScgKyB1c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVRhbGtMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhbGtMaXN0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgVXNlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB0JyxcclxuICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJEYXRhOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+L5Lq644OH44O844K/5Y+W5b6XXHJcbiAgICBnZXRVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGxldCByZWYgPSBkYi5yZWYoJ2ZyaWVuZF9pbmZvLzEnKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmVmLm9yZGVyQnlLZXkoKS5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzbmFwc2hvdC52YWwoKVxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7dGhpcy5nZXRBY3RpdmVVc2VyTGlzdCgpO30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOOCouOCr+ODhuOCo+ODluODpuODvOOCtuOBruOBv+ODh+ODvOOCv+WPluW+l1xyXG4gICAgZ2V0QWN0aXZlVXNlckxpc3QoKSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZVVzZXJMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBsZXQgcmVmO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YVtpXS5hY3RpdmVfZmxhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVmID0gZGIucmVmKCd1c2VyX2luZm8vJyArIGkpO1xyXG4gICAgICAgICAgICByZWYub3JkZXJCeUtleSgpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VyTGlzdC5wdXNoKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXJEYXRhOiBhY3RpdmVVc2VyTGlzdFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDooajnpLrjgZnjgovjg6bjg7zjgrbjg6rjgrnjg4jjga7nlJ/miJBcclxuICAgIGNyZWF0ZVVzZXJMaXN0KCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVVc2VyRGF0YSA9PSBudWxsIHx8IHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFs8dHIga2V5PVwiMFwiPjx0aD5OTyBEQVRBLjwvdGg+PC90cj5dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGEpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goXHJcbiAgICAgICAgICAgICAgICA8dHIgZGF0YS10YWc9e3RoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9pZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ28uYmluZChudWxsLCB0aGlzLnN0YXRlLmFjdGl2ZVVzZXJEYXRhW2ldLnVzZXJfaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ1c2VyX2ltYWdlXCI+aW1hZ2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInVzZXJfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlVXNlckRhdGFbaV0udXNlcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOODmuODvOOCuOenu+WLleioreWumlxyXG4gICAgZ28odXNlcklkKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy90YWxrX3Jvb20/dXNlcl9pZD0nICsgdXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVVzZXJMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3Q7IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJMaXN0JztcclxuaW1wb3J0IFRhbGtMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVGFsa0xpc3QnO1xyXG5pbXBvcnQgdXNlckxpc3RTdHlsZSBmcm9tICcuLi9zdGF0aWMvVXNlckxpc3RTdHlsZSc7XHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgLy8gPExheW91dCBoZWFkZXI9XCJ7dGhpcy5wcm9wcy51c2VyX25hbWV9XCIgdGl0bGU9XCJob21lXCI+XHJcbiAgICAvLyAgICAge3VzZXJMaXN0U3R5bGV9XHJcbiAgICAvLyAgICAgPGRpdiBjbGFzcz1cInRhYnNcIj5cclxuICAgIC8vICAgICAgICAgPGlucHV0IGlkPVwiaG9tZVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJfaXRlbVwiIGNoZWNrZWQgLz5cclxuICAgIC8vICAgICAgICAgPGlucHV0IGlkPVwidGFsa1wiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0YWJfaXRlbVwiIC8+XHJcbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJfY29udGVudFwiIGlkPVwiaG9tZV9jb250ZW50XCI+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiX2NvbnRlbnRfZGVzY3JpcHRpb25cIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImMtdHh0c3BcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPFVzZXJMaXN0IC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwidGFiX2NvbnRlbnRcIiBpZD1cInRhbGtfY29udGVudFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYl9jb250ZW50X2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjLXR4dHNwXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxUYWxrTGlzdCAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGFiX2l0ZW0gdGFiX2hvbWVcIiBmb3I9XCJob21lXCI+SG9tZTwvbGFiZWw+XHJcbiAgICAvLyAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRhYl9pdGVtIHRhYl90YWxrXCIgZm9yPVwidGFsa1wiPlRhbGs8L2xhYmVsPlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gPC9MYXlvdXQ+XHJcbiAgICA8SG9tZSAvPlxyXG4pIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCA8c3R5bGU+e2BcclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDY0cHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC04cHg7XHJcbiAgICAgICAgY29sb3I6ICNERERERkY7XHJcbiAgICAgICAgbWFyZ2luOiAtMzJweCA1cHg7XHJcbiAgICB9XHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OUM7XHJcbiAgICAgICAgY29sb3I6ICM5OUM7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IDBweCAxMHB4IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogIzc3QTtcclxuICAgICAgICBtYXJnaW46IC01MHB4IDBweCA1MHB4IDBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuICAgIH1cclxuICAgICNtYWluIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMGh2O1xyXG4gICAgfVxyXG4gICAgLyog44K/44OW5YiH44KK5pu/44GI44K544K/44Kk44OrICovXHJcbiAgICAudGFicyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC50YWJfaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8yKTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM1QUI0QkQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM1NjU2NTY7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIH1cclxuICAgIC50YWJfaXRlbTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgIH1cclxuICAgIGlucHV0W25hbWU9XCJ0YWJfaXRlbVwiXSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50YWJfY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAvKiDpgbjmip7jgZXjgozjgabjgYTjgovjgr/jg5bjga7jgrPjg7Pjg4bjg7Pjg4Tjga7jgb/ooajnpLogKi9cclxuICAgICNob21lOmNoZWNrZWQgfiAjaG9tZV9jb250ZW50LFxyXG4gICAgI3RhbGs6Y2hlY2tlZCB+ICN0YWxrX2NvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLyog6YG45oqe44GV44KM44Gm44GE44KL44K/44OW44Gu44K544K/44Kk44Or44KS5aSJ44GI44KLICovXHJcbiAgICAjaG9tZTpjaGVja2VkIH4gLnRhYl9ob21lLFxyXG4gICAgI3RhbGs6Y2hlY2tlZCB+IC50YWJfdGFsayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVBQjRCRDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuYH08L3N0eWxlPiIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgPHN0eWxlPntgXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC51c2VyX2ltYWdlIHtcclxuXHJcbiAgICB9XHJcbiAgICAudXNlcl9uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbmB9PC9zdHlsZT4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=