/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/tabs.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/tabs.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tabs > ul {\n  padding: 0;\n}\n\n.tabs .trigger {\n  list-style-type: none;\n  padding: 10px;\n  color: white;\n  margin: 4px;\n  border-radius: 6px;\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.tabs .trigger.active {\n  background: #ff6565;\n  color: white;\n}\n\n.tabs .content {\n  padding: 10px 20px;\n  border-radius: 6px;\n  display: none;\n}\n\n.tabs .content.active {\n  display: block;\n}", "",{"version":3,"sources":["webpack://./sass/tabs.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;AACF;;AACA;EACE,qBAAA;EACA,aAAA;EACA,YAAA;EAEA,WAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;AACF;;AACA;EACE,mBAAA;EACA,YAAA;AAEF;;AAAA;EAEE,kBAAA;EACA,kBAAA;EACA,aAAA;AAEF;;AAAA;EACE,cAAA;AAGF","sourcesContent":[".tabs > ul {\n  padding: 0;\n}\n.tabs .trigger {\n  list-style-type: none;\n  padding: 10px;\n  color: white;\n  // background: #f2f2f2;\n  margin: 4px;\n  border-radius: 6px;\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.tabs .trigger.active {\n  background: #ff6565;\n  color: white;\n}\n.tabs .content {\n  // background: #fbfbfb;\n  padding: 10px 20px;\n  border-radius: 6px;\n  display: none;\n}\n.tabs .content.active {\n  display: block;\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./sass/tabs.scss":
/*!************************!*\
  !*** ./sass/tabs.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./tabs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/tabs.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testtas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testtas */ "./src/testtas.js");
// import pageLoad from "./page_load";
// import aboutLoad from "./about";
// import galeryLoad from "./galery";
// import contactLoad from "./contact";

// import { navCnt } from "./nav";
// import { galeryLoad } from "./galery";
// import { mainnavCnt } from "./mainnav";
// create tabs
const tabs = new _testtas__WEBPACK_IMPORTED_MODULE_0__.Tabs(document.querySelector(".tabs"));
tabs.init();


/***/ }),

/***/ "./src/testtas.js":
/*!************************!*\
  !*** ./src/testtas.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testtabLoad": () => /* binding */ testtabLoad,
/* harmony export */   "Tabs": () => /* binding */ Tabs
/* harmony export */ });
/* harmony import */ var _sass_tabs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/tabs.scss */ "./sass/tabs.scss");

