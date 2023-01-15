/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/script.js */ \"./script/script.js\");\n/* harmony import */ var _script_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script_script_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.scss */ \"./style/style.scss\");\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ (() => {

eval("var domList = document.querySelector('.todo__list');\nvar input = document.querySelector('.todo__input');\nvar addButton = document.querySelector('.todo__button');\nvar list = localStorage.getItem('list');\nvar hour = 0;\nvar minute = 0;\nif (typeof list == 'string') {\n  list = list.split(',');\n}\nfunction showList() {\n  domList.innerHTML = '';\n  if (list != null) {\n    list.forEach(function (item, index) {\n      item = getTime(item);\n      domList.innerHTML += \"\\n            <div class=\\\"todo__item item\".concat(index, \"\\\">\\n                <div class=\\\"item__left\\\" onclick=\\\"crossOut(\").concat(index, \")\\\">\\n                    \").concat(++index, \". \").concat(item, \"\\n                </div>\\n                <div class=\\\"item__right\\\">\\n                    <div class=\\\"item__time\\\">\\n                        \").concat(hour, \":\").concat(minute, \"\\n                    </div>\\n                    <div class=\\\"item__delete\\\" onclick=\\\"deleteItem(\").concat(index, \")\\\">X</div>\\n                </div>\\n            </div>\");\n    });\n  } else {\n    list = [];\n  }\n}\nshowList();\nfunction addClick() {\n  if (input.value !== \"\") {\n    var date = new Date();\n    list.push(input.value + 'date' + date.getHours() + '.' + date.getMinutes());\n    localStorage.setItem('list', list);\n    addList(list.length - 1, list[list.length - 1]);\n    input.value = '';\n  }\n}\nwindow.deleteItem = function (index) {\n  list.splice(index -= 1, 1);\n  console.log(list);\n  localStorage.setItem('list', list);\n  showList();\n};\nfunction getTime(str) {\n  var i = str.lastIndexOf('date');\n  var time = str.slice(i + 4).split('.');\n  hour = time[0];\n  minute = time[1];\n  return str.slice(0, i);\n}\nfunction addList(index, item) {\n  item = getTime(item);\n  domList.innerHTML += \"\\n            <div class=\\\"todo__item item\".concat(index, \"\\\">\\n                <div class=\\\"item__left\\\" onclick=\\\"crossOut(\").concat(index, \")\\\">\\n                    \").concat(++index, \". \").concat(item, \"\\n                </div>\\n                <div class=\\\"item__right\\\">\\n                    <div class=\\\"item__time\\\">\\n                        \").concat(hour, \":\").concat(minute, \"\\n                    </div>\\n                    <div class=\\\"item__delete\\\" onclick=\\\"deleteItem(\").concat(index, \")\\\">X</div>\\n                </div>\\n            </div>\");\n}\nwindow.crossOut = function (index) {\n  document.querySelector(\".item\".concat(index)).classList.toggle('line');\n};\naddButton.addEventListener('click', addClick);\ndocument.addEventListener('keyup', function (key) {\n  if (key.key == 'Enter') {\n    addClick();\n  }\n});\n\n//# sourceURL=webpack:///./script/script.js?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;