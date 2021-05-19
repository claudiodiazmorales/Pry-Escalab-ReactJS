(self["webpackChunkpokeapi_redux"] = self["webpackChunkpokeapi_redux"] || []).push([["src_components_Profile_jsx"],{

/***/ "./src/components/Profile.jsx":
/*!************************************!*\
  !*** ./src/components/Profile.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_userDucks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/userDucks.js */ "./src/redux/userDucks.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Profile = function Profile() {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.users.user;
  });
  var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.users.loading;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(user.displayName),
      _useState2 = _slicedToArray(_useState, 2),
      userName = _useState2[0],
      setUserName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      formActive = _useState4[0],
      setFormActive = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var updateUserName = function updateUserName() {
    if (!userName.trim()) {
      console.log("nombre vacio");
      return;
    }

    dispatch((0,_redux_userDucks_js__WEBPACK_IMPORTED_MODULE_2__.updateUserNameAction)(userName));
    setFormActive(false);
  };

  var selectPhoto = function selectPhoto(img) {
    console.log(img.target.files[0]);
    var imgClient = img.target.files[0];

    if (imgClient === undefined) {
      console.log("no se subio imagen");
      return;
    }

    if (imgClient.type === "image/png" || imgClient.type === "image/jpg" || imgClient.type === "image/jpeg") {
      dispatch((0,_redux_userDucks_js__WEBPACK_IMPORTED_MODULE_2__.editPhotoAction)(imgClient));
      console.log('foto ok');
      setError(false);
    } else {
      setError(true);
      console.log('no subio imagen');
      return;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-5 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: user.photoURL,
    alt: "",
    width: "100px",
    className: "img-fluid"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "card-title mt-2"
  }, user.displayName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "card-text"
  }, user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-primary mt-3",
    onClick: function onClick() {
      return setFormActive(true);
    }
  }, "Editar nombre"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "alert alert-warning mt-3"
  }, "Solo archivos PNG, JPG o JPEG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "custom-file"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    className: "custom-file-input",
    id: "inputGroupFile01",
    style: {
      display: "none"
    },
    onChange: function onChange(e) {
      return selectPhoto(e);
    },
    disabled: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: loading ? "btn btn-dark mt-4 mb-5 disabled" : "btn btn-dark mt-4 mb-5",
    htmlFor: "inputGroupFile01"
  }, "Actualizar Imagen"))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-center mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spinner-border text-danger",
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Loading...")))), formActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    value: userName,
    onChange: function onChange(e) {
      return setUserName(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-primary",
    type: "button",
    onClick: function onClick() {
      return updateUserName();
    }
  }, "Actualizar"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

}]);
//# sourceMappingURL=src_components_Profile_jsx.bundle.js.map