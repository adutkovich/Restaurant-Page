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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePageContent(){\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const pageHeader = document.createElement('h1');\n    pageHeader.classList.add('pageHeader');\n    home.appendChild(pageHeader);\n    pageHeader.textContent = 'Welcome to Pizza Place!';\n    \n    const homeTextOne = document.createElement('div');\n    homeTextOne.classList.add('homeTextOne');\n    homeTextOne.innerHTML = 'Pizza Place has been feeding its community since 1983! <br> Come on by for a delicious slice so we can happily keep serving our great community!'\n    home.appendChild(homeTextOne)\n\n    const homeTextTwo = document.createElement('h3');\n    homeTextTwo.classList.add('homeTextTwo');\n    homeTextTwo.textContent = 'Our hours:'\n    home.appendChild(homeTextTwo);\n\n    const hours = document.createElement('div');\n    hours.classList.add('hours');\n    hours.innerHTML = 'Sunday: 10:00 AM - 10:00 PM <br> Monday: 10:00 AM - 10:00 PM <br> Tuesday: 10:00 AM - 10:00 PM <br> Wednesday: 10:00 AM - 10:00 PM <br> Thursday: 10:00 AM - 10:00 PM <br> Friday: 10:00 AM - 11:00 PM <br> Saturday 10:00 AM - 10:00 PM <br> '\n    home.appendChild(hours);\n\n    const locationText = document.createElement('div');\n    locationText.classList.add('locationText');\n    home.appendChild(locationText);\n    locationText.textContent = 'We are currently located at 123 Main St., Where-Ever Land';\n\n    return home\n}\n\n\nfunction homePage(){\n    const content = document.querySelector('.content');\n    content.textContent = '';\n    content.appendChild(homePageContent());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n// Main index page | Base items that will not change\nconst body = document.querySelector('body');\n\nconst header = document.createElement('div');\nheader.classList.add('header');\nbody.appendChild(header);\n\nconst companyName = document.createElement('h1');\ncompanyName.textContent = 'Pizza Place';\ncompanyName.classList.add('companyName');\nheader.appendChild(companyName);\n\nconst navButtonBar = document.createElement('div');\nnavButtonBar.classList.add('navButtonBar');\nheader.appendChild(navButtonBar);\nheader.appendChild(navButtonBar);\n\nconst homeButton = document.createElement('button');\nhomeButton.textContent = 'Home';\nhomeButton.classList.add('navButton');\nnavButtonBar.appendChild(homeButton);\nhomeButton.addEventListener('click', function(){\n    //imported Home file function here\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n} )\n\nconst menuButton = document.createElement('button');\nmenuButton.textContent = 'Menu';\nmenuButton.classList.add('navButton');\nnavButtonBar.appendChild(menuButton);\nmenuButton.addEventListener('click', function(){\n    //imported Menu file function here\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\nconst aboutButton = document.createElement('button');\naboutButton.textContent = 'About Us';\naboutButton.classList.add('navButton');\nnavButtonBar.appendChild(aboutButton);\naboutButton.addEventListener('click', function(){\n    //imported About Us file function here\n    (0,_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\nconst content = document.createElement('div');\ncontent.classList.add('content');\nbody.appendChild(content);\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction infoPageContent(){\n    const info = document.createElement('div');\n    info.classList.add('info');\n\n    const pageHeader = document.createElement('h1');\n    pageHeader.classList.add('pageHeader');\n    info.appendChild(pageHeader);\n    pageHeader.textContent = 'Learn About Us!';\n    \n    const infoTextOne = document.createElement('p');\n    infoTextOne.classList.add('infoTextOne');\n    infoTextOne.textContent = 'Pizza Place has been a dream of the owners since they day they were born. It was a dream that they strived for with every bit of energy they had. They gave up family, friends, their own respect, just to open a pizza place. To be able to create homemade pizzas in a nice stone oven,  the perfect pizza, was just too good to not bring into this small town. Now that it\\'s here it is doing better than anyone ever expected, everyone as in the people who didn\\'t get cut off at least.';\n    info.appendChild(infoTextOne);\n\n    const contactInfo = document.createElement('p');\n    contactInfo.classList.add('contactInfo');\n    contactInfo.textContent = 'Our number for your ordering needs!';\n    info.appendChild(contactInfo);\n    const number = document.createElement('div');\n    number.classList.add('pNumber');\n    number.textContent = '1-800-111-2222';\n    contactInfo.appendChild(number);\n\n    return info\n}\n\n\nfunction infoPage(){\n    const content = document.querySelector('.content');\n    content.textContent = '';\n    content.appendChild(infoPageContent());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (infoPage);\n\n//# sourceURL=webpack://restaurant-page/./src/info.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPageContent(){\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    const pageHeader = document.createElement('h1');\n    pageHeader.classList.add('pageHeader');\n    menu.appendChild(pageHeader);\n    pageHeader.textContent = 'Our Menu';\n\n    const menuGrid = document.createElement('div');\n    menuGrid.classList.add('menuGrid');\n    menu.appendChild(menuGrid);\n\n    menuGrid.appendChild(menuItem('Alfredo Pizza','Alfredo sauce pizza, add any toppings'));\n    menuGrid.appendChild(menuItem('Beans','Cold Beans.'));\n    menuGrid.appendChild(menuItem('Chicken Tenders','Beer battered chicken  tenders, yum.'));\n    menuGrid.appendChild(menuItem('Hawaiian Pizza','Gross, do better.'));\n    menuGrid.appendChild(menuItem('Meatball Sub','Homemade meatballs served on a toasted garlic bread'));\n    menuGrid.appendChild(menuItem('Pasta','Farfalle pasta with your choice of alfredo or tomato sauce'));\n    \n    return menu\n}\n\nfunction menuItem(name, ingredients){\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menuCell');\n\n    const menuItemName = document.createElement('div');\n    menuItemName.classList.add('itemName');\n    menuItemName.textContent = name;\n\n    const menuItemIngredients = document.createElement('div');\n    menuItemIngredients.classList.add('itemIngredients');\n    menuItemIngredients.textContent = ingredients;\n\n    const menuItemImage = document.createElement('img');\n    menuItemImage.classList.add('itemImage')\n    menuItemImage.src = `imgs/${name.toLowerCase()}.png`;\n    menuItemImage.alt = `${name}`;\n\n    menuItem.appendChild(menuItemName);\n    menuItem.appendChild(menuItemIngredients);\n    menuItem.appendChild(menuItemImage);\n\n    return menuItem;\n}\n\nfunction menuPage(){\n    const content = document.querySelector('.content');\n    content.textContent = '';\n    content.appendChild(menuPageContent());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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