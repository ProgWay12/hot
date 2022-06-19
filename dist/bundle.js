/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/index.sass":
/*!*****************************!*\
  !*** ./src/sass/index.sass ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/index.sass */ "./src/sass/index.sass");

document.querySelectorAll(".asks__list-point").forEach(function (elem, i) {
  elem.onclick = function () {
    if (elem.querySelector(".asks__point-text-wrapper").classList.contains("asks__point-text-wrapper_showed")) {
      elem.querySelector(".asks__point-text-wrapper").classList.add("asks__point-text-wrapper_hidden");
      elem.querySelector(".asks__point-text-wrapper").classList.remove("asks__point-text-wrapper_showed");
      elem.querySelector(".asks__point-title").classList.remove("asks__point-title_showed");
      elem.querySelector(".asks__point-btn").classList.remove("asks__point-btn_showed");
      elem.querySelector(".asks__point-btn").classList.add("asks__point-btn_hide");
      elem.querySelector(".asks__point-btn-vertical").classList.remove("asks__point-btn-vertical_showed");
      elem.querySelector(".asks__point-btn-horizontal").classList.remove("asks__point-btn-horizontal_showed");
    } else {
      elem.querySelector(".asks__point-text-wrapper").classList.add("asks__point-text-wrapper_showed");
      elem.querySelector(".asks__point-text-wrapper").classList.remove("asks__point-text-wrapper_hidden");
      elem.querySelector(".asks__point-title").classList.add("asks__point-title_showed");
      elem.querySelector(".asks__point-btn").classList.add("asks__point-btn_showed");
      elem.querySelector(".asks__point-btn").classList.remove("asks__point-btn_hide");
      elem.querySelector(".asks__point-btn-vertical").classList.add("asks__point-btn-vertical_showed");
      elem.querySelector(".asks__point-btn-horizontal").classList.add("asks__point-btn-horizontal_showed");
    }
  };
});
document.querySelectorAll(".about__form-selector").forEach(function (elem, i) {
  elem.onclick = function () {
    if (elem.classList.contains("about__form-selector_dropdown-showed")) {
      elem.classList.remove("about__form-selector_dropdown-showed");
      elem.classList.add("about__form-selector_dropdown-hidden");
      elem.querySelector(".about__form-selector-dropdown").classList.remove("about__form-selector-dropdown_showed");
      elem.querySelector(".about__form-selector-dropdown").classList.add("about__form-selector-dropdown_hidden");
    } else {
      if (document.getElementsByClassName("about__form-selector-dropdown_showed").length > 0) {
        document.querySelectorAll(".about__form-selector").forEach(function (selector, i) {
          if (selector.classList.contains("about__form-selector_dropdown-showed")) {
            selector.classList.remove("about__form-selector_dropdown-showed");
            selector.classList.add("about__form-selector_dropdown-hidden");
            selector.querySelector(".about__form-selector-dropdown").classList.remove("about__form-selector-dropdown_showed");
            selector.querySelector(".about__form-selector-dropdown").classList.add("about__form-selector-dropdown_hidden");
          }
        });
      }

      elem.classList.add("about__form-selector_dropdown-showed");
      elem.classList.remove("about__form-selector_dropdown-hidden");
      elem.querySelector(".about__form-selector-dropdown").classList.add("about__form-selector-dropdown_showed");
      elem.querySelector(".about__form-selector-dropdown").classList.remove("about__form-selector-dropdown_hidden");
    }
  };

  elem.querySelectorAll(".about__form-selector-dropdown-point").forEach(function (point, g) {
    point.onclick = function () {
      var new_value = point.children[0].innerText;
      elem.querySelector(".about__form-real-selector").value = new_value;
      elem.querySelector(".about__form-selector-header").innerText = new_value;
    };
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map