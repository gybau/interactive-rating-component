"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Rating */ \"./components/Rating.js\");\n/* harmony import */ var _components_thankyou__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/thankyou */ \"./components/thankyou.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction HomePage() {\n    _s();\n    const [isSubmitted, setIsSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentNumber, setCurrentNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function handleChoice(e) {\n        const currentNumber = e.target.innerTEXT;\n        console.log(currentNumber);\n    // setCurrentNumber(number);\n    }\n    function handleSubmit() {\n        setIsSubmitted(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: isSubmitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_thankyou__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            currentNumber: currentNumber\n        }, void 0, false, {\n            fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/pages/index.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rating__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            handleChoice: handleChoice,\n            handleSubmit: handleSubmit,\n            number: currentNumber,\n            disabled: !isSubmitted\n        }, void 0, false, {\n            fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/pages/index.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"vzL2tWuUZtcpCAt3S+Bjh+Lw2mY=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUztBQUNJO0FBRS9CLFNBQVNHLFdBQVc7O0lBQ2pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDLElBQUk7SUFFdkQsU0FBU1EsYUFBYUMsQ0FBQyxFQUFFO1FBQ3ZCLE1BQU1ILGdCQUFnQkcsRUFBRUMsTUFBTSxDQUFDQyxTQUFTO1FBQ3hDQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1osNEJBQTRCO0lBQzlCO0lBRUEsU0FBU1EsZUFBZTtRQUN0QlQsZUFBZSxJQUFJO0lBQ3JCO0lBRUEscUJBQ0UsOERBQUNVO2tCQUNFWCw0QkFDQyw4REFBQ0YsNERBQVFBO1lBQUNJLGVBQWVBOzs7OztpQ0FFekIsOERBQUNMLDBEQUFNQTtZQUNMTyxjQUFjQTtZQUNkTSxjQUFjQTtZQUNkRSxRQUFRVjtZQUNSVyxVQUFVLENBQUNiOzs7OztnQkFFZDs7Ozs7O0FBR1AsQ0FBQztHQTVCdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYXRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmF0aW5nXCI7XG5pbXBvcnQgVGhhbmtZb3UgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhhbmt5b3VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0SXNTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VycmVudE51bWJlciwgc2V0Q3VycmVudE51bWJlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaG9pY2UoZSkge1xuICAgIGNvbnN0IGN1cnJlbnROdW1iZXIgPSBlLnRhcmdldC5pbm5lclRFWFQ7XG4gICAgY29uc29sZS5sb2coY3VycmVudE51bWJlcik7XG4gICAgLy8gc2V0Q3VycmVudE51bWJlcihudW1iZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIHtpc1N1Ym1pdHRlZCA/IChcbiAgICAgICAgPFRoYW5rWW91IGN1cnJlbnROdW1iZXI9e2N1cnJlbnROdW1iZXJ9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8UmF0aW5nXG4gICAgICAgICAgaGFuZGxlQ2hvaWNlPXtoYW5kbGVDaG9pY2V9XG4gICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgbnVtYmVyPXtjdXJyZW50TnVtYmVyfVxuICAgICAgICAgIGRpc2FibGVkPXshaXNTdWJtaXR0ZWR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJhdGluZyIsIlRoYW5rWW91IiwiSG9tZVBhZ2UiLCJpc1N1Ym1pdHRlZCIsInNldElzU3VibWl0dGVkIiwiY3VycmVudE51bWJlciIsInNldEN1cnJlbnROdW1iZXIiLCJoYW5kbGVDaG9pY2UiLCJlIiwidGFyZ2V0IiwiaW5uZXJURVhUIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsIm1haW4iLCJudW1iZXIiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});