const testtabLoad = (() => {
  //container
  const contentTabs = document.querySelector("#content");
  const tabs = document.createElement("tabs");
  tabs.innerHTML = `
    <div class="tabs">
      <ul>
        <li class="trigger active" data-target="#home">Home</li>
        <li class="trigger" data-target="#about">About</li>
        <li class="trigger" data-target="#galery">Galery</li>
        <li class="trigger" data-target="#contact">Conctact</li>
      </ul>
      <div id="home" class="content active">
      <nav class="navbar">
      <input type="checkbox" id="check" class="checkbox" hidden />
      <div class="hamburger-menu">
        <label for="check" class="menu">
          <div class="menu-line menu-line-1"></div>
          <div class="menu-line menu-line-2"></div>
          <div class="menu-line menu-line-3"></div>
        </label>
      </div>
      <div class="navbar-navigation">
        <div class="navbar-navigation-left">
          <img src="../src/images/nav-img-1.jpeg" alt='move' class="left-img left-img-1" />
          <img src="../src/images/nav-img-2.jpeg" alt='move' class="left-img left-img-2" />
          <img src="../src/images/nav-img-3.jpeg" alt='move' class="left-img left-img-3" />
        </div>
    
        <div class="navbar-navigation-right">
          <ul class="nav-list">
            <li class="nav-list-item">
              <a href="#home" class="nav-list-link">Thank You</a>
            </li>
            <li class="nav-list-item">
              <a href="#about" class="nav-list-link">For</a>
            </li>
            <li class="nav-list-item">
              <a href="#galery" class="nav-list-link">Your Visit</a>
            </li>
            <li class="nav-list-item">
              <a href="#contact" class="nav-list-link">Hope to see you Soon</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="header">
    <div class="brand">
      <a href="#" class="logo"><i class="fas fa-utensils"></i></a>
      <div>
        <h1 class="main-name">Georgia</h1>
        <p class="sub-name">Restaurant</p>
      </div>
    </div>
    
    <div class="header-banner">
      <h1 class="main-heading">Welcome</h1>
      <h3 class="sub-heading">Try Great Georgian Dishes</h3>
      <button type="button" class="main-btn">Reservations</button>
    </div>
    </header>  
     </div>
     
      <div id="about" class="content">
        <section class="about-us">
        <div class="about-us-left">
          <img src="../src/images/about-us-img.png" alt="about-us" />
        </div>
      
        <div class="about-us-right">
          <h1 class="main-heading">About Us</h1>
          <h3 class="sub-heading">Introduce to Georgian Dishes</h3>
          <div class="stars">
            <i class="fas fa-star-of-life star"></i>
            <i class="fas fa-star-of-life star"></i>
            <i class="fas fa-star-of-life star"></i>
          </div>
          <p class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptatum, reiciendis repellat sapiente quisquam, voluptates expedita hic aperiam ipsam tempora ex temporibus corrupti assumenda laboriosam libero. Perspiciatis iste harum unde voluptatem fugiat nobis suscipit corporis nemo
            cum sapiente rem, praesentium mollitia, reiciendis temporibus quas, optio et id provident non cupiditate.
          </p>
          <div class="stars">
            <i class="fas fa-star-of-life star"></i>
            <i class="fas fa-star-of-life star"></i>
            <i class="fas fa-star-of-life star"></i>
          </div>
          <button type="button" class="main-btn">Read More</button>
        </div>
      </section>
      </div>
      <div id="galery" class="content">
        <section class="gallery">
        <div class="cards-wrapper">
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Burritos</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-1.jpeg" class="card-img" alt="" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Custom Pancakes</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-2.jpeg" alt="" class="card-img" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Home Made Pizzas</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-3.jpeg" alt="" class="card-img" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Fish</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-4.jpeg" alt="" class="card-img" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Salads</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-5.jpeg" alt="" class="card-img" />
          </div>
      
          <div class="card">
            <div class="card-overlay">
              <h1 class="card-overlay-heading">Steaks</h1>
              <p class="card-overlay-paragraph">Price:$30.00</p>
              <button type="button" class="card-overlay-btn">Order Now</button>
            </div>
            <img src="../src/images/gallery-img-6.jpeg" alt="" class="card-img" />
          </div>
        </div>
      </section>
      </div>
      <div id="contact" class="content">
        <footer class="footer">
        <div class="footer-header">
          <a href="#" class="logo"><i class="fas fa-utensils"></i></a>
          <div>
            <h1 class="main-name">Georgia</h1>
            <p class="sub-name">Restaurant</p>
          </div>
        </div>
    
        <div class="footer-social-media">
          <ul class="social-media">
            <li class="social-media-item">
              <a href="#" class="social-media-link">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="#" class="social-media-link">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="#" class="social-media-link">
                <i class="fab fa-google-plus-square"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="#" class="social-media-link">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
    
        <div class="footer-copyright">
          <p class="footer-copyright-paragraph">&copy; Copyright. Restaurant "Georgia. All Rights Reserved"</p>
        </div>
      </footer>
      </div>
    </div>
    </div> `;

  contentTabs.appendChild(tabs);
})();

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          this.toggleTabs(e);
          this.toggleContent(e);
        }
      });
    });
  }
  toggleTabs(e) {
    // remove current active classes
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    // add new active class
    e.target.classList.add("active");
  }
  toggleContent(e) {
    // remove current active classes
    this.container.querySelectorAll(".content").forEach((item) => {
      item.classList.remove("active");
    });
    // add new active class
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc2Fzcy90YWJzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zYXNzL3RhYnMuc2Nzcz8yYzgyIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Rlc3R0YXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHNEQUFzRCxlQUFlLEdBQUcsb0JBQW9CLDBCQUEw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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQzJDO0FBQzNDLFdBQVcsU0FBUztBQUNwQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0EsaUJBQWlCLDBDQUFJO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1YyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCOzs7Ozs7O1VDdE83QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGFicyA+IHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi50YWJzIC50cmlnZ2VyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhYnMgLnRyaWdnZXIuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmZjY1NjU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWJzIC5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YWJzIC5jb250ZW50LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc2Fzcy90YWJzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGFicyA+IHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi50YWJzIC50cmlnZ2VyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvLyBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xcbiAgbWFyZ2luOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YWJzIC50cmlnZ2VyLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmY2NTY1O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4udGFicyAuY29udGVudCB7XFxuICAvLyBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhYnMgLmNvbnRlbnQuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYnMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VfbG9hZFwiO1xuLy8gaW1wb3J0IGFib3V0TG9hZCBmcm9tIFwiLi9hYm91dFwiO1xuLy8gaW1wb3J0IGdhbGVyeUxvYWQgZnJvbSBcIi4vZ2FsZXJ5XCI7XG4vLyBpbXBvcnQgY29udGFjdExvYWQgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHsgdGFic0xvYWQsIFRhYnMgfSBmcm9tIFwiLi90ZXN0dGFzXCI7XG4vLyBpbXBvcnQgeyBuYXZDbnQgfSBmcm9tIFwiLi9uYXZcIjtcbi8vIGltcG9ydCB7IGdhbGVyeUxvYWQgfSBmcm9tIFwiLi9nYWxlcnlcIjtcbi8vIGltcG9ydCB7IG1haW5uYXZDbnQgfSBmcm9tIFwiLi9tYWlubmF2XCI7XG4vLyBjcmVhdGUgdGFic1xuY29uc3QgdGFicyA9IG5ldyBUYWJzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic1wiKSk7XG50YWJzLmluaXQoKTtcbiIsImltcG9ydCBcIi4uL3Nhc3MvdGFicy5zY3NzXCI7XG5jb25zdCB0ZXN0dGFiTG9hZCA9ICgoKSA9PiB7XG4gIC8vY29udGFpbmVyXG4gIGNvbnN0IGNvbnRlbnRUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYnNcIik7XG4gIHRhYnMuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzcz1cInRyaWdnZXIgYWN0aXZlXCIgZGF0YS10YXJnZXQ9XCIjaG9tZVwiPkhvbWU8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJ0cmlnZ2VyXCIgZGF0YS10YXJnZXQ9XCIjYWJvdXRcIj5BYm91dDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInRyaWdnZXJcIiBkYXRhLXRhcmdldD1cIiNnYWxlcnlcIj5HYWxlcnk8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJ0cmlnZ2VyXCIgZGF0YS10YXJnZXQ9XCIjY29udGFjdFwiPkNvbmN0YWN0PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGlkPVwiaG9tZVwiIGNsYXNzPVwiY29udGVudCBhY3RpdmVcIj5cbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrXCIgY2xhc3M9XCJjaGVja2JveFwiIGhpZGRlbiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlci1tZW51XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjaGVja1wiIGNsYXNzPVwibWVudVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxpbmUgbWVudS1saW5lLTFcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1saW5lIG1lbnUtbGluZS0yXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbGluZSBtZW51LWxpbmUtM1wiPjwvZGl2PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLW5hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1uYXZpZ2F0aW9uLWxlZnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvbmF2LWltZy0xLmpwZWdcIiBhbHQ9J21vdmUnIGNsYXNzPVwibGVmdC1pbWcgbGVmdC1pbWctMVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL25hdi1pbWctMi5qcGVnXCIgYWx0PSdtb3ZlJyBjbGFzcz1cImxlZnQtaW1nIGxlZnQtaW1nLTJcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9uYXYtaW1nLTMuanBlZ1wiIGFsdD0nbW92ZScgY2xhc3M9XCJsZWZ0LWltZyBsZWZ0LWltZy0zXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItbmF2aWdhdGlvbi1yaWdodFwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdi1saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiIGNsYXNzPVwibmF2LWxpc3QtbGlua1wiPlRoYW5rIFlvdTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjYWJvdXRcIiBjbGFzcz1cIm5hdi1saXN0LWxpbmtcIj5Gb3I8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2dhbGVyeVwiIGNsYXNzPVwibmF2LWxpc3QtbGlua1wiPllvdXIgVmlzaXQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIiBjbGFzcz1cIm5hdi1saXN0LWxpbmtcIj5Ib3BlIHRvIHNlZSB5b3UgU29vbjwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImJyYW5kXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibG9nb1wiPjxpIGNsYXNzPVwiZmFzIGZhLXV0ZW5zaWxzXCI+PC9pPjwvYT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzcz1cIm1haW4tbmFtZVwiPkdlb3JnaWE8L2gxPlxuICAgICAgICA8cCBjbGFzcz1cInN1Yi1uYW1lXCI+UmVzdGF1cmFudDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYmFubmVyXCI+XG4gICAgICA8aDEgY2xhc3M9XCJtYWluLWhlYWRpbmdcIj5XZWxjb21lPC9oMT5cbiAgICAgIDxoMyBjbGFzcz1cInN1Yi1oZWFkaW5nXCI+VHJ5IEdyZWF0IEdlb3JnaWFuIERpc2hlczwvaDM+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1haW4tYnRuXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+ICBcbiAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPGRpdiBpZD1cImFib3V0XCIgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYWJvdXQtdXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXVzLWxlZnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvYWJvdXQtdXMtaW1nLnBuZ1wiIGFsdD1cImFib3V0LXVzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXVzLXJpZ2h0XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwibWFpbi1oZWFkaW5nXCI+QWJvdXQgVXM8L2gxPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInN1Yi1oZWFkaW5nXCI+SW50cm9kdWNlIHRvIEdlb3JnaWFuIERpc2hlczwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJzXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zdGFyLW9mLWxpZmUgc3RhclwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXN0YXItb2YtbGlmZSBzdGFyXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc3Rhci1vZi1saWZlIHN0YXJcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaXF1YW0gdm9sdXB0YXR1bSwgcmVpY2llbmRpcyByZXBlbGxhdCBzYXBpZW50ZSBxdWlzcXVhbSwgdm9sdXB0YXRlcyBleHBlZGl0YSBoaWMgYXBlcmlhbSBpcHNhbSB0ZW1wb3JhIGV4IHRlbXBvcmlidXMgY29ycnVwdGkgYXNzdW1lbmRhIGxhYm9yaW9zYW0gbGliZXJvLiBQZXJzcGljaWF0aXMgaXN0ZSBoYXJ1bSB1bmRlIHZvbHVwdGF0ZW0gZnVnaWF0IG5vYmlzIHN1c2NpcGl0IGNvcnBvcmlzIG5lbW9cbiAgICAgICAgICAgIGN1bSBzYXBpZW50ZSByZW0sIHByYWVzZW50aXVtIG1vbGxpdGlhLCByZWljaWVuZGlzIHRlbXBvcmlidXMgcXVhcywgb3B0aW8gZXQgaWQgcHJvdmlkZW50IG5vbiBjdXBpZGl0YXRlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhcnNcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXN0YXItb2YtbGlmZSBzdGFyXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc3Rhci1vZi1saWZlIHN0YXJcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zdGFyLW9mLWxpZmUgc3RhclwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1haW4tYnRuXCI+UmVhZCBNb3JlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiZ2FsZXJ5XCIgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZ2FsbGVyeVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNhcmQtb3ZlcmxheS1oZWFkaW5nXCI+QnVycml0b3M8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtb3ZlcmxheS1wYXJhZ3JhcGhcIj5QcmljZTokMzAuMDA8L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FyZC1vdmVybGF5LWJ0blwiPk9yZGVyIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvZ2FsbGVyeS1pbWctMS5qcGVnXCIgY2xhc3M9XCJjYXJkLWltZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtb3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJjYXJkLW92ZXJsYXktaGVhZGluZ1wiPkN1c3RvbSBQYW5jYWtlczwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1vdmVybGF5LXBhcmFncmFwaFwiPlByaWNlOiQzMC4wMDwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYXJkLW92ZXJsYXktYnRuXCI+T3JkZXIgTm93PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9nYWxsZXJ5LWltZy0yLmpwZWdcIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmQtaW1nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNhcmQtb3ZlcmxheS1oZWFkaW5nXCI+SG9tZSBNYWRlIFBpenphczwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1vdmVybGF5LXBhcmFncmFwaFwiPlByaWNlOiQzMC4wMDwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYXJkLW92ZXJsYXktYnRuXCI+T3JkZXIgTm93PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9nYWxsZXJ5LWltZy0zLmpwZWdcIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmQtaW1nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNhcmQtb3ZlcmxheS1oZWFkaW5nXCI+RmlzaDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1vdmVybGF5LXBhcmFncmFwaFwiPlByaWNlOiQzMC4wMDwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYXJkLW92ZXJsYXktYnRuXCI+T3JkZXIgTm93PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9nYWxsZXJ5LWltZy00LmpwZWdcIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmQtaW1nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNhcmQtb3ZlcmxheS1oZWFkaW5nXCI+U2FsYWRzPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLW92ZXJsYXktcGFyYWdyYXBoXCI+UHJpY2U6JDMwLjAwPC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhcmQtb3ZlcmxheS1idG5cIj5PcmRlciBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2dhbGxlcnktaW1nLTUuanBlZ1wiIGFsdD1cIlwiIGNsYXNzPVwiY2FyZC1pbWdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY2FyZC1vdmVybGF5LWhlYWRpbmdcIj5TdGVha3M8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtb3ZlcmxheS1wYXJhZ3JhcGhcIj5QcmljZTokMzAuMDA8L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FyZC1vdmVybGF5LWJ0blwiPk9yZGVyIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvZ2FsbGVyeS1pbWctNi5qcGVnXCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJkLWltZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGFjdFwiIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItaGVhZGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxvZ29cIj48aSBjbGFzcz1cImZhcyBmYS11dGVuc2lsc1wiPjwvaT48L2E+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1haW4tbmFtZVwiPkdlb3JnaWE8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWItbmFtZVwiPlJlc3RhdXJhbnQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbC1tZWRpYS1saW5rXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbC1tZWRpYS1saW5rXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbC1tZWRpYS1saW5rXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtZ29vZ2xlLXBsdXMtc3F1YXJlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwic29jaWFsLW1lZGlhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvY2lhbC1tZWRpYS1saW5rXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEteW91dHViZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1jb3B5cmlnaHRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImZvb3Rlci1jb3B5cmlnaHQtcGFyYWdyYXBoXCI+JmNvcHk7IENvcHlyaWdodC4gUmVzdGF1cmFudCBcIkdlb3JnaWEuIEFsbCBSaWdodHMgUmVzZXJ2ZWRcIjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PiBgO1xuXG4gIGNvbnRlbnRUYWJzLmFwcGVuZENoaWxkKHRhYnMpO1xufSkoKTtcblxuY2xhc3MgVGFicyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMudGFicyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyaWdnZXJcIik7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIkxJXCIpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVRhYnMoZSk7XG4gICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVUYWJzKGUpIHtcbiAgICAvLyByZW1vdmUgY3VycmVudCBhY3RpdmUgY2xhc3Nlc1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAvLyBhZGQgbmV3IGFjdGl2ZSBjbGFzc1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbiAgdG9nZ2xlQ29udGVudChlKSB7XG4gICAgLy8gcmVtb3ZlIGN1cnJlbnQgYWN0aXZlIGNsYXNzZXNcbiAgICB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRlbnRcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIC8vIGFkZCBuZXcgYWN0aXZlIGNsYXNzXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHRlc3R0YWJMb2FkLCBUYWJzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9