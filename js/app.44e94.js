/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "../node_modules/history/esm/history.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! connected-react-router */ "../node_modules/connected-react-router/esm/middleware.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! connected-react-router */ "../node_modules/connected-react-router/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./js/reducers.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./js/routes.js");
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/actions */ "./js/shared/actions.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.scss */ "./js/app.scss");











var history = (0,history__WEBPACK_IMPORTED_MODULE_7__.createHashHistory)();

function configureStore(preloadedState) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)((0,_reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(history), preloadedState, (0,redux__WEBPACK_IMPORTED_MODULE_8__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)((0,connected_react_router__WEBPACK_IMPORTED_MODULE_9__["default"])(history), redux_thunk__WEBPACK_IMPORTED_MODULE_10__["default"])));
}

var store = configureStore();
store.dispatch((0,_shared_actions__WEBPACK_IMPORTED_MODULE_5__.dailyQuote)());
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_11__.ConnectedRouter, {
  history: history
}, _routes__WEBPACK_IMPORTED_MODULE_4__["default"])), document.getElementById('root'));

/***/ }),

/***/ "./js/membership/actions.js":
/*!**********************************!*\
  !*** ./js/membership/actions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signin": () => (/* binding */ signin),
/* harmony export */   "signup": () => (/* binding */ signup),
/* harmony export */   "signout": () => (/* binding */ signout)
/* harmony export */ });
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "../node_modules/connected-react-router/esm/actions.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api */ "./js/membership/api/mock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./js/membership/constants.js");



var signin = function signin(credentials) {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_IN_REQUEST
    });
    return api__WEBPACK_IMPORTED_MODULE_0__["default"].signin(credentials).then(function (response) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_IN_SUCCESS,
        user: response
      });
      dispatch((0,connected_react_router__WEBPACK_IMPORTED_MODULE_2__.push)('/'));
    }, function (errors) {
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_IN_FAILURE,
        errors: errors
      });
    });
  };
};
var signup = function signup(model) {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_UP_REQUEST
    });
    return api__WEBPACK_IMPORTED_MODULE_0__["default"].signup(model).then(function (response) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_UP_SUCCESS,
        user: response
      });
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_IN_SUCCESS,
        user: response
      });
      dispatch((0,connected_react_router__WEBPACK_IMPORTED_MODULE_2__.push)('/'));
    }, function (errors) {
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_UP_FAILURE,
        errors: errors
      });
    });
  };
};
var signout = function signout() {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_OUT_REQUEST
    });
    return api__WEBPACK_IMPORTED_MODULE_0__["default"].signout().then(function () {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_OUT_SUCCESS
      });
      dispatch((0,connected_react_router__WEBPACK_IMPORTED_MODULE_2__.push)('/'));
    }, function (errors) {
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.SIGN_OUT_FAILURE,
        errors: errors
      });
    });
  };
};

/***/ }),

/***/ "./js/membership/api/mock.js":
/*!***********************************!*\
  !*** ./js/membership/api/mock.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/mock */ "./js/shared/mock.js");
/* harmony import */ var _samples_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samples.json */ "./js/membership/api/samples.json");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  signin: function signin(credentials) {
    var errors;

    if (!credentials || !credentials.username) {
      errors = {
        username: [_samples_json__WEBPACK_IMPORTED_MODULE_1__.errors.required]
      };
    }

    if (!credentials || !credentials.password) {
      errors = errors || {};
      errors.password = [_samples_json__WEBPACK_IMPORTED_MODULE_1__.errors.required];
    }

    if (errors) {
      return (0,_shared_mock__WEBPACK_IMPORTED_MODULE_0__.reject)(errors);
    }

    var u = (0,_shared_mock__WEBPACK_IMPORTED_MODULE_0__.first)(_samples_json__WEBPACK_IMPORTED_MODULE_1__.users, function (u) {
      return u.username === credentials.username && u.password === credentials.password;
    });

    if (!u) {
      return (0,_shared_mock__WEBPACK_IMPORTED_MODULE_0__.reject)({
        __ERROR__: [_samples_json__WEBPACK_IMPORTED_MODULE_1__.errors.signin]
      });
    }

    return (0,_shared_mock__WEBPACK_IMPORTED_MODULE_0__.resolve)({
      username: u.username
    });
  },
  signup: function signup() {
    return (0,_shared_mock__WEBPACK_IMPORTED_MODULE_0__.reject)({
      __ERROR__: [_samples_json__WEBPACK_IMPORTED_MODULE_1__.errors.unavailable]
    });
  },
  signout: _shared_mock__WEBPACK_IMPORTED_MODULE_0__.resolve
});

/***/ }),

/***/ "./js/membership/components/access-warn.js":
/*!*************************************************!*\
  !*** ./js/membership/components/access-warn.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");


var AccessWarn = function AccessWarn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "small"
  }, "This is a private system. Unauthorized access to or use of this system is strictly prohibited and tracked. By continuing, you acknowledge your awareness of and concurrence with the acceptable use policy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "small"
  }, "As you finish, you should sign out to protect yourself."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccessWarn);

/***/ }),

/***/ "./js/membership/components/auth-info.js":
/*!***********************************************!*\
  !*** ./js/membership/components/auth-info.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "../node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/NavLink.js");





var AuthInfo = function AuthInfo(_ref) {
  var user = _ref.user,
      show = _ref.show,
      onSignout = _ref.onSignout;

  if (!show) {
    return null;
  }

  if (!user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
      to: "/signin"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Sign in"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onSignout
  }, "Sign out");
};

AuthInfo.propTypes = {
  user: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  show: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  onSignout: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthInfo);

/***/ }),

/***/ "./js/membership/components/signin.js":
/*!********************************************!*\
  !*** ./js/membership/components/signin.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _shared_components_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/errors */ "./js/shared/components/errors.js");
/* harmony import */ var _shared_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/layout */ "./js/shared/components/layout.js");
/* harmony import */ var _shared_components_signup_well__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/signup-well */ "./js/shared/components/signup-well.js");
/* harmony import */ var _access_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-warn */ "./js/membership/components/access-warn.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var SignIn = /*#__PURE__*/function (_React$Component) {
  _inherits(SignIn, _React$Component);

  var _super = _createSuper(SignIn);

  function SignIn(props) {
    var _this;

    _classCallCheck(this, SignIn);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SignIn, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        errors: this.props.errors
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.onSubmit({
        username: this.username.value,
        password: this.password.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          pending = _this$props.pending,
          _this$props$errors = _this$props.errors,
          errors = _this$props$errors === void 0 ? {} : _this$props$errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sidebar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_signup_well__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Need an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        to: "/signup"
      }, "Sign up"), " free. Your opinions and comments would be greatly appreciated."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Summary, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        bg: "light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        autoComplete: "off",
        onSubmit: !pending ? this.handleSubmit : undefined
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: function ref(e) {
          return _this2.username = e;
        },
        placeholder: "Username",
        type: "text",
        required: true,
        isInvalid: !!errors.username
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Field, {
        name: "username"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: function ref(e) {
          return _this2.password = e;
        },
        placeholder: "Password",
        type: "password",
        required: true,
        isInvalid: !!errors.password
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Field, {
        name: "password"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        disabled: pending,
        type: "submit"
      }, "Sign In")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_access_warn__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

SignIn.propTypes = {
  pending: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
SignIn.childContextTypes = {
  errors: SignIn.propTypes.errors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);

/***/ }),

/***/ "./js/membership/components/signup.js":
/*!********************************************!*\
  !*** ./js/membership/components/signup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _shared_components_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/errors */ "./js/shared/components/errors.js");
/* harmony import */ var _shared_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/layout */ "./js/shared/components/layout.js");
/* harmony import */ var _shared_components_signin_well__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/signin-well */ "./js/shared/components/signin-well.js");
/* harmony import */ var _access_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-warn */ "./js/membership/components/access-warn.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var SignUp = /*#__PURE__*/function (_React$Component) {
  _inherits(SignUp, _React$Component);

  var _super = _createSuper(SignUp);

  function SignUp(props) {
    var _this;

    _classCallCheck(this, SignUp);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SignUp, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        errors: this.props.errors
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.onSubmit({
        'email': this.email.value,
        'username': this.username.value,
        'password': this.password.value,
        'confirm_password': this.confirmPassword.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$pending = this.props.pending,
          pending = _this$props$pending.pending,
          _this$props$pending$e = _this$props$pending.errors,
          errors = _this$props$pending$e === void 0 ? {} : _this$props$pending$e;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sidebar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_signin_well__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Already got an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        to: "/signin"
      }, "Sign in"), ", please."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Summary, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        bg: "light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        autoComplete: "off",
        onSubmit: !pending ? this.handleSubmit : undefined
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: function ref(e) {
          return _this2.email = e;
        },
        placeholder: "Email",
        type: "text",
        required: true,
        isInvalid: !!errors.email
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Field, {
        name: "email"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: function ref(e) {
          return _this2.username = e;
        },
        placeholder: "Username",
        type: "text",
        required: true,
        isInvalid: !!errors.username
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Field, {
        name: "username"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: function ref(e) {
          return _this2.password = e;
        },
        placeholder: "Password",
        type: "password",
        required: true,
        isInvalid: !!errors.apssword
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Field, {
        name: "password"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: function ref(e) {
          return _this2.confirmPassword = e;
        },
        placeholder: "Confirm Password",
        type: "confirm_password",
        required: true,
        isInvalid: !!errors.confirm_password
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Field, {
        name: "confirm_password"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
        disabled: pending,
        type: "submit"
      }, "Sign Up")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_access_warn__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

SignUp.propTypes = {
  pending: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool.isRequired),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired)
};
SignUp.childContextTypes = {
  errors: SignUp.propTypes.errors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./js/membership/constants.js":
/*!************************************!*\
  !*** ./js/membership/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SIGN_IN_REQUEST": () => (/* binding */ SIGN_IN_REQUEST),
/* harmony export */   "SIGN_IN_SUCCESS": () => (/* binding */ SIGN_IN_SUCCESS),
/* harmony export */   "SIGN_IN_FAILURE": () => (/* binding */ SIGN_IN_FAILURE),
/* harmony export */   "SIGN_UP_REQUEST": () => (/* binding */ SIGN_UP_REQUEST),
/* harmony export */   "SIGN_UP_SUCCESS": () => (/* binding */ SIGN_UP_SUCCESS),
/* harmony export */   "SIGN_UP_FAILURE": () => (/* binding */ SIGN_UP_FAILURE),
/* harmony export */   "SIGN_OUT_REQUEST": () => (/* binding */ SIGN_OUT_REQUEST),
/* harmony export */   "SIGN_OUT_SUCCESS": () => (/* binding */ SIGN_OUT_SUCCESS),
/* harmony export */   "SIGN_OUT_FAILURE": () => (/* binding */ SIGN_OUT_FAILURE)
/* harmony export */ });
var SIGN_IN_REQUEST = 'membership/SIGN_IN_REQUEST';
var SIGN_IN_SUCCESS = 'membership/SIGN_IN_SUCCESS';
var SIGN_IN_FAILURE = 'membership/SIGN_IN_FAILURE';
var SIGN_UP_REQUEST = 'membership/SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'membership/SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'membership/SIGN_UP_FAILURE';
var SIGN_OUT_REQUEST = 'membership/SIGN_OUT_REQUEST';
var SIGN_OUT_SUCCESS = 'membership/SIGN_OUT_SUCCESS';
var SIGN_OUT_FAILURE = 'membership/SIGN_OUT_FAILURE';

