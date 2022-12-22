/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! header-background.jpg */ "./src/header-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Raleway:wght@300;500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\tfont-size:12px;\r\n}\r\n\r\n* {\r\n\tbox-sizing:border-box;\r\n}\r\n\r\nbody {\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tfont-family:'Raleway', sans-serif;\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n}\r\n\r\nheader {\r\n\tbackground:black;\r\n\tcolor:white;\r\n\tposition:sticky;\r\n\ttop:0;\r\n\tleft:0;\r\n\twidth:100%;\r\n\tpadding:10px;\r\n\tdisplay:flex;\r\n\talign-items:center;\r\n\tz-index:10;\r\n}\r\n\r\nh1, h2, h3 {\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tfont-family: Poppins;\r\n}\r\n\r\n\r\nh1 {\r\n\tfont-size: 4rem;\r\n}\r\n\r\nh2 {\r\n\tfont-size:2.8rem;\r\n\ttext-align:center;\r\n}\r\n\r\nh3 {\r\n\tfont-size:1.8rem;\r\n}\r\n\r\n.nav-wrapper {\r\n\tdisplay:flex;\r\n\tmax-width:900px;\r\n\twidth:100%;\r\n\tmargin:0 auto;\r\n\tjustify-content: space-between;\r\n\talign-items:center;\r\n}\r\n\r\nul {\r\n\tdisplay:flex;\r\n\tgap:40px;\r\n\talign-items:center;\r\n\tjustify-content: flex-end;\r\n\tlist-style: none;\r\n}\r\n\r\n\r\nul li {\r\n\tpadding:20px 12px;\r\n\tborder-bottom:1px solid transparent;\r\n\tfont-size:0.8rem;\r\n\tfont-weight: 300;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\nul li:hover {\r\n\tcursor:pointer;\r\n\tborder-bottom:1px solid #ccc;\r\n}\r\n\r\n#content {\r\n\t\r\n}\r\n\r\n.hero-container {\r\n\tposition:relative;\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\tbackground-size:cover;\r\n\tbackground-repeat: no-repeat;\r\n\tmargin: 0 auto;\r\n\twidth:100%;\r\n\theight:500px;\r\n\tcolor:white;\r\n}\r\n\r\n.hero-container::before {\r\n\tcontent:'';\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n\theight: 100%;\r\n\twidth:100%;\r\n\tbackground:rgba(0,0,0,0.8);\r\n}\r\n\r\n.hero-content {\r\n\tposition:absolute;\r\n\ttop:40%;\r\n\tleft:50%;\r\n\ttransform:translate(-50%,-50%);\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\tgap:20px;\r\n\ttext-align:center;\r\n}\r\n\r\n.hero-content p {\r\n\tline-height:1.6;\r\n\tfont-weight:500;\r\n}\r\n\r\n.menu-link {\r\n\tborder: 2px solid #fff;\r\n\twidth:200px;\r\n\tpadding:1.2rem;\r\n\tmargin:0 auto;\r\n\tborder-radius:4px;\r\n}\r\n\r\n.menu-link:hover {\r\n\tbackground:white;\r\n\tcolor:black;\r\n\ttransition:.3s;\r\n}\r\n\r\n.about-container {\r\n\tpadding:80px;\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:30px;\r\n\talign-items: center;\r\n\tline-height: 1.6;\r\n}\r\n\r\n.about-container p {\r\n\tmax-width:600px;\r\n}\r\n\r\n.socials {\r\n\tdisplay:flex;\r\n\tgap:20px;\r\n}\r\n\r\n.icon {\r\n\twidth:40px;\r\n\theight: 40px;\r\n}\r\n\r\n.icon:hover {\r\n\tcursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;CACC,cAAc;AACf;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,SAAS;CACT,QAAQ;CACR,iCAAiC;CACjC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;CAChB,WAAW;CACX,eAAe;CACf,KAAK;CACL,MAAM;CACN,UAAU;CACV,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,SAAS;CACT,QAAQ;CACR,oBAAoB;AACrB;;;AAGA;CACC,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,UAAU;CACV,aAAa;CACb,8BAA8B;CAC9B,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,QAAQ;CACR,kBAAkB;CAClB,yBAAyB;CACzB,gBAAgB;AACjB;;;AAGA;CACC,iBAAiB;CACjB,mCAAmC;CACnC,gBAAgB;CAChB,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;CACC,cAAc;CACd,4BAA4B;AAC7B;;AAEA;;AAEA;;AAEA;CACC,iBAAiB;CACjB,mDAAwC;CACxC,qBAAqB;CACrB,4BAA4B;CAC5B,cAAc;CACd,UAAU;CACV,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,UAAU;CACV,iBAAiB;CACjB,KAAK;CACL,MAAM;CACN,YAAY;CACZ,UAAU;CACV,0BAA0B;AAC3B;;AAEA;CACC,iBAAiB;CACjB,OAAO;CACP,QAAQ;CACR,8BAA8B;CAC9B,YAAY;CACZ,qBAAqB;CACrB,QAAQ;CACR,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,sBAAsB;CACtB,WAAW;CACX,cAAc;CACd,aAAa;CACb,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,WAAW;CACX,cAAc;AACf;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,sBAAsB;CACtB,QAAQ;CACR,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,QAAQ;AACT;;AAEA;CACC,UAAU;CACV,YAAY;AACb;;AAEA;CACC,eAAe;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Raleway:wght@300;500;700&display=swap');\r\n:root {\r\n\tfont-size:12px;\r\n}\r\n\r\n* {\r\n\tbox-sizing:border-box;\r\n}\r\n\r\nbody {\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tfont-family:'Raleway', sans-serif;\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n}\r\n\r\nheader {\r\n\tbackground:black;\r\n\tcolor:white;\r\n\tposition:sticky;\r\n\ttop:0;\r\n\tleft:0;\r\n\twidth:100%;\r\n\tpadding:10px;\r\n\tdisplay:flex;\r\n\talign-items:center;\r\n\tz-index:10;\r\n}\r\n\r\nh1, h2, h3 {\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tfont-family: Poppins;\r\n}\r\n\r\n\r\nh1 {\r\n\tfont-size: 4rem;\r\n}\r\n\r\nh2 {\r\n\tfont-size:2.8rem;\r\n\ttext-align:center;\r\n}\r\n\r\nh3 {\r\n\tfont-size:1.8rem;\r\n}\r\n\r\n.nav-wrapper {\r\n\tdisplay:flex;\r\n\tmax-width:900px;\r\n\twidth:100%;\r\n\tmargin:0 auto;\r\n\tjustify-content: space-between;\r\n\talign-items:center;\r\n}\r\n\r\nul {\r\n\tdisplay:flex;\r\n\tgap:40px;\r\n\talign-items:center;\r\n\tjustify-content: flex-end;\r\n\tlist-style: none;\r\n}\r\n\r\n\r\nul li {\r\n\tpadding:20px 12px;\r\n\tborder-bottom:1px solid transparent;\r\n\tfont-size:0.8rem;\r\n\tfont-weight: 300;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\nul li:hover {\r\n\tcursor:pointer;\r\n\tborder-bottom:1px solid #ccc;\r\n}\r\n\r\n#content {\r\n\t\r\n}\r\n\r\n.hero-container {\r\n\tposition:relative;\r\n\tbackground: url('header-background.jpg');\r\n\tbackground-size:cover;\r\n\tbackground-repeat: no-repeat;\r\n\tmargin: 0 auto;\r\n\twidth:100%;\r\n\theight:500px;\r\n\tcolor:white;\r\n}\r\n\r\n.hero-container::before {\r\n\tcontent:'';\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n\theight: 100%;\r\n\twidth:100%;\r\n\tbackground:rgba(0,0,0,0.8);\r\n}\r\n\r\n.hero-content {\r\n\tposition:absolute;\r\n\ttop:40%;\r\n\tleft:50%;\r\n\ttransform:translate(-50%,-50%);\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\tgap:20px;\r\n\ttext-align:center;\r\n}\r\n\r\n.hero-content p {\r\n\tline-height:1.6;\r\n\tfont-weight:500;\r\n}\r\n\r\n.menu-link {\r\n\tborder: 2px solid #fff;\r\n\twidth:200px;\r\n\tpadding:1.2rem;\r\n\tmargin:0 auto;\r\n\tborder-radius:4px;\r\n}\r\n\r\n.menu-link:hover {\r\n\tbackground:white;\r\n\tcolor:black;\r\n\ttransition:.3s;\r\n}\r\n\r\n.about-container {\r\n\tpadding:80px;\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:30px;\r\n\talign-items: center;\r\n\tline-height: 1.6;\r\n}\r\n\r\n.about-container p {\r\n\tmax-width:600px;\r\n}\r\n\r\n.socials {\r\n\tdisplay:flex;\r\n\tgap:20px;\r\n}\r\n\r\n.icon {\r\n\twidth:40px;\r\n\theight: 40px;\r\n}\r\n\r\n.icon:hover {\r\n\tcursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeChild */ "./src/removeChild.js");


