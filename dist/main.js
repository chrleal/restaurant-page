/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n    const mainContent = document.querySelector('.mainContent');\n    const mainLeft = document.createElement('div');\n    const mainRight = document.createElement('div');\n    mainLeft.classList.add('mainLeft');\n    mainRight.classList.add('mainRight');\n    mainContent.appendChild(mainLeft);\n    mainContent.appendChild(mainRight);\n\n    const title = document.createElement('h1');\n    const subtitle = document.createElement('h6');\n    const imgRight = document.createElement('img');\n    const imgLeft = document.createElement('img');\n    const quote = document.createElement('div');\n    const quote2 = document.createElement('div');\n    quote.classList.add('quote');\n    quote2.classList.add('name');\n    quote.textContent = '\"Hasta la victoria siempre\"'\n    quote2.textContent = \"—Ernesto Che Guevara\"\n    imgRight.classList.add('imgRight');\n    imgLeft.classList.add('imgLeft');\n    title.textContent = 'GUERILLA!';\n    subtitle.textContent = 'REVOLUTIONARY FOOD'\n    imgRight.src = \"images/che.svg\";\n    imgLeft.src = \"images/star.svg\";\n    mainLeft.appendChild(title);\n    mainLeft.appendChild(subtitle);\n    mainLeft.appendChild(imgLeft);\n    mainRight.appendChild(imgRight);\n    mainRight.appendChild(quote);\n    mainRight.appendChild(quote2);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\nconsole.log(\"OK!\");\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createMain)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createMain\": () => (/* binding */ createMain)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nfunction createHeader() {\n    const content = document.getElementById('content');\n    const header = document.createElement(\"header\");\n    const headerLeft = document.createElement('div');\n    const headerRight = document.createElement('div');\n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n    headerLeft.classList.add('headerLeft');\n    headerRight.classList.add('headerRight');\n    homeBtn.textContent = \"HOME\";\n    menuBtn.textContent = \"MENU\";\n    contactBtn.textContent = \"CONTACT\";\n    content.appendChild(header);\n    header.appendChild(headerLeft);\n    header.appendChild(headerRight);\n    headerRight.appendChild(homeBtn);\n    headerRight.appendChild(menuBtn);\n    headerRight.appendChild(contactBtn);\n}\n\nfunction createMain() {\n    const content = document.getElementById('content');\n    const main = document.createElement('main');\n    const mainContent = document.createElement('div')\n    mainContent.classList.add('mainContent')\n    content.appendChild(main)\n    main.appendChild(mainContent);\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;