/***/ }),

/***/ "./js/membership/containers/auth-info.js":
/*!***********************************************!*\
  !*** ./js/membership/containers/auth-info.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./js/membership/actions.js");
/* harmony import */ var _components_auth_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/auth-info */ "./js/membership/components/auth-info.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    user: state.membership.auth.user,
    show: state.router.location.pathname.match(/^\/?signin$/) === null
  };
}, function (dispatch) {
  return {
    onSignout: function onSignout() {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.signout)());
    }
  };
})(_components_auth_info__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./js/membership/containers/signin.js":
/*!********************************************!*\
  !*** ./js/membership/containers/signin.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./js/membership/actions.js");
/* harmony import */ var _components_signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/signin */ "./js/membership/components/signin.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  var auth = state.membership.auth;
  return {
    pending: auth.pending,
    errors: auth.errors
  };
}, function (dispatch) {
  return {
    onSubmit: function onSubmit(m) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.signin)(m));
    }
  };
})(_components_signin__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./js/membership/containers/signup.js":
/*!********************************************!*\
  !*** ./js/membership/containers/signup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./js/membership/actions.js");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/signup */ "./js/membership/components/signup.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  var auth = state.membership.auth;
  return {
    pending: auth.pending,
    errors: auth.errors
  };
}, function (dispatch) {
  return {
    onSubmit: function onSubmit(m) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.signup)(m));
    }
  };
})(_components_signup__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./js/membership/reducers.js":
/*!***********************************!*\
  !*** ./js/membership/reducers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "../node_modules/connected-react-router/esm/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./js/membership/constants.js");



var initialAuthState = {
  pending: false,
  errors: {},
  user: null
};

var auth = function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialAuthState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case connected_react_router__WEBPACK_IMPORTED_MODULE_1__.LOCATION_CHANGE:
      return Object.assign({}, state, {
        errors: {}
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.SIGN_IN_REQUEST:
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SIGN_UP_REQUEST:
      return Object.assign({}, state, {
        pending: true
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.SIGN_IN_SUCCESS:
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SIGN_UP_SUCCESS:
      return Object.assign({}, {
        pending: false,
        errors: {},
        user: action.user
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.SIGN_IN_FAILURE:
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SIGN_UP_FAILURE:
      return Object.assign({}, {
        pending: false,
        errors: action.errors,
        user: null
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.SIGN_OUT_REQUEST:
      return Object.assign({}, initialAuthState);

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  auth: auth
}));

/***/ }),

/***/ "./js/posts/actions.js":
/*!*****************************!*\
  !*** ./js/posts/actions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchPosts": () => (/* binding */ searchPosts),
/* harmony export */   "getPost": () => (/* binding */ getPost),
/* harmony export */   "addComment": () => (/* binding */ addComment)
/* harmony export */ });
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "../node_modules/connected-react-router/esm/actions.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api */ "./js/posts/api/mock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./js/posts/constants.js");



var searchPosts = function searchPosts() {
  var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (dispatch, getState) {
    var state = getState();
    var posts = state.posts.posts;
    var location = {};
    var query = new URLSearchParams();

    if (q == '') {
      location.pathname = '/';
    } else {
      location.pathname = '/posts';
      query.set('q', q);
    }

    if (page > 0) {
      query.set('page', page);
    }

    location.search = query.toString();
    dispatch((0,connected_react_router__WEBPACK_IMPORTED_MODULE_2__.push)(location));

    if (posts.pending || posts.q == q && posts.page == page) {
      return null;
    }

    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.POSTS_REQUEST,
      q: q,
      page: page
    });
    return api__WEBPACK_IMPORTED_MODULE_0__["default"].searchPosts(q, page).then(function (respose) {
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.POSTS_SUCCESS,
        pager: respose
      });
    });
  };
};
var getPost = function getPost(slug) {
  return function (dispatch, getState) {
    var navigate = function navigate() {
      var pathname = '/post/' + slug;

      if (pathname !== getState().router.location.pathname) {
        dispatch((0,connected_react_router__WEBPACK_IMPORTED_MODULE_2__.push)(pathname));
      }
    };

    var post = getState().posts.post;

    if (post.pending || post.slug === slug) {
      navigate();
      return null;
    }

    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.POST_REQUEST,
      slug: slug
    });
    return api__WEBPACK_IMPORTED_MODULE_0__["default"].getPost(slug).then(function (respose) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.POST_SUCCESS,
        post: respose
      });
      navigate();
    });
  };
};
var addComment = function addComment(comment) {
  return function (dispatch) {
    if (!comment) {
      return null;
    }

    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.ADD_COMMENT_REQUEST,
      comment: comment
    });
    return api__WEBPACK_IMPORTED_MODULE_0__["default"].addComment(comment).then(function () {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.ADD_COMMENT_SUCCESS
      });
    });
  };
};

/***/ }),

/***/ "./js/posts/api/mock.js":
/*!******************************!*\
  !*** ./js/posts/api/mock.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/mock */ "./js/shared/mock.js");
/* harmony import */ var _samples_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samples.json */ "./js/posts/api/samples.json");
/* harmony import */ var _membership_api_samples_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../membership/api/samples.json */ "./js/membership/api/samples.json");




var findUserById = function findUserById(id) {
  return _shared_mock__WEBPACK_IMPORTED_MODULE_0__.first(_membership_api_samples_json__WEBPACK_IMPORTED_MODULE_2__.users, function (u) {
    return u.id === id;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  searchPosts: function searchPosts() {
    var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var posts = _samples_json__WEBPACK_IMPORTED_MODULE_1__.posts;

    if (q) {
      q = q.toLowerCase();
      posts = _shared_mock__WEBPACK_IMPORTED_MODULE_0__.nfilter(posts, (page + 1) * 2 + 1, function (p) {
        return p.title.toLowerCase().indexOf(q) > -1;
      });
    }

    return _shared_mock__WEBPACK_IMPORTED_MODULE_0__.resolve(_shared_mock__WEBPACK_IMPORTED_MODULE_0__.pager(posts, page, 2, function (p) {
      var a = findUserById(p.author_id);
      return {
        'slug': p.slug,
        'title': p.title,
        'author': {
          'first_name': a.first_name,
          'last_name': a.last_name
        },
        'created_on': p.created_on,
        'message': _shared_mock__WEBPACK_IMPORTED_MODULE_0__.trancateWords(p.message, 40)
      };
    }));
  },
  getPost: function getPost(slug) {
    var p = _shared_mock__WEBPACK_IMPORTED_MODULE_0__.first(_samples_json__WEBPACK_IMPORTED_MODULE_1__.posts, function (p) {
      return p.slug === slug;
    });

    if (!p) {
      return _shared_mock__WEBPACK_IMPORTED_MODULE_0__.reject();
    }

    var a = findUserById(p.author_id);
    return _shared_mock__WEBPACK_IMPORTED_MODULE_0__.resolve({
      'slug': p.slug,
      'title': p.title,
      'created_on': p.created_on,
      'author': {
        'first_name': a.first_name,
        'last_name': a.last_name
      },
      'message': p.message,
      'permissions': {
        'create_comment': p.permissions && p.permissions.create_comment
      },
      'comments': _samples_json__WEBPACK_IMPORTED_MODULE_1__.comments.filter(function (c) {
        return c.post_id === p.id;
      }).map(function (c) {
        var ca = findUserById(c.author_id);
        return {
          'author': {
            'first_name': ca.first_name,
            'last_name': ca.last_name,
            'gravatar_hash': ca.gravatar_hash
          },
          'created_on': c.created_on,
          'message': c.message,
          'moderated': c.moderated
        };
      })
    });
  },
  addComment: function addComment() {
    return _shared_mock__WEBPACK_IMPORTED_MODULE_0__.resolve();
  }
});

/***/ }),

/***/ "./js/posts/components/comment-item.js":
/*!*********************************************!*\
  !*** ./js/posts/components/comment-item.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_components_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/media */ "./js/shared/components/media.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils */ "./js/shared/utils.js");
/* harmony import */ var _comment_item_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-item.scss */ "./js/posts/components/comment-item.scss");






var CommentItem = function CommentItem(_ref) {
  var item = _ref.item;
  var gravatarUrl = 'http://www.gravatar.com/avatar/' + item.author.gravatar_hash + '?s=64&d=identicon';
  var heading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, item.author.first_name, " ", item.author.last_name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, (0,_shared_utils__WEBPACK_IMPORTED_MODULE_2__.formatDateOrTime)(item.created_on)));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_media__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: gravatarUrl,
    heading: heading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: !item.moderated ? 'text-dim' : null
  }, item.message));
};

CommentItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    'author': prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
      'gravatar_hash': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
      'first_name': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
      'last_name': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
    }),
    'created_on': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    'moderated': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    'message': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentItem);

/***/ }),

/***/ "./js/posts/components/comment-well.js":
/*!*********************************************!*\
  !*** ./js/posts/components/comment-well.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _shared_components_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/errors */ "./js/shared/components/errors.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var CommentWell = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentWell, _React$Component);

  var _super = _createSuper(CommentWell);

  function CommentWell(props) {
    var _this;

    _classCallCheck(this, CommentWell);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CommentWell, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        errors: this.props.errors
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      if (this.props.onSubmit) {
        var m = this.message.value.trim();

        if (m) {
          this.props.onSubmit(m);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          authenticated = _this$props.authenticated,
          permitted = _this$props.permitted;

      if (authenticated && !permitted) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          variant: "warning"
        }, "There are too many of your comments awaiting moderation. Come back later, please.");
      }

      if (!authenticated) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bg: "light"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Title, null, "Leave a Comment:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
          to: "/signin"
        }, "Sign in"), ", please. New comments are held for moderation.")));
      }

      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          errors = _this$props2.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Summary, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bg: "light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Title, null, "Leave a Comment:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        autoComplete: "off",
        onSubmit: !disabled ? this.handleSubmit : undefined
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        as: "textarea",
        rows: "3",
        disabled: disabled,
        ref: function ref(e) {
          return _this2.message = e;
        },
        isInvalid: !!errors.message
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_errors__WEBPACK_IMPORTED_MODULE_1__["default"].Field, {
        name: "message"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        disabled: disabled,
        type: "submit"
      }, "Submit")))));
    }
  }]);

  return CommentWell;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