const contact = (() => {
	const container = document.querySelector('#content');
	
	const renderContactSection = () => {
		console.log("Contact Section");
	}

	const render = () => {
		;(0,_removeChild__WEBPACK_IMPORTED_MODULE_0__["default"])();
		renderContactSection();
	}

	return {
		render,
	};
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact.render);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeChild */ "./src/removeChild.js");
/* harmony import */ var _assets_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/facebook.svg */ "./src/assets/facebook.svg");
/* harmony import */ var _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/twitter.svg */ "./src/assets/twitter.svg");
/* harmony import */ var _assets_square_instagram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/square-instagram.svg */ "./src/assets/square-instagram.svg");






const home = (() => {
	const container = document.querySelector('#content');

	const renderHeroSection = () => {
		const heroContainer = document.createElement('div');
		heroContainer.classList.add('hero-container');
		container.appendChild(heroContainer);

		const heroContent = document.createElement('div');
		heroContent.classList.add('hero-content');

		const h1 = document.createElement('h1');
		h1.textContent = 'Resto Brand';
		heroContent.appendChild(h1);
		
		const p = document.createElement('p');
		p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula pellentesque varius. Praesent pulvinar semper interdum. Etiam malesuada gravida nisi quis volutpat. Phasellus sit amet pretium libero. Nam erat magna, eleifend non tortor ut, auctor hendrerit odio."
		heroContent.appendChild(p);

		heroContainer.appendChild(heroContent);
	}	

	const renderAboutSection = () => {
		const aboutContainer = document.createElement('div');
		aboutContainer.classList.add('about-container');
		container.appendChild(aboutContainer);

		const h2 = document.createElement('h2');
		h2.textContent = 'About Us';
		h2.style.color = '#2b2b2b';
		aboutContainer.appendChild(h2);

		const p = document.createElement('p');
		p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula pellentesque varius. Praesent pulvinar semper interdum. Etiam malesuada gravida nisi quis volutpat. Phasellus sit amet pretium libero. Nam erat magna, eleifend non tortor ut, auctor hendrerit odio."
		aboutContainer.appendChild(p);

		const socials = document.createElement('div');
		socials.classList.add('socials');
		aboutContainer.appendChild(socials)

		const facebookIcon = document.createElement('img');
		facebookIcon.classList.add('icon');
		facebookIcon.src = _assets_facebook_svg__WEBPACK_IMPORTED_MODULE_1__;

		const twitterIcon = document.createElement('img');
		twitterIcon.classList.add('icon');
		twitterIcon.src = _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_2__;

		const instagramIcon = document.createElement('img');
		instagramIcon.classList.add('icon');
		instagramIcon.src = _assets_square_instagram_svg__WEBPACK_IMPORTED_MODULE_3__;

		socials.appendChild(facebookIcon);
		


	}

	const render = () => {
		console.log("CLicked!")
		;(0,_removeChild__WEBPACK_IMPORTED_MODULE_0__["default"])();
		renderHeroSection();
		renderAboutSection();
	}

	return {
		render
	}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home.render);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeChild */ "./src/removeChild.js");


