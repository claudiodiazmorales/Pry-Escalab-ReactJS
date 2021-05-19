(self["webpackChunkpokeapi_redux"] = self["webpackChunkpokeapi_redux"] || []).push([["src_components_Login_jsx"],{

/***/ "./src/components/Login.jsx":
/*!**********************************!*\
  !*** ./src/components/Login.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_userDucks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/userDucks.js */ "./src/redux/userDucks.js");
/* harmony import */ var _assets_img_pokemon_google_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/pokemon_google.png */ "./src/assets/img/pokemon_google.png");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");






var Login = function Login(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.users.loading;
  });
  var active = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.users.active;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (active) {
      props.history.push('/');
    }
  }, [active, props.history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-5 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "INGRESE CON SU CUENTA DE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_img_pokemon_google_png__WEBPACK_IMPORTED_MODULE_3__.default,
    alt: "google",
    className: "img-fluid",
    width: "300px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return dispatch((0,_redux_userDucks_js__WEBPACK_IMPORTED_MODULE_2__.loginUserAction)());
    },
    disabled: loading
  }, "ACCEDER"));
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)(Login));

/***/ }),

/***/ "./src/assets/img/pokemon_google.png":
/*!*******************************************!*\
  !*** ./src/assets/img/pokemon_google.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3c4d6259732e39f4dfb711ed72d3fe1f.png");

/***/ })

}]);
//# sourceMappingURL=src_components_Login_jsx.bundle.js.map