CommentWell.propTypes = {
  authenticated: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  permitted: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
CommentWell.childContextTypes = {
  errors: CommentWell.propTypes.errors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentWell);

/***/ }),

/***/ "./js/posts/components/comments.js":
/*!*****************************************!*\
  !*** ./js/posts/components/comments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comment_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-item */ "./js/posts/components/comment-item.js");




var Comments = function Comments(_ref) {
  var items = _ref.items;

  if (!items || items.length === 0) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), items.map(function (p, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_comment_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      item: p
    });
  }));
};

Comments.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

/***/ }),

/***/ "./js/posts/components/post-item.js":
/*!******************************************!*\
  !*** ./js/posts/components/post-item.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils */ "./js/shared/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var PostItem = /*#__PURE__*/function (_React$Component) {
  _inherits(PostItem, _React$Component);

  var _super = _createSuper(PostItem);

  function PostItem(props) {
    var _this;

    _classCallCheck(this, PostItem);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostItem, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();

      if (this.props.onClick) {
        this.props.onClick(this.props.item.slug);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var p = this.props.item;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "",
        onClick: this.handleClick
      }, p.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "lead"
      }, "by ", p.author.first_name, " ", p.author.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-clock-o"
      }), " Posted ", (0,_shared_utils__WEBPACK_IMPORTED_MODULE_1__.formatDateOrTime)(p.created_on)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, p.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: this.handleClick
      }, "Read More ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-chevron-right"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null));
    }
  }]);

  return PostItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

PostItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    'slug': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    'title': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    'author': prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
      'first_name': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
      'last_name': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
    }),
    'created_on': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    'message': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostItem);

/***/ }),

/***/ "./js/posts/components/post.js":
/*!*************************************!*\
  !*** ./js/posts/components/post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/layout */ "./js/shared/components/layout.js");
/* harmony import */ var _shared_components_lead_break__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/lead-break */ "./js/shared/components/lead-break.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils */ "./js/shared/utils.js");
/* harmony import */ var _comment_well__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-well */ "./js/posts/components/comment-well.js");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments */ "./js/posts/components/comments.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Post = /*#__PURE__*/function (_React$Component) {
  _inherits(Post, _React$Component);

  var _super = _createSuper(Post);

  function Post(props) {
    _classCallCheck(this, Post);

    return _super.call(this, props);
  }

  _createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onGetPost) {
        this.props.onGetPost(this.props.match.params.slug);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pending = _this$props.pending,
          post = _this$props.post,
          authenticated = _this$props.authenticated,
          errors = _this$props.errors,
          onAddComment = _this$props.onAddComment;
      var permitted = post.permissions && post.permissions.create_comment;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "lead"
      }, "by ", post.author.first_name, " ", post.author.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-clock-o"
      }), " Posted ", (0,_shared_utils__WEBPACK_IMPORTED_MODULE_3__.formatDateOrTime)(post.created_on)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_lead_break__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: post.message
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_comment_well__WEBPACK_IMPORTED_MODULE_4__["default"], {
        authenticated: authenticated,
        permitted: permitted,
        disabled: pending,
        errors: errors,
        onSubmit: onAddComment
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_comments__WEBPACK_IMPORTED_MODULE_5__["default"], {
        items: post.comments
      }));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Post.propTypes = {
  pending: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  post: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    'title': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    'author': prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      'first_name': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
      'last_name': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
    }),
    'created_on': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    'message': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    'permissions': prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      'create_comment': (prop_types__WEBPACK_IMPORTED_MODULE_6___default().boolean)
    }),
    'comments': prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object))
  }),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  authenticated: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  match: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      slug: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
    })
  }),
  onGetPost: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onAddComment: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./js/posts/components/posts.js":
/*!**************************************!*\
  !*** ./js/posts/components/posts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/layout */ "./js/shared/components/layout.js");
/* harmony import */ var _shared_components_signup_well__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/signup-well */ "./js/shared/components/signup-well.js");
/* harmony import */ var _shared_components_paging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/paging */ "./js/shared/components/paging.js");
/* harmony import */ var _search_posts_well__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-posts-well */ "./js/posts/components/search-posts-well.js");
/* harmony import */ var _post_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-item */ "./js/posts/components/post-item.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Posts = /*#__PURE__*/function (_React$Component) {
  _inherits(Posts, _React$Component);

  var _super = _createSuper(Posts);

  function Posts(props) {
    _classCallCheck(this, Posts);

    return _super.call(this, props);
  }

  _createClass(Posts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onSearch = this.props.onSearch;

      if (onSearch) {
        var state = this.props.location.state;

        if (!state) {
          onSearch('', 0);
        } else {
          var _state$q = state.q,
              q = _state$q === void 0 ? '' : _state$q,
              _state$page = state.page,
              page = _state$page === void 0 ? 0 : _state$page;
          onSearch(q, parseInt(page));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          q = _this$props.q,
          pending = _this$props.pending,
          pager = _this$props.pager,
          user = _this$props.user,
          onSearch = _this$props.onSearch,
          onItem = _this$props.onItem;
      var sidebar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search_posts_well__WEBPACK_IMPORTED_MODULE_4__["default"], {
        q: q,
        pending: pending,
        onSubmit: onSearch
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_signup_well__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: user
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        sidebar: sidebar
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Keep It Simple ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, "Welcome")), pager.items.map(function (p, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_post_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: i,
          item: p,
          onClick: onItem
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_paging__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pending: pending,
        paging: pager.paging,
        onSelect: function onSelect(page) {
          return onSearch(q, page);
        }
      }));
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Posts.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    state: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      q: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
      page: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
    })
  }),
  q: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  pending: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool.isRequired),
  pager: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    items: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
    paging: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      before: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
      after: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)
    })
  }),
  user: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  onSearch: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onItem: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ }),

/***/ "./js/posts/components/search-posts-well.js":
/*!**************************************************!*\
  !*** ./js/posts/components/search-posts-well.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Button.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SearchPostsWell = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchPostsWell, _React$Component);

  var _super = _createSuper(SearchPostsWell);

  function SearchPostsWell(props) {
    var _this;

    _classCallCheck(this, SearchPostsWell);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchPostsWell, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      if (this.props.onSubmit) {
        var q = this.q.value.trim();

        if (q) {
          this.props.onSubmit(q);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          q = _this$props.q,
          pending = _this$props.pending;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        bg: "light",
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, "Blog Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        defaultValue: q,
        ref: function ref(e) {
          return _this2.q = e;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disabled: pending,
        variant: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-search"
      }))))));
    }
  }]);

  return SearchPostsWell;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

SearchPostsWell.propTypes = {
  q: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  pending: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPostsWell);

/***/ }),

/***/ "./js/posts/constants.js":
/*!*******************************!*\
  !*** ./js/posts/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POSTS_REQUEST": () => (/* binding */ POSTS_REQUEST),
/* harmony export */   "POSTS_SUCCESS": () => (/* binding */ POSTS_SUCCESS),
/* harmony export */   "POSTS_FAILURE": () => (/* binding */ POSTS_FAILURE),
/* harmony export */   "POST_REQUEST": () => (/* binding */ POST_REQUEST),
/* harmony export */   "POST_SUCCESS": () => (/* binding */ POST_SUCCESS),
/* harmony export */   "POST_FAILURE": () => (/* binding */ POST_FAILURE),
/* harmony export */   "ADD_COMMENT_REQUEST": () => (/* binding */ ADD_COMMENT_REQUEST),
/* harmony export */   "ADD_COMMENT_SUCCESS": () => (/* binding */ ADD_COMMENT_SUCCESS),
/* harmony export */   "ADD_COMMENT_FAILURE": () => (/* binding */ ADD_COMMENT_FAILURE)
/* harmony export */ });
var POSTS_REQUEST = 'posts/POSTS_REQUEST';
var POSTS_SUCCESS = 'posts/POSTS_SUCCESS';
var POSTS_FAILURE = 'posts/POSTS_FAILURE';
var POST_REQUEST = 'posts/POST_REQUEST';
var POST_SUCCESS = 'posts/POST_SUCCESS';
var POST_FAILURE = 'posts/POST_FAILURE';
var ADD_COMMENT_REQUEST = 'posts/ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'posts/ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'posts/ADD_COMMENT_FAILURE';

/***/ }),

/***/ "./js/posts/containers/post.js":
/*!*************************************!*\
  !*** ./js/posts/containers/post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./js/posts/actions.js");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post */ "./js/posts/components/post.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  var post = state.posts.post;
  return {
    pending: post.pending,
    post: post.post,
    errors: post.errors,
    authenticated: !!state.membership.auth.user
  };
}, function (dispatch) {
  return {
    onGetPost: function onGetPost(slug) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getPost)(slug));
    },
    onAddComment: function onAddComment(message) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.addComment)(message));
    }
  };
})(_components_post__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./js/posts/containers/posts.js":
/*!**************************************!*\
  !*** ./js/posts/containers/posts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./js/posts/actions.js");
/* harmony import */ var _components_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/posts */ "./js/posts/components/posts.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  var posts = state.posts.posts;
  return {
    q: posts.q,
    pending: posts.pending,
    pager: posts.pager,
    user: state.membership.auth.user
  };
}, function (dispatch) {
  return {
    onSearch: function onSearch(q, page) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.searchPosts)(q, page));
    },
    onItem: function onItem(slug) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getPost)(slug));
    }
  };
})(_components_posts__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./js/posts/reducers.js":
/*!******************************!*\
  !*** ./js/posts/reducers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./js/posts/constants.js");


var initialPostsState = {
  q: null,
  page: 0,
  pending: false,
  pager: {
    items: []
  }
};

var posts = function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPostsState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.POSTS_REQUEST:
      return Object.assign({}, state, {
        pending: true,
        q: action.q,
        page: action.page
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.POSTS_SUCCESS:
      return Object.assign({}, state, {
        pending: false,
        pager: action.pager
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.POSTS_FAILURE:
      return Object.assign({}, state, {
        pending: false
      });

    default:
      return state;
  }
};

var initialPostState = {
  pending: false,
  slug: null,
  post: {
    author: {},
    permissions: {}
  },
  errors: {}
};

var post = function post() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPostState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.POST_REQUEST:
      return Object.assign({}, state, initialPostState, {
        pending: true,
        slug: action.slug
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.POST_SUCCESS:
      return Object.assign({}, state, {
        pending: false,
        post: action.post
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.POST_FAILURE:
      return Object.assign({}, state, {
        pending: false
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.ADD_COMMENT_REQUEST:
      return Object.assign({}, state, {
        pending: true
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.ADD_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        pending: false
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.ADD_COMMENT_FAILURE:
      return Object.assign({}, state, {
        pending: false
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  posts: posts,
  post: post
}));

/***/ }),

