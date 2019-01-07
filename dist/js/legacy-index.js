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

function checkValidity(elements) {
  var fieldsAreValid = {
    i: true
  };
  var bottomCnt = document.querySelector('.bottom-cnt');
  var bottom = bottomCnt.querySelector('.bottom');
  var rightCnt = document.querySelector('.right-cnt');
  var right = rightCnt.querySelector('.right');
  elements.forEach(function (elem) {
    if (elem.checkValidity()) {
      elem.classList.remove('error');
    } else {
      elem.classList.add('error');
      var errorHint = document.createElement('div');
      var errorText = right.dataset.error;
      errorHint.classList.add('notValid');
      errorHint.innerText = errorText;
      rightCnt.appendChild(errorHint);
      fieldsAreValid.i = false;
    }
  });
  return fieldsAreValid;
}

/***/ }),

/***/ "./src/js/dynamicValidation.js":
/*!*************************************!*\
  !*** ./src/js/dynamicValidation.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dynamicValidation = dynamicValidation;

var _checkValidity = __webpack_require__(/*! ./checkValidity.js */ "./src/js/checkValidity.js");

var _sendData = __webpack_require__(/*! ./sendData.js */ "./src/js/sendData.js");

function dynamicValidation() {
  var form = document.querySelector('.form');
  var inputs = form.querySelectorAll('input[required], input[type=radio], textarea[required]'); // disable default validation

  form.setAttribute('novalidate', true); //  check if every element is correct according to given pattern

  inputs.forEach(function (input) {
    input.addEventListener('input', function () {
      if (!this.checkValidity()) {
        this.classList.add('error');
      } else {
        this.classList.remove('error');
        hideValidationError(this);
      }
    });
  }); // after pressing 'submit' check if everything is correct again

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if ((0, _checkValidity.checkValidity)(inputs)) {
      (0, _sendData.sendData)();
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


var _dynamicValidation = __webpack_require__(/*! ./dynamicValidation.js */ "./src/js/dynamicValidation.js");

var _sendData = __webpack_require__(/*! ./sendData.js */ "./src/js/sendData.js");

var _checkValidity = __webpack_require__(/*! ./checkValidity.js */ "./src/js/checkValidity.js");

(0, _dynamicValidation.dynamicValidation)();

/***/ }),

/***/ "./src/js/sendData.js":
/*!****************************!*\
  !*** ./src/js/sendData.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendData = sendData;

function sendData() {
  var form = document.querySelector('.form');
  var elements = form.querySelectorAll('input:not(:disabled), textarea:not(:disabled)');
  var submit = document.querySelector('button'); // prepare data for sending

  var dataToSend = new FormData();
  elements.forEach(function (el) {
    dataToSend.append(el.name, el.value);
  }); // disable 'submit' button until data is sent

  submit.disabled = true;
  submit.classList.add = 'sendingData';
}

/***/ })

/******/ });
//# sourceMappingURL=legacy-index.js.map