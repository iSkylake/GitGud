/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Message = React.createClass({
	displayName: 'Message',

	render: function render() {
		var message = this.props.message;
		var dvaURL = this.props.imgURL;
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				message
			),
			React.createElement('img', { src: dvaURL })
		);
	}
});

var NameForm = React.createClass({
	displayName: 'NameForm',

	onClickSubmit: function onClickSubmit(e) {
		e.preventDefault();
		var name = this.refs.name.value;
		var dva = ['https://media.tenor.co/images/24812a0372945ba14a476a892453937d/tenor.gif', 'https://media.tenor.co/images/4e7ac035e879b3ca07da4392952fd351/tenor.gif', 'https://68.media.tumblr.com/5665e3485b01a0dd5beed011b1a5533d/tumblr_ocvwbzK2VG1r85zuto1_500.gif', 'http://vignette4.wikia.nocookie.net/rise-of-the-guardians-fanfiction/images/7/7e/Dva_WATCH_OUT.gif/revision/latest?cb=20160621030804', 'https://media.tenor.co/images/5e79d94073d51a9166067e851ba92b54/tenor.gif', 'https://s-media-cache-ak0.pinimg.com/originals/a7/84/43/a784436287112693dd934060a6121b81.gif', 'https://68.media.tumblr.com/a687c2f9b850ba7359ef2984344ee5d1/tumblr_o98gnhEnSd1spa1n7o1_500.gif', 'http://imgur.com/QgcJBxR.gif', 'https://s-media-cache-ak0.pinimg.com/originals/08/ef/37/08ef37808fc7faae49432ef6617bd4b6.gif'];
		if (name.length > 0) {
			this.refs.name.value = '';
			var i = Math.floor(Math.random() * dva.length);
			this.props.onHandleMessage(name, dva[i]);
		}
	},

	render: function render() {
		return React.createElement(
			'form',
			{ onSubmit: this.onClickSubmit },
			React.createElement('input', { type: 'text', ref: 'name', placeholder: 'Enter name' }),
			React.createElement(
				'button',
				null,
				'Submit'
			)
		);
	}
});

var Main = React.createClass({
	displayName: 'Main',

	getDefaultProps: function getDefaultProps() {
		return {
			message: 'Hey traveler!',
			imgURL: ''
		};
	},

	getInitialState: function getInitialState() {
		return {
			message: this.props.message,
			imgURL: this.props.imgURL
		};
	},

	handleMessage: function handleMessage(name, imgURL) {
		this.setState({
			message: name + ' GITGUD!',
			imgURL: imgURL
		});
	},

	render: function render() {
		var message = this.state.message;
		var imgURL = this.state.imgURL;
		return React.createElement(
			'div',
			null,
			React.createElement(Message, { message: message, imgURL: imgURL }),
			React.createElement(NameForm, { onHandleMessage: this.handleMessage })
		);
	}
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));

/***/ })
/******/ ]);