const menu = (() => {
	
	const container = document.querySelector('#content');

	const renderMenuSection = () => {
		console.log("Menu Section");
	};

	const render = () => {
		(0,_removeChild__WEBPACK_IMPORTED_MODULE_0__["default"])();
		renderMenuSection();
	};

	return {
		render,
	};
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu.render);




/***/ }),

/***/ "./src/removeChild.js":
/*!****************************!*\
  !*** ./src/removeChild.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function resetContent() {
	const container = document.querySelector('#content');
	while(container.firstChild) {
		container.removeChild(container.lastChild);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetContent);

/***/ }),

/***/ "./src/assets/facebook.svg":
/*!*********************************!*\
  !*** ./src/assets/facebook.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "facebook.svg";

/***/ }),

/***/ "./src/assets/square-instagram.svg":
/*!*****************************************!*\
  !*** ./src/assets/square-instagram.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "square-instagram.svg";

/***/ }),

/***/ "./src/assets/twitter.svg":
/*!********************************!*\
  !*** ./src/assets/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "twitter.svg";

/***/ }),

/***/ "./src/header-background.jpg":
/*!***********************************!*\
  !*** ./src/header-background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "header-background.jpg";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-background.jpg */ "./src/header-background.jpg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const pageContent = document.querySelector('#content');

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

home.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_2__["default"]);
menu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_3__["default"]);
contact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_4__["default"]);

(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map