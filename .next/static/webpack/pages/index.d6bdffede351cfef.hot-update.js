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

/***/ "./components/Rating.js":
/*!******************************!*\
  !*** ./components/Rating.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Rating; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Rating(param) {\n    let { currentNumber , handleChoice , handleSubmit , disabled  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rating-card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-small\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    width: \"17\",\n                    height: \"16\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z\",\n                        fill: \"#FC7614\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How did we do?\"\n            }, void 0, false, {\n                fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!\"\n            }, void 0, false, {\n                fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-small \".concat(currentNumber === 1 ? \"btn-active\" : null),\n                        onClick: handleChoice,\n                        children: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-small \".concat(currentNumber === 2 ? \"btn-active\" : null),\n                        onClick: handleChoice,\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-small \".concat(currentNumber === 3 ? \"btn-active\" : null),\n                        onClick: handleChoice,\n                        children: \"3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-small \".concat(currentNumber === 4 ? \"btn-active\" : null),\n                        onClick: handleChoice,\n                        children: \"4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-small \".concat(currentNumber === 5 ? \"btn-active\" : null),\n                        onClick: handleChoice,\n                        children: \"5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-large\",\n                onClick: handleSubmit,\n                disabled: disabled,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michalganiebny/Developer/Web/Frontend Mentor/interactive-rating-component/components/Rating.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Rating;\nvar _c;\n$RefreshReg$(_c, \"Rating\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JhdGluZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsT0FBTyxLQUs5QixFQUFFO1FBTDRCLEVBQzdCQyxjQUFhLEVBQ2JDLGFBQVksRUFDWkMsYUFBWSxFQUNaQyxTQUFRLEVBQ1QsR0FMOEI7SUFNN0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0QsV0FBVTswQkFDaEIsNEVBQUNFO29CQUFJQyxPQUFNO29CQUFLQyxRQUFPO29CQUFLQyxPQUFNOzhCQUNoQyw0RUFBQ0M7d0JBQ0NDLEdBQUU7d0JBQ0ZDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1gsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBSUgsOERBQUNYO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NELFdBQVcsaUJBRVYsT0FEQ0wsa0JBQWtCLElBQUksZUFBZSxJQUFJO3dCQUUzQ2dCLFNBQVNmO2tDQUNWOzs7Ozs7a0NBR0QsOERBQUNLO3dCQUNDRCxXQUFXLGlCQUVWLE9BRENMLGtCQUFrQixJQUFJLGVBQWUsSUFBSTt3QkFFM0NnQixTQUFTZjtrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDSzt3QkFDQ0QsV0FBVyxpQkFFVixPQURDTCxrQkFBa0IsSUFBSSxlQUFlLElBQUk7d0JBRTNDZ0IsU0FBU2Y7a0NBQ1Y7Ozs7OztrQ0FHRCw4REFBQ0s7d0JBQ0NELFdBQVcsaUJBRVYsT0FEQ0wsa0JBQWtCLElBQUksZUFBZSxJQUFJO3dCQUUzQ2dCLFNBQVNmO2tDQUNWOzs7Ozs7a0NBR0QsOERBQUNLO3dCQUNDRCxXQUFXLGlCQUVWLE9BRENMLGtCQUFrQixJQUFJLGVBQWUsSUFBSTt3QkFFM0NnQixTQUFTZjtrQ0FDVjs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDSztnQkFDQ0QsV0FBVTtnQkFDVlcsU0FBU2Q7Z0JBQ1RDLFVBQVVBOzBCQUNYOzs7Ozs7Ozs7Ozs7QUFLUCxDQUFDO0tBekV1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmcuanM/ODFiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYXRpbmcoe1xuICBjdXJyZW50TnVtYmVyLFxuICBoYW5kbGVDaG9pY2UsXG4gIGhhbmRsZVN1Ym1pdCxcbiAgZGlzYWJsZWQsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctY2FyZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsXCI+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwibTkuMDY3LjQzIDEuOTkgNC4wMzFjLjExMi4yMjguMzMuMzg2LjU4LjQyMmw0LjQ1LjY0N2EuNzcyLjc3MiAwIDAgMSAuNDI3IDEuMzE2bC0zLjIyIDMuMTM4YS43NzMuNzczIDAgMCAwLS4yMjIuNjgzbC43NiA0LjQzMWEuNzcyLjc3MiAwIDAgMS0xLjEyLjgxM2wtMy45OC0yLjA5MmEuNzczLjc3MyAwIDAgMC0uNzE4IDBsLTMuOTggMi4wOTJhLjc3Mi43NzIgMCAwIDEtMS4xMTktLjgxM2wuNzYtNC40MzFhLjc3Ljc3IDAgMCAwLS4yMjItLjY4M0wuMjMzIDYuODQ2QS43NzIuNzcyIDAgMCAxIC42NjEgNS41M2w0LjQ0OS0uNjQ3YS43NzIuNzcyIDAgMCAwIC41OC0uNDIyTDcuNjguNDNhLjc3NC43NzQgMCAwIDEgMS4zODcgMFpcIlxuICAgICAgICAgICAgZmlsbD1cIiNGQzc2MTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxoMT5Ib3cgZGlkIHdlIGRvPzwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgUGxlYXNlIGxldCB1cyBrbm93IGhvdyB3ZSBkaWQgd2l0aCB5b3VyIHN1cHBvcnQgcmVxdWVzdC4gQWxsIGZlZWRiYWNrIGlzXG4gICAgICAgIGFwcHJlY2lhdGVkIHRvIGhlbHAgdXMgaW1wcm92ZSBvdXIgb2ZmZXJpbmchXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1yb3dcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc21hbGwgJHtcbiAgICAgICAgICAgIGN1cnJlbnROdW1iZXIgPT09IDEgPyBcImJ0bi1hY3RpdmVcIiA6IG51bGxcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaG9pY2V9XG4gICAgICAgID5cbiAgICAgICAgICAxXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zbWFsbCAke1xuICAgICAgICAgICAgY3VycmVudE51bWJlciA9PT0gMiA/IFwiYnRuLWFjdGl2ZVwiIDogbnVsbFxuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNob2ljZX1cbiAgICAgICAgPlxuICAgICAgICAgIDJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNtYWxsICR7XG4gICAgICAgICAgICBjdXJyZW50TnVtYmVyID09PSAzID8gXCJidG4tYWN0aXZlXCIgOiBudWxsXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2hvaWNlfVxuICAgICAgICA+XG4gICAgICAgICAgM1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc21hbGwgJHtcbiAgICAgICAgICAgIGN1cnJlbnROdW1iZXIgPT09IDQgPyBcImJ0bi1hY3RpdmVcIiA6IG51bGxcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaG9pY2V9XG4gICAgICAgID5cbiAgICAgICAgICA0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zbWFsbCAke1xuICAgICAgICAgICAgY3VycmVudE51bWJlciA9PT0gNSA/IFwiYnRuLWFjdGl2ZVwiIDogbnVsbFxuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNob2ljZX1cbiAgICAgICAgPlxuICAgICAgICAgIDVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sYXJnZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJhdGluZyIsImN1cnJlbnROdW1iZXIiLCJoYW5kbGVDaG9pY2UiLCJoYW5kbGVTdWJtaXQiLCJkaXNhYmxlZCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0IiwieG1sbnMiLCJwYXRoIiwiZCIsImZpbGwiLCJoMSIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Rating.js\n"));

/***/ })

});