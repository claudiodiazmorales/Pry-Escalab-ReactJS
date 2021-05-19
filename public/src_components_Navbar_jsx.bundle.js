(self["webpackChunkpokeapi_redux"] = self["webpackChunkpokeapi_redux"] || []).push([["src_components_Navbar_jsx"],{

/***/ "./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_img_pokemon_logo_PNG14_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/pokemon_logo_PNG14.png */ "./src/assets/img/pokemon_logo_PNG14.png");
/* harmony import */ var _redux_userDucks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/userDucks.js */ "./src/redux/userDucks.js");






var Navbar = function Navbar(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var closeSession = function closeSession() {
    dispatch((0,_redux_userDucks_js__WEBPACK_IMPORTED_MODULE_3__.closeSessionAction)());
    props.history.push('/login');
  };

  var active = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.users.active;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "navbar navbar-dark bg-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: "navbar-brand",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_img_pokemon_logo_PNG14_png__WEBPACK_IMPORTED_MODULE_2__.default,
    alt: "",
    className: "img-fluid",
    width: "200px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex"
  }, active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: "btn btn-danger mr-2",
    to: "/",
    exact: true
  }, "Inicio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: "btn btn-danger mr-2",
    to: "/profile",
    exact: true
  }, "Perfil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-danger mr-2",
    onClick: function onClick() {
      return closeSession();
    }
  }, "Cerrar Sesi\xF3n")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: "btn btn-danger mr-2",
    to: "/login",
    exact: true
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)(Navbar));

/***/ }),

/***/ "./src/assets/img/pokemon_logo_PNG14.png":
/*!***********************************************!*\
  !*** ./src/assets/img/pokemon_logo_PNG14.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "77ebd6f3974c17825428d7c7cfee9926.png");

/***/ })

}]);
//# sourceMappingURL=src_components_Navbar_jsx.bundle.js.map