/***/ "./js/reducers.js":
/*!************************!*\
  !*** ./js/reducers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "../node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _membership_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./membership/reducers */ "./js/membership/reducers.js");
/* harmony import */ var _posts_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/reducers */ "./js/posts/reducers.js");
/* harmony import */ var _shared_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/reducers */ "./js/shared/reducers.js");






var createRootReducer = function createRootReducer(history) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
    router: (0,connected_react_router__WEBPACK_IMPORTED_MODULE_4__.connectRouter)(history),
    membership: _membership_reducers__WEBPACK_IMPORTED_MODULE_0__["default"],
    posts: _posts_reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
    shared: _shared_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRootReducer);

/***/ }),

/***/ "./js/routes.js":
/*!**********************!*\
  !*** ./js/routes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _membership_containers_auth_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./membership/containers/auth-info */ "./js/membership/containers/auth-info.js");
/* harmony import */ var _shared_components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/footer */ "./js/shared/components/footer.js");
/* harmony import */ var _shared_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/header */ "./js/shared/components/header.js");
/* harmony import */ var _posts_containers_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/containers/posts */ "./js/posts/containers/posts.js");
/* harmony import */ var _posts_containers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/containers/post */ "./js/posts/containers/post.js");
/* harmony import */ var _membership_containers_signin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./membership/containers/signin */ "./js/membership/containers/signin.js");
/* harmony import */ var _membership_containers_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./membership/containers/signup */ "./js/membership/containers/signup.js");











var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_membership_containers_auth_info__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__.Route, {
    exact: true,
    path: "/",
    component: _posts_containers_posts__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__.Route, {
    exact: true,
    path: "/posts",
    component: _posts_containers_posts__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__.Route, {
    exact: true,
    path: "/post/:slug",
    component: _posts_containers_post__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__.Route, {
    exact: true,
    path: "/signin",
    component: _membership_containers_signin__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__.Route, {
    exact: true,
    path: "/signup",
    component: _membership_containers_signup__WEBPACK_IMPORTED_MODULE_7__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__.Route, {
  path: "/",
  component: App
}));

/***/ }),

/***/ "./js/shared/actions.js":
/*!******************************!*\
  !*** ./js/shared/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dailyQuote": () => (/* binding */ dailyQuote)
/* harmony export */ });
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api */ "./js/shared/api/mock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./js/shared/constants.js");


var dailyQuote = function dailyQuote() {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.DAILY_QUOTE_REQUEST
    });
    return api__WEBPACK_IMPORTED_MODULE_0__["default"].dailyQuote().then(function (respose) {
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__.DAILY_QUOTE_SUCCESS,
        quote: respose
      });
    });
  };
};

/***/ }),

/***/ "./js/shared/api/mock.js":
/*!*******************************!*\
  !*** ./js/shared/api/mock.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock */ "./js/shared/mock.js");
/* harmony import */ var _samples_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samples.json */ "./js/shared/api/samples.json");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  dailyQuote: function dailyQuote() {
    return (0,_mock__WEBPACK_IMPORTED_MODULE_0__.resolve)(_samples_json__WEBPACK_IMPORTED_MODULE_1__.quote);
  }
});

/***/ }),

/***/ "./js/shared/components/errors-field.js":
/*!**********************************************!*\
  !*** ./js/shared/components/errors-field.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ErrorsField = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorsField, _React$Component);

  var _super = _createSuper(ErrorsField);

  function ErrorsField() {
    _classCallCheck(this, ErrorsField);

    return _super.apply(this, arguments);
  }

  _createClass(ErrorsField, [{
    key: "render",
    value: function render() {
      var errors = this.props.errors || this.context.errors;

      if (!errors) {
        return null;
      }

      errors = errors[this.props.name];

      if (!errors) {
        return null;
      }

      if (Array.isArray(errors)) {
        errors = errors[errors.length - 1];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "invalid-feedback"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-exclamation"
      }), " ", errors);
    }
  }]);

  return ErrorsField;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ErrorsField.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
ErrorsField.contextTypes = {
  errors: ErrorsField.propTypes.errors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorsField);

/***/ }),

/***/ "./js/shared/components/errors-summary.js":
/*!************************************************!*\
  !*** ./js/shared/components/errors-summary.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ErrorsSummary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorsSummary, _React$Component);

  var _super = _createSuper(ErrorsSummary);

  function ErrorsSummary() {
    _classCallCheck(this, ErrorsSummary);

    return _super.apply(this, arguments);
  }

  _createClass(ErrorsSummary, [{
    key: "render",
    value: function render() {
      var errors = this.props.errors || this.context.errors;

      if (!errors) {
        return null;
      }

      errors = errors.__ERROR__;

      if (!errors) {
        return null;
      }

      if (Array.isArray(errors)) {
        errors = errors[errors.length - 1];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "danger"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "fa fa-exclamation-circle"
      }), " ", errors);
    }
  }]);

  return ErrorsSummary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ErrorsSummary.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    __ERROR__: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string))])
  })
};
ErrorsSummary.contextTypes = {
  errors: ErrorsSummary.propTypes.errors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorsSummary);

/***/ }),

/***/ "./js/shared/components/errors.js":
/*!****************************************!*\
  !*** ./js/shared/components/errors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errors_summary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors-summary */ "./js/shared/components/errors-summary.js");
/* harmony import */ var _errors_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors-field */ "./js/shared/components/errors-field.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Summary: _errors_summary__WEBPACK_IMPORTED_MODULE_0__["default"],
  Field: _errors_field__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./js/shared/components/footer.js":
/*!****************************************!*\
  !*** ./js/shared/components/footer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./js/shared/components/footer.scss");



var year = new Date().getFullYear();

var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lg: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "small"
  }, "Copyright \xA9 Keep It Simple Blog ", year))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./js/shared/components/header.js":
/*!****************************************!*\
  !*** ./js/shared/components/header.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "../node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/NavbarBrand.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Nav.js");





var Header = function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bg: "dark",
    variant: "dark",
    expand: "md",
    fixed: "top",
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Keep It Simple Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Toggle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Collapse, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "me-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Link, null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
    disabled: true
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, children)));
};

Header.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./js/shared/components/layout.js":
/*!****************************************!*\
  !*** ./js/shared/components/layout.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _containers_quote_well__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/quote-well */ "./js/shared/containers/quote-well.js");





var Layout = function Layout(_ref) {
  var children = _ref.children,
      sidebar = _ref.sidebar;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", null, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", null, sidebar, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_quote_well__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
};

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  sidebar: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./js/shared/components/lead-break.js":
/*!********************************************!*\
  !*** ./js/shared/components/lead-break.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LeadBreak = function LeadBreak(_ref) {
  var text = _ref.text;

  if (!text) {
    return null;
  }

  var p = text.split('\\n\\n');
  var r = [];
  r.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    key: "0",
    className: "lead"
  }, p[0]));

  for (var i = 1; i < p.length; i++) {
    r.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      key: i
    }, p[i]));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, r);
};

LeadBreak.propTypes = {
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeadBreak);

/***/ }),

/***/ "./js/shared/components/media.js":
/*!***************************************!*\
  !*** ./js/shared/components/media.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Media = function Media(_ref) {
  var src = _ref.src,
      heading = _ref.heading,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "me-3",
    src: src
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mt-0"
  }, heading), children));
};

Media.propTypes = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);

/***/ }),

/***/ "./js/shared/components/paging.js":
/*!****************************************!*\
  !*** ./js/shared/components/paging.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Pagination.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Col.js");




var Paging = function Paging(_ref) {
  var pending = _ref.pending,
      paging = _ref.paging,
      onSelect = _ref.onSelect;
  var newer;
  var older;

  if (!paging) {
    return null;
  }

  if (paging.before !== undefined) {
    newer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSelect: onSelect
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Prev, {
      disabled: pending,
      onClick: function onClick() {
        return onSelect(paging.before);
      }
    }, "\u2190 Newer"));
  }

  if (paging.after !== undefined) {
    older = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "justify-content-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      disabled: pending,
      onClick: function onClick() {
        return onSelect(paging.after);
      }
    }, "Older \u2192"));
  }

  if (!newer && !older) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, newer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, older));
};

Paging.propTypes = {
  pending: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  paging: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    before: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    after: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  }),
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
Paging.defaultProps = {
  pending: false,
  paging: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paging);

/***/ }),

/***/ "./js/shared/components/quote-well.js":
/*!********************************************!*\
  !*** ./js/shared/components/quote-well.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Card.js");




var QuoteWell = function QuoteWell(_ref) {
  var quote = _ref.quote;

  if (!quote) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bg: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, "Quote of the Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("q", null, quote.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, " \u2014 ", quote.author))));
};

QuoteWell.propTypes = {
  quote: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    author: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteWell);

/***/ }),

/***/ "./js/shared/components/signin-well.js":
/*!*********************************************!*\
  !*** ./js/shared/components/signin-well.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Card.js");





var SignInWell = function SignInWell(_ref) {
  var user = _ref.user;

  if (user) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bg: "light",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, "Got account already?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/signin"
  }, "Sign in"), ", please. Your opinions and comments would be greatly appreciated.")));
};

SignInWell.propTypes = {
  user: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInWell);

/***/ }),

/***/ "./js/shared/components/signup-well.js":
/*!*********************************************!*\
  !*** ./js/shared/components/signup-well.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Card.js");





var SignUpWell = function SignUpWell(_ref) {
  var user = _ref.user;

  if (user) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bg: "light",
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, "Need an account?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/signup"
  }, "Sign up"), " free.")));
};

SignUpWell.propTypes = {
  user: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpWell);

/***/ }),

/***/ "./js/shared/constants.js":
/*!********************************!*\
  !*** ./js/shared/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAILY_QUOTE_REQUEST": () => (/* binding */ DAILY_QUOTE_REQUEST),
/* harmony export */   "DAILY_QUOTE_SUCCESS": () => (/* binding */ DAILY_QUOTE_SUCCESS),
/* harmony export */   "DAILY_QUOTE_FAILURE": () => (/* binding */ DAILY_QUOTE_FAILURE)
/* harmony export */ });
var DAILY_QUOTE_REQUEST = 'shared/DAILY_QUOTE_REQUEST';
var DAILY_QUOTE_SUCCESS = 'shared/DAILY_QUOTE_SUCCESS';
var DAILY_QUOTE_FAILURE = 'shared/DAILY_QUOTE_FAILURE';

/***/ }),

/***/ "./js/shared/containers/quote-well.js":
/*!********************************************!*\
  !*** ./js/shared/containers/quote-well.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_quote_well__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/quote-well */ "./js/shared/components/quote-well.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (state) {
  return {
    quote: state.shared.quote
  };
})(_components_quote_well__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./js/shared/mock.js":
/*!***************************!*\
  !*** ./js/shared/mock.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "reject": () => (/* binding */ reject),
