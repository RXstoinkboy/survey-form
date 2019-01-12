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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/checkForErrors.js":
/*!**********************************!*\
  !*** ./src/js/checkForErrors.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkForErrors = checkForErrors;

var _toggleValidationHint = __webpack_require__(/*! ./toggleValidationHint.js */ "./src/js/toggleValidationHint.js");

function checkForErrors() {
  var elems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fieldsAreValid = {
    s: true
  };
  elems.forEach(function (elem) {
    console.log(elem);

    if (elem.checkValidity()) {
      (0, _toggleValidationHint.hideValidationHint)(elem);
      elem.classList.remove('error');
    } else {
      (0, _toggleValidationHint.showValidationHint)(elem);
      elem.classList.add('error');
      fieldsAreValid.s = false;
    }
  });
  return fieldsAreValid.s;
}

/***/ }),

/***/ "./src/js/checkValidity.js":
/*!*********************************!*\
  !*** ./src/js/checkValidity.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidity = checkValidity;

var _toggleValidationHint = __webpack_require__(/*! ./toggleValidationHint.js */ "./src/js/toggleValidationHint.js");

var _checkForErrors = __webpack_require__(/*! ./checkForErrors.js */ "./src/js/checkForErrors.js");

function checkValidity() {
  var form = document.querySelector('.form');
  var inputs = form.querySelectorAll('input[required], textarea[required]');
  form.setAttribute('novalidate', true);
  inputs.forEach(function (input) {
    input.addEventListener('input', function () {
      if (!this.checkValidity()) {
        this.classList.add('error');
      } else {
        this.classList.remove('error');
        (0, _toggleValidationHint.hideValidationHint)(this);
      }
    });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if ((0, _checkForErrors.checkForErrors)(inputs)) {
      console.log('zgoda');
    }
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _checkValidity = __webpack_require__(/*! ./checkValidity.js */ "./src/js/checkValidity.js");

var _checkForErrors = __webpack_require__(/*! ./checkForErrors.js */ "./src/js/checkForErrors.js");

var _toggleValidationHint = __webpack_require__(/*! ./toggleValidationHint.js */ "./src/js/toggleValidationHint.js");

(0, _checkValidity.checkValidity)();
(0, _checkForErrors.checkForErrors)();

/***/ }),

/***/ "./src/js/toggleValidationHint.js":
/*!****************************************!*\
  !*** ./src/js/toggleValidationHint.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showValidationHint = showValidationHint;
exports.hideValidationHint = hideValidationHint;

function showValidationHint(elem) {
  var inputCntRight = elem.closest(".right-cnt") || elem.closest(".bottom-cnt");
  var errorFieldRight = inputCntRight.querySelector('.notValid');

  if (errorFieldRight === null) {
    var errorText = inputCntRight.dataset.error;
    var errorDivRight = document.createElement('div');
    errorDivRight.classList.add('notValid');
    errorDivRight.innerText = errorText;
    inputCntRight.appendChild(errorDivRight);
  }
}

function hideValidationHint(elem) {
  var inputCntRight = elem.closest('.right-cnt');
  var errorFieldRight = inputCntRight.querySelector('.notValid');

  if (errorFieldRight !== null) {
    errorFieldRight.remove();
  }
}

/***/ })

/******/ });
//# sourceMappingURL=legacy-index.js.map