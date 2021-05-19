(self["webpackChunkpokeapi_redux"] = self["webpackChunkpokeapi_redux"] || []).push([["src_components_Pokemons_jsx"],{

/***/ "./src/components/PokemonDetail.jsx":
/*!******************************************!*\
  !*** ./src/components/PokemonDetail.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_pokemonDucks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/pokemonDucks.js */ "./src/redux/pokemonDucks.js");




var PokemonDetail = function PokemonDetail() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchData = function fetchData() {
      dispatch((0,_redux_pokemonDucks_js__WEBPACK_IMPORTED_MODULE_2__.pokeDetailAction)());
    };

    fetchData();
  }, [dispatch]);
  var pokemon = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.pokemons.onePokemon;
  }); //console.log(pokemon);

  return pokemon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card mt-4 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: pokemon.front_default,
    alt: pokemon.name,
    className: "img-fluid",
    width: "150px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "card-title text-uppercase mt-4"
  }, pokemon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card-text"
  }, "Pokemon N\xBA: ", pokemon.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card-text"
  }, "Alto: ", pokemon.height, " | Ancho: ", pokemon.weight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "card-text"
  }, "Experiencia Base: ", pokemon.base_experience))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (PokemonDetail);

/***/ }),

/***/ "./src/components/Pokemons.jsx":
/*!*************************************!*\
  !*** ./src/components/Pokemons.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_pokemonDucks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/pokemonDucks */ "./src/redux/pokemonDucks.js");
/* harmony import */ var _PokemonDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PokemonDetail */ "./src/components/PokemonDetail.jsx");
/* harmony import */ var _assets_img_pokeball_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/pokeball.png */ "./src/assets/img/pokeball.png");






var Pokemons = function Pokemons() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var pokemones = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.pokemons.results;
  });
  var next = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.pokemons.next;
  });
  var previous = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (store) {
    return store.pokemons.previous;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchData = function fetchData() {
      dispatch((0,_redux_pokemonDucks__WEBPACK_IMPORTED_MODULE_2__.getPokemonAction)());
    };

    fetchData();
  }, [dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Lista de Pokemones"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group mt-4  "
  }, pokemones.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: item.name,
      className: "list-group-item text-uppercase"
    }, item.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: function onClick() {
        return dispatch((0,_redux_pokemonDucks__WEBPACK_IMPORTED_MODULE_2__.pokeDetailAction)(item.url));
      },
      className: "btn btn-primary btn-sm float-right"
    }, "Ver ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _assets_img_pokeball_png__WEBPACK_IMPORTED_MODULE_4__.default,
      alt: "",
      className: "img-fluid",
      width: "20px"
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-between mt-3"
  }, next !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_pokemonDucks__WEBPACK_IMPORTED_MODULE_2__.nextPokemonsAction)());
    },
    className: "btn btn-dark"
  }, "Siguiente"), previous !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_pokemonDucks__WEBPACK_IMPORTED_MODULE_2__.backPokemonsAction)());
    },
    className: "btn btn-dark"
  }, "Anterior"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Detalle Pokemon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PokemonDetail__WEBPACK_IMPORTED_MODULE_3__.default, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Pokemons);

/***/ }),

/***/ "./src/assets/img/pokeball.png":
/*!*************************************!*\
  !*** ./src/assets/img/pokeball.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3524152e6db493ae46b83494af030014.png");

/***/ })

}]);
//# sourceMappingURL=src_components_Pokemons_jsx.bundle.js.map