/* harmony export */   "trancateWords": () => (/* binding */ trancateWords),
/* harmony export */   "first": () => (/* binding */ first),
/* harmony export */   "nfilter": () => (/* binding */ nfilter),
/* harmony export */   "pager": () => (/* binding */ pager)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var resolve = function resolve(r, timeout) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(r);
    }, timeout || 100);
  });
};
var reject = function reject(r, timeout) {
  return new Promise(function (resolve, reject) {
    return setTimeout(function () {
      return reject(r);
    }, timeout || 100);
  });
};
var trancateWords = function trancateWords(s, count) {
  s = s.split(/\s|\\n/).slice(0, count);

  if (s.length === count) {
    s.push('...');
  }

  return s.join(' ');
};
var first = function first(items, predicate) {
  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var d = _step.value;

      if (predicate(d)) {
        return d;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
};
var nfilter = function nfilter(items, n, predicate) {
  var r = [];

  var _iterator2 = _createForOfIteratorHelper(items),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var d = _step2.value;

      if (predicate(d)) {
        r.push(d);
        n -= 1;

        if (!n) {
          break;
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return r;
};
var pager = function pager(items, page, size, f) {
  var start = page * size;
  var end = start + size;
  var paging = {};
  var r = [];

  if (page > 0) {
    paging.before = page - 1;
  }

  if (end < items.length) {
    paging.after = page + 1;
  } else {
    end = items.length;
  }

  for (var i = start; i < end; i++) {
    r.push(f(items[i]));
  }

  return {
    paging: paging,
    items: r
  };
};

/***/ }),

/***/ "./js/shared/reducers.js":
/*!*******************************!*\
  !*** ./js/shared/reducers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./js/shared/constants.js");



var quote = function quote() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.DAILY_QUOTE_SUCCESS:
      return Object.assign({}, state, action.quote);

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  quote: quote
}));

/***/ }),

/***/ "./js/shared/utils.js":
/*!****************************!*\
  !*** ./js/shared/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDateOrTime": () => (/* binding */ formatDateOrTime)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "../node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "../node_modules/date-fns/esm/differenceInDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "../node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "../node_modules/date-fns/esm/format/index.js");

var formatDateOrTime = function formatDateOrTime(d) {
  if (!d) {
    return '';
  }

  d = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(d);
  var now = new Date();

  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(d, now) >= -3) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(d, now, {
      addSuffix: true
    });
  }

  return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(d, '\'on\' MMMM dd, yyyy \'at\' hh:mm a');
};

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./js/app.scss":
/*!************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./js/app.scss ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding-top: 70px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n", "",{"version":3,"sources":["webpack://./js/app.scss"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["body {\r\n  padding-top: 70px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./js/posts/components/comment-item.scss":
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./js/posts/components/comment-item.scss ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\np.text-dim {\r\n    color: #CCC;\r\n    font-style: italic;\r\n}", "",{"version":3,"sources":["webpack://./js/posts/components/comment-item.scss"],"names":[],"mappings":";AACA;IACI,WAAW;IACX,kBAAkB;AACtB","sourcesContent":["\r\np.text-dim {\r\n    color: #CCC;\r\n    font-style: italic;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./js/shared/components/footer.scss":
/*!*********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./js/shared/components/footer.scss ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\r\n    margin: 50px 0;\r\n}", "",{"version":3,"sources":["webpack://./js/shared/components/footer.scss"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB","sourcesContent":["footer {\r\n    margin: 50px 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./js/app.scss":
/*!*********************!*\
  !*** ./js/app.scss ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./app.scss */ "../node_modules/css-loader/dist/cjs.js!./js/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./js/posts/components/comment-item.scss":
/*!***********************************************!*\
  !*** ./js/posts/components/comment-item.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_comment_item_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./comment-item.scss */ "../node_modules/css-loader/dist/cjs.js!./js/posts/components/comment-item.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_comment_item_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_comment_item_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_comment_item_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_comment_item_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./js/shared/components/footer.scss":
/*!******************************************!*\
  !*** ./js/shared/components/footer.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./footer.scss */ "../node_modules/css-loader/dist/cjs.js!./js/shared/components/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./js/membership/api/samples.json":
/*!****************************************!*\
  !*** ./js/membership/api/samples.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"users":[{"first_name":"Max","id":1,"last_name":"Johnson","password":"password","username":"demo","gravatar_hash":"7dea3df23e3bfa7fdfd264b1aa5fd34e"},{"first_name":"John","id":2,"last_name":"Smith","password":"password","username":"js","gravatar_hash":"5b22c1ef381b0e09b04caba808342899"},{"first_name":"Sophia","id":3,"last_name":"Williams","password":"password","username":"sw","gravatar_hash":"00706ee319199d25e5b926e156cceda5"}],"errors":{"required":"Required field can not be left bank.","unavailable":"This feature is not available yet.","signin":"The username or password provided is incorrect."}}');

/***/ }),

/***/ "./js/posts/api/samples.json":
/*!***********************************!*\
  !*** ./js/posts/api/samples.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"comments":[{"author_id":2,"created_on":"2015-09-08T02:42:50.553578+00:00","id":8,"message":"possimus repellat quia culpa ipsam illum beatae reiciendis amet","moderated":false,"post_id":7},{"author_id":2,"created_on":"2015-09-08T02:18:50.555378+00:00","id":11,"message":"quo vel quam id totam repellat expedita saepe provident blanditiis","moderated":true,"post_id":2},{"author_id":3,"created_on":"2015-09-08T02:01:50.56151+00:00","id":13,"message":"corporis aut in aliquam qui quas cumque veniam earum est","moderated":false,"post_id":7},{"author_id":1,"created_on":"2015-09-08T01:23:50.549318+00:00","id":6,"message":"tempora inventore deserunt pariatur possimus a cum","moderated":true,"post_id":10},{"author_id":2,"created_on":"2015-09-08T00:29:50.556302+00:00","id":12,"message":"voluptatum quisquam velit maxime sapiente omnis explicabo quod a voluptatibus","moderated":false,"post_id":10},{"author_id":1,"created_on":"2015-09-08T00:29:50.545132+00:00","id":1,"message":"eos quo saepe temporibus aliquam quas nostrum sed natus tempore","moderated":false,"post_id":7},{"author_id":3,"created_on":"2015-09-07T23:58:50.563567+00:00","id":17,"message":"officiis facilis molestiae voluptate","moderated":true,"post_id":2},{"author_id":1,"created_on":"2015-09-07T23:57:50.547574+00:00","id":3,"message":"repellat delectus totam asperiores sit quas tempore doloribus dicta error","moderated":true,"post_id":2},{"author_id":3,"created_on":"2015-09-07T23:46:50.56446+00:00","id":18,"message":"dolor odio suscipit dolorum quasi ratione molestias officia aliquam","moderated":true,"post_id":10},{"author_id":1,"created_on":"2015-09-07T22:47:50.547727+00:00","id":4,"message":"totam dolor quod delectus","moderated":false,"post_id":2},{"author_id":2,"created_on":"2015-09-07T21:14:50.553737+00:00","id":9,"message":"non quidem fuga architecto doloribus nesciunt voluptas tempora quaerat","moderated":false,"post_id":7},{"author_id":3,"created_on":"2015-09-07T20:17:50.561668+00:00","id":14,"message":"at cumque totam aperiam quas ullam illum","moderated":false,"post_id":7},{"author_id":1,"created_on":"2015-09-07T19:14:50.549459+00:00","id":7,"message":"officia corrupti nemo vitae laborum","moderated":true,"post_id":10},{"author_id":1,"created_on":"2015-09-07T17:55:50.54529+00:00","id":2,"message":"neque aspernatur quae id possimus itaque temporibus qui","moderated":false,"post_id":7},{"author_id":3,"created_on":"2015-09-07T17:15:50.56461+00:00","id":19,"message":"ad vitae neque ut explicabo dolorum accusantium itaque","moderated":true,"post_id":10},{"author_id":3,"created_on":"2015-09-07T15:58:50.561806+00:00","id":15,"message":"incidunt aspernatur error quisquam atque","moderated":true,"post_id":7},{"author_id":1,"created_on":"2015-09-07T15:13:50.547875+00:00","id":5,"message":"iste perferendis dolorem optio rerum unde doloribus eveniet deserunt enim","moderated":true,"post_id":2},{"author_id":3,"created_on":"2015-09-07T14:18:50.564758+00:00","id":20,"message":"perferendis voluptatibus eveniet quasi omnis in ex dolor voluptatem illum","moderated":true,"post_id":10},{"author_id":2,"created_on":"2015-09-07T13:29:50.553884+00:00","id":10,"message":"quos at ducimus deleniti maxime error facere facilis corporis ad","moderated":true,"post_id":7},{"author_id":3,"created_on":"2015-09-07T06:18:50.564926+00:00","id":21,"message":"alias cupiditate exercitationem dignissimos","moderated":false,"post_id":10},{"author_id":3,"created_on":"2015-09-07T04:26:50.561951+00:00","id":16,"message":"debitis accusantium qui corrupti commodi molestias quisquam dignissimos nemo","moderated":false,"post_id":7}],"posts":[{"author_id":2,"created_on":"2015-09-07T10:51:50.512214+00:00","id":7,"message":"Accusamus excepturi perspiciatis consequatur enim incidunt adipisci rerum eos hic asperiores unde aliquid corrupti praesentium quibusdam ipsum doloribus consectetur assumenda officiis explicabo voluptatem.\\\\n\\\\nUnde tempora consequuntur temporibus perferendis aperiam minima, quas enim vitae labore est amet cum officia et, molestiae accusantium nisi nostrum odit iure eaque doloremque beatae.\\\\n\\\\nOdit fugiat odio reiciendis adipisci itaque accusantium, id cum obcaecati tempore eius maiores repellendus voluptatibus sunt, atque excepturi eius ut, expedita consectetur labore placeat nam laudantium quasi quaerat hic, hic minus voluptas iure modi ipsa officia eius quos sapiente quibusdam repellat? Officia blanditiis modi, praesentium ipsam tempora et quaerat voluptate nesciunt autem sequi error illo provident, reprehenderit consequatur impedit earum quisquam? Fugit tenetur inventore quae autem, cum fuga sint, iure maiores a tenetur minima incidunt obcaecati sunt alias praesentium nesciunt, provident inventore enim animi at reprehenderit alias sunt. Laborum assumenda illum distinctio ratione, cupiditate laborum praesentium reiciendis magnam atque.\\\\n\\\\nAdipisci quod doloribus recusandae eius veniam magnam eaque, voluptas facilis laudantium tenetur dicta laboriosam maiores beatae veritatis consequuntur earum, nemo ullam perferendis aliquam at fugit esse suscipit corporis eius vero. Eius porro ad, optio itaque in animi quos officia? Libero maxime suscipit, optio illo fuga repellendus architecto consectetur. Possimus quisquam tempore eveniet minima earum maiores dolore ducimus magnam voluptate, fugiat odio eos?","slug":"inventore-hic-voluptatem","title":"Inventore Hic Voluptatem","permissions":{"create_comment":true}},{"author_id":1,"created_on":"2015-09-06T15:44:50.50097+00:00","id":2,"message":"Perspiciatis autem a ipsum optio veniam cumque recusandae magnam aperiam iusto veritatis iure doloribus assumenda reiciendis odit maiores blanditiis quisquam possimus.\\\\n\\\\nPerspiciatis ratione incidunt perferendis optio veniam eum, accusamus quae praesentium exercitationem voluptatibus voluptas sequi quam et est dolores, asperiores similique quos autem officia architecto repellendus, sequi blanditiis autem laudantium sapiente voluptatibus molestiae. Eveniet possimus iusto aliquid veritatis sunt, delectus ad impedit consequatur quod. Incidunt possimus ab mollitia, dolores amet hic illo?\\\\n\\\\nAsperiores rem non quae incidunt dolore rerum. Reprehenderit animi rem eos repellat veniam doloremque cupiditate exercitationem porro maiores asperiores, a vero neque at deleniti facere, atque fugiat obcaecati voluptas dolorem architecto maiores?\\\\n\\\\nCulpa neque officiis commodi aspernatur molestiae laudantium dolorum explicabo eveniet ipsum est? Incidunt excepturi optio suscipit reprehenderit, necessitatibus dolorem quos repudiandae est omnis quas obcaecati, dicta dolorum magnam itaque nam incidunt quo similique laudantium eligendi repudiandae doloribus, officia maxime voluptate quo velit ab cupiditate fugiat ratione esse animi commodi. Necessitatibus quaerat aut quo quasi magnam molestias dicta enim temporibus sequi, numquam itaque voluptatem tempora non nostrum laudantium aspernatur. Sint sapiente inventore?\\\\n\\\\nIpsum exercitationem provident earum itaque excepturi quasi libero nisi accusamus sequi, modi odio unde quas distinctio fugit, assumenda porro necessitatibus. Aspernatur velit tenetur officiis aut ipsa deserunt numquam suscipit. Ad ullam nesciunt maiores voluptatem atque aliquid nisi aut, dicta alias aut natus quos aliquid, odio accusantium quisquam ea magnam fuga eaque libero? Minima ea a deleniti possimus dolores deserunt nam repellat, quidem autem ex iure ad porro blanditiis exercitationem magni molestias, amet ipsam sequi nobis, atque vitae magnam nulla id eius delectus est?","slug":"qui-odit-rerum","title":"Qui Odit Rerum"},{"author_id":3,"created_on":"2015-09-06T13:00:50.521572+00:00","id":10,"message":"Eligendi neque officiis repellat aliquam sed corrupti alias earum ipsa dolorum impedit sint non enim quaerat a totam delectus hic.\\\\n\\\\nOfficiis natus excepturi eveniet quia iure fugit veritatis quos illo alias labore, magni dolorem nobis blanditiis vel sapiente dignissimos, reprehenderit culpa distinctio quasi consectetur vitae iste nihil atque enim, fuga voluptatibus doloremque animi consequatur dolor, iste inventore pariatur. Nulla tenetur amet modi saepe harum quia suscipit. Ratione nam voluptates recusandae autem aperiam rerum quia dolorum magni molestias distinctio.\\\\n\\\\nSuscipit illo itaque reiciendis ullam quidem magnam, nihil distinctio natus provident similique delectus tenetur numquam laborum adipisci, quod quia minus qui nemo repellat quos amet debitis ea rerum obcaecati? Facilis beatae nesciunt nobis impedit laudantium, ad recusandae perferendis minima tenetur doloremque molestias ducimus saepe fugit enim modi, excepturi doloremque voluptatum necessitatibus non molestias deserunt, corrupti excepturi saepe modi quia quibusdam sint. Itaque quo illum accusantium labore modi exercitationem delectus deleniti molestias, nam temporibus eos ex aspernatur quo consequuntur ea velit accusamus et officiis? Illum doloribus ex ducimus dolore, tenetur porro aliquam explicabo, voluptate praesentium exercitationem voluptatibus?\\\\n\\\\nIncidunt unde eveniet optio officiis atque nulla odit, laborum asperiores ut iusto rem debitis quasi consequatur dignissimos, quaerat ipsa excepturi aspernatur quos facilis asperiores ea placeat eum, ex assumenda architecto? Numquam recusandae quidem consequuntur autem natus tenetur minus at nesciunt atque id, quam laudantium voluptatum error harum nesciunt rerum nemo a amet voluptas unde, modi repellat eaque laborum voluptates cupiditate hic consequatur alias iste esse ipsam, tempora quidem repellat sequi placeat autem beatae? Voluptatum eligendi tempora blanditiis deleniti reprehenderit ducimus laborum alias, distinctio praesentium nam nesciunt ut, quasi voluptatum sit ipsa veniam? Ea atque quisquam neque itaque architecto dicta modi consequuntur distinctio autem cupiditate, delectus dolor accusantium quasi tempora omnis ratione voluptatum eveniet pariatur, deserunt fuga sequi libero, eveniet harum voluptate aspernatur ab optio libero, dicta ad qui eos atque facere ducimus voluptatum?\\\\n\\\\nDicta fugiat esse odit ullam, maiores dolores nemo iste voluptatum, delectus harum laboriosam dolores blanditiis esse similique totam natus nam quidem, mollitia quae eos cum provident facilis rerum? Hic et autem veniam error. Sint ipsum porro quibusdam minus officiis nostrum labore atque minima reiciendis veniam, minus officia recusandae ut assumenda quia odio neque nemo nostrum aperiam quis?\\\\n\\\\nSuscipit fuga enim. Error eligendi quod veritatis voluptatibus incidunt ratione illum iste laborum dicta est? Est unde velit totam quidem quo perspiciatis officiis atque amet, corrupti fuga eum sit eligendi?\\\\n\\\\nIn pariatur minus corporis expedita dolore eligendi enim, eaque sequi cumque non tempora eius voluptatibus distinctio aliquam laborum? Praesentium dicta repellendus placeat eaque culpa magnam adipisci, assumenda consequuntur atque quia veritatis, quo sequi ullam praesentium exercitationem provident cumque quas beatae temporibus optio voluptatem, delectus doloribus eius tenetur.","slug":"neque-totam-aliquam-laborum","title":"Neque Totam Aliquam Laborum","permissions":{"create_comment":true}},{"author_id":1,"created_on":"2015-09-06T08:11:50.499957+00:00","id":1,"message":"Harum ab praesentium nihil mollitia aliquam ut officiis iste quos laborum quam commodi temporibus enim tenetur iusto odit dolorum magnam sit corporis inventore dolor assumenda rem.\\\\n\\\\nSit voluptatem dignissimos nostrum vitae saepe eligendi, possimus labore at suscipit corrupti doloremque reprehenderit rerum dicta illo delectus, iste reprehenderit quis saepe iusto vero quaerat porro obcaecati illo animi, nemo obcaecati voluptatibus corrupti quae enim doloribus in molestias, eos cum tempore animi voluptas nobis accusantium quae laudantium dolorem?\\\\n\\\\nQuod necessitatibus facere fugiat eveniet, sint corrupti odit consequatur dolor praesentium natus assumenda quidem dolorem id necessitatibus, commodi sit aspernatur sunt asperiores eveniet quasi esse porro dolor id non? Magni rem nulla libero fugit dolorum nam magnam soluta iure autem?\\\\n\\\\nSit dolorem obcaecati sed corporis doloremque eos fuga minus error iure, voluptatum soluta perspiciatis neque error voluptates, molestiae amet quibusdam officia ad nemo quia ipsa, praesentium libero necessitatibus expedita doloremque sapiente ab illum. Animi exercitationem eum excepturi aliquam voluptatem neque laborum facere numquam? Ab laboriosam omnis? Nobis velit aut iste quia sapiente odit dolorum, nemo vel deserunt odit excepturi rerum dicta eaque facilis cumque unde repudiandae, at quod eum animi veritatis maiores soluta culpa libero odio deleniti odit?","slug":"libero-obcaecati-provident-ducimus","title":"Libero Obcaecati Provident Ducimus","permissions":{"create_comment":true}},{"author_id":3,"created_on":"2015-09-06T06:51:50.525553+00:00","id":13,"message":"Praesentium necessitatibus nisi quos numquam inventore dicta mollitia ratione nobis voluptate quis labore maiores autem pariatur placeat at voluptatem unde error harum rerum sapiente quod deleniti ducimus.\\\\n\\\\nTemporibus quo impedit facere ipsa reiciendis beatae consequatur, sapiente nesciunt nobis laudantium libero consequuntur nihil? Accusamus hic provident iure quibusdam quidem magnam, necessitatibus facere saepe quasi laborum eveniet atque debitis officia maiores expedita, iusto id veniam repudiandae veritatis nemo delectus ipsum ut doloribus, asperiores ipsa tenetur dolor beatae est quam illum corporis, aperiam repellendus autem vel quaerat vero quisquam cupiditate? Velit ratione sit ducimus ullam reiciendis eos, nisi repellat ipsum, nemo architecto deleniti?\\\\n\\\\nEsse dolorum culpa rem dignissimos porro corrupti ipsum eveniet nisi vero voluptatibus, atque similique eius repellat vel, cupiditate maxime eos beatae eveniet fuga odio, magnam mollitia a labore? Quis repellat dolore ad, at nam ut natus. Modi rerum dolorem ipsum neque unde hic doloremque tempore, nulla corporis magni animi quasi, dolorem enim culpa quasi ab quos, ipsa itaque voluptas architecto quam suscipit in officia error eligendi perspiciatis officiis, iusto ex ad non mollitia.\\\\n\\\\nAspernatur esse debitis optio vero iste corrupti impedit earum beatae, quis architecto ducimus quia expedita fuga facere quae debitis cupiditate, laborum molestias deleniti iste. Laborum saepe a harum sit soluta, et tempore culpa alias officia nihil magnam id hic natus in cumque, quam nam et voluptate at.\\\\n\\\\nPlaceat quos fuga, natus officia qui aliquid animi ut eos iusto reprehenderit cupiditate consequuntur est, voluptate at fugiat atque, maxime est voluptates reiciendis nostrum molestias at, provident totam numquam. Officiis sunt aspernatur non eligendi, laudantium quia officiis fuga voluptates nostrum vel. Aut rerum deserunt repudiandae cupiditate unde porro inventore aperiam dignissimos nesciunt?\\\\n\\\\nQuidem exercitationem quaerat placeat nisi repellendus quis voluptatum, corporis iste voluptatum quod, maxime quia exercitationem. Animi omnis aspernatur, enim laborum nesciunt velit adipisci eos obcaecati nam necessitatibus debitis assumenda, itaque aliquam ipsa minima nihil, libero dolorem id repudiandae commodi officia quasi. Repudiandae cum possimus nihil rerum consequatur facere et sequi, recusandae dolorem quaerat distinctio ad.\\\\n\\\\nQuo saepe corporis iste suscipit voluptas. Ipsa dolorum soluta inventore totam voluptas placeat dignissimos eveniet, in velit cumque molestias dolorum reprehenderit perspiciatis, maxime omnis totam vero magnam voluptatem, culpa quo totam nemo mollitia nam ad fugiat vero, doloribus ad voluptatem omnis?","slug":"error-suscipit-quibusdam","title":"Error Suscipit Quibusdam"},{"author_id":2,"created_on":"2015-09-06T00:11:50.511376+00:00","id":6,"message":"Facere quos eum omnis dicta exercitationem nobis esse ducimus laborum ratione culpa illo laudantium corporis sed vero architecto dolores quaerat quibusdam distinctio itaque.\\\\n\\\\nVel commodi repudiandae ducimus nihil harum iure. Quasi iusto rerum, in accusamus consequuntur molestiae adipisci dolor, incidunt dolore nihil deleniti debitis repudiandae minus molestias modi explicabo non animi, aut quis expedita quidem molestiae nostrum corporis reiciendis harum natus? Eligendi doloremque commodi sapiente quam omnis illum accusamus deleniti natus, deleniti optio odio aliquam debitis aperiam velit, officia dicta suscipit? Nihil distinctio magnam, tenetur at eos quod inventore et necessitatibus illum officia accusantium est dolorum.\\\\n\\\\nQuam porro libero exercitationem perferendis reprehenderit nemo, saepe soluta consequatur perspiciatis reprehenderit dolore perferendis culpa minus neque ducimus, inventore cupiditate soluta vitae iusto nobis nemo similique, impedit voluptas doloremque iure minima facere cupiditate architecto? Inventore id aut minima eos provident maxime, ex deserunt commodi voluptates, reprehenderit rem illum vero assumenda blanditiis inventore, modi veritatis quam numquam iusto atque repellendus ipsam, molestias est non deserunt voluptates vitae deleniti? Odit dolorem at magni quisquam, odio facilis perferendis? Sequi repellat officiis consequuntur, tempora aspernatur quibusdam est consectetur sit itaque officiis, molestiae reiciendis harum.\\\\n\\\\nArchitecto cupiditate iste reprehenderit nobis rem nostrum maxime distinctio provident autem, nihil distinctio iusto illum totam a illo facilis odio voluptas ad est? Distinctio maiores beatae nemo laborum minima reprehenderit itaque ab facilis, ducimus quisquam recusandae neque, nam vero dolor iusto corporis ad. Voluptates delectus illo, quae quam quia, sit quis amet officia eos deleniti quidem quia neque libero pariatur.\\\\n\\\\nAdipisci illo eos inventore ab commodi in aperiam veritatis tempore asperiores culpa, odit sed placeat laudantium eligendi aut aliquid necessitatibus, voluptatibus labore eveniet corporis error incidunt vitae tempore repellat, eligendi iusto dolorem architecto asperiores velit aut laboriosam, omnis eveniet repudiandae? Quo non totam error autem. Esse commodi ullam minus, tenetur obcaecati laudantium dolores illum voluptatum quas soluta nulla doloremque asperiores rem, ex cupiditate esse officiis eaque laudantium similique dolore quasi perferendis, ad repellendus esse aliquam asperiores impedit fugit perspiciatis et.\\\\n\\\\nFuga laudantium consequuntur sed esse voluptas repudiandae saepe possimus enim, error voluptatum tenetur ad voluptate dolorum ut earum doloribus reprehenderit nobis, excepturi quo perferendis consectetur dolorem nostrum placeat voluptatem vitae sapiente, accusantium minus impedit excepturi aut debitis, quia pariatur voluptate aliquid ipsa a maiores magni molestiae? Tenetur fugit eum cupiditate, laudantium officia cumque aliquid blanditiis ut molestiae dignissimos animi obcaecati cum, labore ea sunt minima officiis quidem recusandae nesciunt minus nemo adipisci at? Illo laudantium ducimus, asperiores eum amet a iure velit totam sequi nemo id suscipit, reprehenderit laboriosam sit harum architecto iusto dicta minima hic, dolores ut corrupti blanditiis veniam accusamus qui.\\\\n\\\\nFuga minima illo quas nulla laborum tempore rem modi alias aut, aliquam eligendi enim ad veniam sint molestias assumenda dolores aspernatur, laudantium nobis dolores repudiandae animi explicabo accusamus placeat a molestiae?","slug":"adipisci-quia-dolorem-rerum","title":"Adipisci Quia Dolorem Rerum"},{"author_id":1,"created_on":"2015-09-05T20:06:50.504463+00:00","id":5,"message":"Tempore quas dolore ut modi quod incidunt magnam beatae omnis necessitatibus mollitia nostrum totam voluptate rerum vitae sunt ullam rem voluptatibus et a doloremque eum voluptatem neque similique provident placeat.\\\\n\\\\nA explicabo in eum quae exercitationem adipisci unde sunt, temporibus non fugiat reprehenderit doloribus aperiam quos sunt nulla nam beatae. Minima dolorum voluptatum ea, minima dolorem ab hic placeat aperiam, aut eius facere maxime.\\\\n\\\\nMagnam nisi blanditiis obcaecati.\\\\n\\\\nRem vel unde quae harum quibusdam illum animi eaque repellendus, sequi ipsum obcaecati dolore libero dolores placeat eveniet, ut inventore iste enim, nisi ea recusandae autem unde dolores repellendus corporis fugit, perspiciatis illo tempora aspernatur officia recusandae.\\\\n\\\\nDucimus eaque officia unde architecto alias sapiente dolor earum quis blanditiis soluta, iure exercitationem deserunt eos nesciunt? Repudiandae quisquam perspiciatis accusantium illum est cumque pariatur aspernatur repellat?\\\\n\\\\nMinus veritatis illum sapiente iusto, modi debitis beatae voluptate, quam tempore commodi id veritatis enim repellat? Aliquid incidunt illo eum cum ad iure dolor nostrum non iste, possimus facilis ad aliquid unde. Magnam sapiente consectetur voluptas cupiditate omnis nobis maxime at mollitia saepe, ipsa sint delectus blanditiis dicta deleniti, nisi fuga sit natus animi enim cupiditate, quidem numquam corrupti, architecto dignissimos amet suscipit voluptatum?","slug":"libero-mollitia-deleniti-nulla","title":"Libero Mollitia Deleniti Nulla"},{"author_id":3,"created_on":"2015-09-04T18:49:50.522501+00:00","id":11,"message":"Inventore odio consequuntur aliquid alias eligendi veritatis iste qui fugiat vitae beatae rem ipsa est ex velit consequatur quisquam laboriosam laudantium perferendis.\\\\n\\\\nNeque suscipit a dolorum deserunt asperiores quod perspiciatis pariatur explicabo nisi, ipsam delectus ad mollitia tempore cupiditate pariatur sequi quis aut officiis? Alias reprehenderit officiis qui molestias et iure quam provident porro dignissimos magni, ex sequi dolore, labore reiciendis qui consequatur quos fugit fugiat reprehenderit ipsum, dolorum architecto sequi aliquid repellat libero ducimus, doloremque error cum quos autem saepe delectus facere iusto. Corrupti perspiciatis molestias laborum officiis ullam aut voluptatum ad pariatur recusandae ea, facilis rerum dicta aliquam voluptas, tempora obcaecati fuga hic delectus iure?\\\\n\\\\nVoluptas praesentium magni laboriosam blanditiis, enim totam perferendis impedit eligendi modi exercitationem mollitia culpa, eos perferendis aliquam quo molestias at iure velit consequatur quae, labore repudiandae eos facere hic suscipit harum voluptatum magnam totam?\\\\n\\\\nDolore quisquam soluta esse numquam veritatis vitae officia sit explicabo quam velit, blanditiis officia labore sunt facere perspiciatis doloribus, tempore adipisci sit quidem sint neque aliquid.\\\\n\\\\nFacilis nemo ullam fuga eaque eum quisquam, ea amet maxime expedita in quisquam distinctio nobis perferendis earum.\\\\n\\\\nAsperiores doloribus quisquam odit a magnam non ut tenetur, quaerat tempore dolor numquam earum libero laboriosam odio, illum neque sequi rem tempore cum ea dolor animi dolorum vel asperiores?","slug":"dolore-ipsa-commodi-voluptatibus","title":"Dolore Ipsa Commodi Voluptatibus"},{"author_id":1,"created_on":"2015-09-04T17:58:50.503646+00:00","id":4,"message":"Voluptate modi possimus optio neque esse iusto sapiente cum illum quidem dolor assumenda voluptatibus quod expedita quasi beatae enim nesciunt.\\\\n\\\\nHarum eius voluptatem nobis inventore atque voluptatibus molestiae dolores fugit, voluptates tempora expedita quod officiis aperiam molestiae porro commodi eos nam temporibus, ducimus aliquid iste, officia libero exercitationem tempora cupiditate inventore cum laudantium, provident maxime distinctio fugiat quas repudiandae tempore? Repellat aperiam beatae et omnis minus error ea ipsam quaerat, fugiat iure ipsam laborum quia ipsum nisi iusto itaque ullam dolores. Quas laborum eius, voluptatem est tempore veritatis labore cupiditate, consequatur voluptate atque beatae labore iste harum expedita excepturi distinctio, reiciendis tempore necessitatibus veniam doloribus cumque quam dignissimos suscipit veritatis blanditiis doloremque.\\\\n\\\\nExpedita placeat molestiae, culpa ad repellat voluptate? Aliquam corporis nostrum dignissimos ab. Incidunt neque nihil assumenda consequatur voluptas perspiciatis, omnis ea quas itaque, sequi non iste animi voluptates odit voluptatum impedit blanditiis sapiente quis dolorem. Temporibus cum quasi quisquam fugiat hic soluta libero nisi enim?\\\\n\\\\nRepudiandae assumenda corrupti velit suscipit nobis accusantium officiis labore eum, excepturi ratione officiis. Nihil reiciendis voluptatibus nesciunt aut harum omnis earum veritatis perferendis cupiditate eligendi, illum voluptatem saepe qui corrupti officiis perferendis accusantium doloribus itaque voluptate omnis, ratione eius rerum maiores temporibus esse ad itaque praesentium corrupti accusamus. Excepturi numquam laboriosam cupiditate atque natus quod ratione cumque, error delectus facere, libero quam ex. Laboriosam deleniti perferendis aperiam assumenda ut in, debitis adipisci voluptate similique perferendis soluta numquam in necessitatibus consequuntur ducimus?\\\\n\\\\nQuis aperiam iure cumque itaque recusandae animi mollitia ea, obcaecati dolorem repudiandae doloribus explicabo nulla cum eius porro ratione unde veritatis? Tenetur similique eos doloribus maiores necessitatibus ad exercitationem veritatis numquam deserunt, a tenetur sunt maiores. Numquam quam voluptatibus inventore voluptates sint amet quisquam sapiente, atque excepturi quos magni omnis assumenda, quia eveniet eaque iure asperiores, commodi nam beatae veniam doloremque vel est natus.","slug":"quibusdam-cum-eaque-alias","title":"Quibusdam Cum Eaque Alias"},{"author_id":2,"created_on":"2015-09-04T15:35:50.513134+00:00","id":8,"message":"Nam corporis molestias aperiam ipsum accusamus esse praesentium nulla magni dolor fugit minus vel possimus in unde voluptatibus soluta recusandae.\\\\n\\\\nPlaceat vero deserunt ex libero, quo ducimus molestias eum delectus in quas saepe, doloremque dolorem voluptatibus distinctio sequi quia eum amet deserunt tenetur doloribus suscipit, dolore ipsa suscipit facilis esse tempore placeat ullam culpa, illo culpa iusto? Error voluptates quibusdam enim odit dolor culpa explicabo nostrum. Cum consequatur fugit? Asperiores ipsam voluptate modi, dignissimos dolorum totam iste repudiandae consequatur optio molestias explicabo illum dicta atque, nemo pariatur recusandae corrupti suscipit non laborum commodi eos quaerat blanditiis.\\\\n\\\\nTotam architecto quas fugit consectetur perferendis suscipit velit, cupiditate a soluta, qui repellat fugiat culpa illo aspernatur odio magni consectetur? Fuga a quibusdam odio reprehenderit blanditiis excepturi earum rerum nihil enim animi, delectus eaque facilis rerum et voluptate sit, est ipsum laborum autem aut delectus, consequuntur inventore dolor praesentium numquam sed itaque non at quas nesciunt illum?\\\\n\\\\nLaboriosam magni et, praesentium nisi doloribus reprehenderit sequi dicta, est aut iste placeat sapiente laudantium? Et id eius facere tempora dolor quam aperiam cupiditate, odit consequuntur tempora, cupiditate optio vero iusto quae earum ex unde. Consectetur autem facere ex vitae sint voluptatem vero sapiente, nihil laboriosam dicta sed similique asperiores vel modi ex, eos ipsum maiores qui saepe optio autem, cupiditate eveniet fugit excepturi aliquam error tempora sint vitae autem molestias, a dolor aliquam atque?","slug":"quibusdam-non-architecto-ut","title":"Quibusdam Non Architecto Ut"},{"author_id":1,"created_on":"2015-09-03T03:31:50.502499+00:00","id":3,"message":"Beatae quaerat illum nisi soluta sed qui officia quod exercitationem sequi maxime dicta voluptates placeat deleniti asperiores tenetur at voluptatum ab dolor itaque facilis minima.\\\\n\\\\nAliquam voluptatum repellat eos, nobis ratione molestias iste? Quaerat explicabo sapiente vel atque reprehenderit ea ipsa delectus quam nulla ex, laborum totam consectetur? Nostrum explicabo tempore numquam beatae, molestias quisquam minus omnis accusamus provident iure nam corporis qui eos repellat, quisquam laboriosam maxime vero inventore ad rem reprehenderit mollitia praesentium facilis in, illum adipisci mollitia esse ipsam iure vitae dolore alias assumenda, cum odit officia suscipit unde quaerat dignissimos ab commodi?\\\\n\\\\nMinus quibusdam ut adipisci cumque rerum aut, amet corrupti repellat, velit eveniet unde facilis reprehenderit sed laudantium minima? Rerum eveniet debitis dolore animi a reprehenderit eligendi, dolorum culpa fugit eaque quo quisquam numquam ratione vitae architecto, vitae iusto beatae totam facere minima corrupti odio, illo pariatur harum fuga aliquam voluptatem ad alias totam? Soluta repudiandae autem officiis voluptates exercitationem doloribus libero debitis, pariatur reprehenderit minima veniam ad ipsam eum minus, fugiat animi harum omnis inventore illum voluptatum architecto, asperiores saepe sit inventore vero dolore animi cum natus, doloribus aut accusantium nostrum in?\\\\n\\\\nVoluptate aperiam id earum, accusamus a voluptatum necessitatibus cum sit ipsum aliquid, quam totam ea aut incidunt repellendus nobis modi, ullam enim quas odio laborum pariatur, doloribus velit voluptates sapiente illum illo nam suscipit ullam. Possimus voluptatibus est qui magni consequuntur id quod, voluptates a deleniti error dolorem rerum corrupti saepe illum ad ea, ut explicabo accusantium reiciendis quaerat, similique voluptates voluptate. A sed recusandae facilis modi assumenda dicta dolor rem. Omnis fugit ut placeat in corporis, vel ducimus qui?","slug":"facere-consequuntur-expedita-animi","title":"Facere Consequuntur Expedita Animi"},{"author_id":3,"created_on":"2015-09-01T21:18:50.523714+00:00","id":12,"message":"Voluptas nihil distinctio eveniet culpa a quibusdam error vel sint cumque vero neque dolore quas autem asperiores ex molestias maxime nulla quod ullam consequatur debitis odit numquam deserunt.\\\\n\\\\nQui dolore obcaecati cumque voluptates perspiciatis tempore voluptatibus dicta suscipit minima perferendis, asperiores iusto aspernatur voluptatum, nisi tempora exercitationem officia veniam porro quibusdam voluptatum, repellendus repellat voluptas in facere eius ab? Corporis rem veritatis, inventore quos aut dicta omnis, excepturi earum consectetur quas suscipit pariatur accusamus molestiae.\\\\n\\\\nPorro ipsa pariatur nisi facere obcaecati eos molestias, aliquid natus libero vel similique delectus fuga explicabo, voluptatibus non fuga unde perferendis eaque earum dolores? Non iste veritatis quam, architecto est suscipit, quis consequatur iure rerum illo consequuntur voluptate adipisci est mollitia, omnis repellendus iusto officiis.\\\\n\\\\nImpedit placeat nihil fugit doloremque atque error tempore, culpa fuga tempora sequi eligendi laborum, dignissimos amet maiores ipsum reprehenderit enim porro eos ut deserunt aut. Ducimus libero laboriosam, sit quae ab repellat animi. Fuga porro amet repellat magni labore autem incidunt, alias possimus eos soluta consequatur, corporis deleniti reiciendis repudiandae maiores optio facere ratione, ipsa earum laudantium facilis, tenetur nesciunt aperiam quis nulla voluptatum culpa. Placeat eius earum neque consequuntur, corrupti molestias veritatis ipsam enim incidunt dolores sunt autem cum, iste repudiandae dignissimos cum laboriosam, iste expedita nesciunt.\\\\n\\\\nModi iste placeat minima autem aliquam facilis dicta atque quisquam eius, debitis minima quae repellat temporibus, quo at impedit atque consequuntur eligendi labore accusantium molestiae nisi necessitatibus consectetur, quidem laborum excepturi maiores ex nemo, deserunt illum aspernatur eligendi harum minima id aliquam consectetur maxime aut dolorum? Officia nihil unde earum quibusdam sit ad.\\\\n\\\\nEnim nulla consequatur vitae distinctio a alias quo beatae atque voluptatum sint, harum voluptates dolorem dignissimos molestiae suscipit et cumque, illum iure non accusamus totam cupiditate odio unde doloribus cumque? Nulla consequuntur officiis provident maiores natus expedita. Possimus atque labore est delectus laborum, porro dolorem laudantium excepturi nesciunt molestias quas?","slug":"cupiditate-asperiores-ducimus","title":"Cupiditate Asperiores Ducimus"},{"author_id":2,"created_on":"2015-08-30T15:31:50.514255+00:00","id":9,"message":"Fugiat doloremque facere at est ullam delectus inventore quos officiis ex molestias quas ipsum officia blanditiis et iure cupiditate natus dolorum.\\\\n\\\\nFugit repellendus ducimus perspiciatis iure, pariatur saepe culpa laboriosam cupiditate inventore consequuntur maxime nemo, nobis soluta cum iure ab velit, maiores quaerat quis quas fugiat inventore impedit esse dolorem eveniet accusantium voluptas, corporis neque officia doloribus dolorum modi omnis natus voluptate ipsa. Libero nostrum voluptatum nulla similique optio sunt consequuntur, omnis in aliquam dicta ducimus quo unde, iste praesentium cum magni debitis unde corporis quas perspiciatis aliquid consectetur odit.\\\\n\\\\nNecessitatibus modi nulla eos quod cum deleniti ipsa. Dolor obcaecati accusamus exercitationem, exercitationem inventore tempora nam reiciendis excepturi quis velit nostrum, voluptates in magnam expedita voluptatibus.\\\\n\\\\nPlaceat vel ea eaque impedit tempora odio temporibus doloremque. Nam aliquid quibusdam voluptates itaque quisquam quas at, quam similique officiis fugiat cupiditate ea placeat debitis voluptas eius dignissimos, numquam quia et fuga debitis at amet nobis dolor aliquid. Possimus sequi ipsa accusamus esse soluta tempore voluptatem totam est voluptas, nam excepturi vel eum voluptates reiciendis, corporis reprehenderit iusto numquam minima repudiandae iure eius modi? Aspernatur similique dignissimos, omnis vero laboriosam deleniti, culpa ut maiores beatae quia, ex corrupti est repellat repellendus, laborum quasi ex eos unde rerum autem veniam.\\\\n\\\\nQuod cum rerum consequuntur sint laboriosam itaque id, in perspiciatis facere quae, excepturi architecto alias quisquam, laborum fuga voluptatum sed molestias nihil?\\\\n\\\\nDistinctio ea eligendi fuga modi tempora id fugit ex veritatis nobis, praesentium quisquam suscipit. Blanditiis magnam cumque aliquam, magnam rerum blanditiis quis accusantium iusto cumque praesentium quasi sint tempora provident. Ullam blanditiis quo odit, dolor impedit qui nulla praesentium incidunt deserunt nihil, corporis tenetur expedita blanditiis modi voluptatum quisquam recusandae repellat dolorem accusamus, itaque beatae at suscipit repudiandae possimus ea eius quibusdam maxime, mollitia adipisci autem maiores ipsum quia quasi placeat repudiandae doloremque repellat quos.","slug":"eligendi-quis-cupiditate-iusto","title":"Eligendi Quis Cupiditate Iusto"}]}');

/***/ }),

/***/ "./js/shared/api/samples.json":
/*!************************************!*\
  !*** ./js/shared/api/samples.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"quote":{"author":"Edsger W. Dijkstra","message":"Simplicity and elegance are unpopular because they require hard work and discipline to achieve and education to be appreciated."}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["lib"], () => (__webpack_require__("./js/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.44e94.js.map