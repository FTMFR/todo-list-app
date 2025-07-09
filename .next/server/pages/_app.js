/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/app/store.tsx":
/*!***************************!*\
  !*** ./src/app/store.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_todoSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/todoSlice */ \"(pages-dir-node)/./src/slices/todoSlice.tsx\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        todo: _slices_todoSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9hcHAvc3RvcmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDSjtBQUV2QyxNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUNsQ0csU0FBUztRQUNQQyxNQUFNSCx5REFBV0E7SUFDbkI7QUFDRixHQUFHIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDExMFxcRGVza3RvcFxcUmVhbCBQcm9qZWN0c1xccmVhY3Qtd2VhdGhlci1hcHBcXHRvZG8tbGlzdC1hcHBcXHNyY1xcYXBwXFxzdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgdG9kb1JlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy90b2RvU2xpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICB0b2RvOiB0b2RvUmVkdWNlcixcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidG9kb1JlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJ0b2RvIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/app/store.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_GlobalStyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/GlobalStyles.scss */ \"(pages-dir-node)/./src/styles/GlobalStyles.scss\");\n/* harmony import */ var _styles_GlobalStyles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_GlobalStyles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ \"(pages-dir-node)/./src/app/store.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\110\\\\Desktop\\\\Real Projects\\\\react-weather-app\\\\todo-list-app\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n                position: \"bottom-right\",\n                toastOptions: {\n                    style: {\n                        fontSize: \"1.4rem\"\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\110\\\\Desktop\\\\Real Projects\\\\react-weather-app\\\\todo-list-app\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\110\\\\Desktop\\\\Real Projects\\\\react-weather-app\\\\todo-list-app\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0U7QUFDRjtBQUNLO0FBRzFDLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNMLGlEQUFRQTtRQUFDQyxPQUFPQSw2Q0FBS0E7OzBCQUNwQiw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0gsb0RBQU9BO2dCQUNOSSxVQUFTO2dCQUNUQyxjQUFjO29CQUNaQyxPQUFPO3dCQUNMQyxVQUFVO29CQUNaO2dCQUNGOzs7Ozs7Ozs7Ozs7QUFJUjtBQUVBLGlFQUFlTixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDExMFxcRGVza3RvcFxcUmVhbCBQcm9qZWN0c1xccmVhY3Qtd2VhdGhlci1hcHBcXHRvZG8tbGlzdC1hcHBcXHNyY1xccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9HbG9iYWxTdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPFRvYXN0ZXJcclxuICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiXHJcbiAgICAgICAgdG9hc3RPcHRpb25zPXt7XHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxLjRyZW1cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiVG9hc3RlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicG9zaXRpb24iLCJ0b2FzdE9wdGlvbnMiLCJzdHlsZSIsImZvbnRTaXplIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/slices/todoSlice.tsx":
/*!**********************************!*\
  !*** ./src/slices/todoSlice.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   todoSlice: () => (/* binding */ todoSlice),\n/* harmony export */   updateFilterStatus: () => (/* binding */ updateFilterStatus),\n/* harmony export */   updateTodo: () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_localStorageHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageHelpers */ \"(pages-dir-node)/./src/utils/localStorageHelpers.ts\");\n\n\nconst initialValue = {\n    filterStatus: \"all\",\n    todoList: (0,_utils_localStorageHelpers__WEBPACK_IMPORTED_MODULE_1__.loadTodos)()\n};\nconst todoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"todo\",\n    initialState: initialValue,\n    reducers: {\n        addTodo: (state, action)=>{\n            state.todoList.push(action.payload);\n            (0,_utils_localStorageHelpers__WEBPACK_IMPORTED_MODULE_1__.saveTodos)(state.todoList);\n        },\n        updateTodo: (state, action)=>{\n            const index = state.todoList.findIndex((t)=>t.id === action.payload.id);\n            if (index !== -1) {\n                state.todoList[index] = {\n                    ...state.todoList[index],\n                    title: action.payload.title,\n                    status: action.payload.status\n                };\n                (0,_utils_localStorageHelpers__WEBPACK_IMPORTED_MODULE_1__.saveTodos)(state.todoList);\n            }\n        },\n        deleteTodo: (state, action)=>{\n            state.todoList = state.todoList.filter((todo)=>todo.id !== action.payload);\n            (0,_utils_localStorageHelpers__WEBPACK_IMPORTED_MODULE_1__.saveTodos)(state.todoList);\n        },\n        updateFilterStatus: (state, action)=>{\n            state.filterStatus = action.payload;\n        }\n    }\n});\nconst { addTodo, updateTodo, deleteTodo, updateFilterStatus } = todoSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9zbGljZXMvdG9kb1NsaWNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0M7QUFDcUI7QUFFcEUsTUFBTUcsZUFBZTtJQUNuQkMsY0FBYztJQUNkQyxVQUFVSixxRUFBU0E7QUFDckI7QUFFTyxNQUFNSyxZQUFZTiw2REFBV0EsQ0FBQztJQUNuQ08sTUFBTTtJQUNOQyxjQUFjTDtJQUNkTSxVQUFVO1FBQ1JDLFNBQVMsQ0FBQ0MsT0FBT0M7WUFDZkQsTUFBTU4sUUFBUSxDQUFDUSxJQUFJLENBQUNELE9BQU9FLE9BQU87WUFDbENaLHFFQUFTQSxDQUFDUyxNQUFNTixRQUFRO1FBQzFCO1FBQ0FVLFlBQVksQ0FBQ0osT0FBT0M7WUFDbEIsTUFBTUksUUFBUUwsTUFBTU4sUUFBUSxDQUFDWSxTQUFTLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsRUFBRSxLQUFLUCxPQUFPRSxPQUFPLENBQUNLLEVBQUU7WUFDeEUsSUFBSUgsVUFBVSxDQUFDLEdBQUc7Z0JBQ2hCTCxNQUFNTixRQUFRLENBQUNXLE1BQU0sR0FBRztvQkFDdEIsR0FBR0wsTUFBTU4sUUFBUSxDQUFDVyxNQUFNO29CQUN4QkksT0FBT1IsT0FBT0UsT0FBTyxDQUFDTSxLQUFLO29CQUMzQkMsUUFBUVQsT0FBT0UsT0FBTyxDQUFDTyxNQUFNO2dCQUMvQjtnQkFDQW5CLHFFQUFTQSxDQUFDUyxNQUFNTixRQUFRO1lBQzFCO1FBQ0Y7UUFDQWlCLFlBQVksQ0FBQ1gsT0FBT0M7WUFDbEJELE1BQU1OLFFBQVEsR0FBR00sTUFBTU4sUUFBUSxDQUFDa0IsTUFBTSxDQUNwQyxDQUFDQyxPQUFTQSxLQUFLTCxFQUFFLEtBQUtQLE9BQU9FLE9BQU87WUFFdENaLHFFQUFTQSxDQUFDUyxNQUFNTixRQUFRO1FBQzFCO1FBQ0FvQixvQkFBb0IsQ0FBQ2QsT0FBT0M7WUFDMUJELE1BQU1QLFlBQVksR0FBR1EsT0FBT0UsT0FBTztRQUNyQztJQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRUosT0FBTyxFQUFFSyxVQUFVLEVBQUVPLFVBQVUsRUFBRUcsa0JBQWtCLEVBQUUsR0FDbEVuQixVQUFVb0IsT0FBTyxDQUFDO0FBQ3BCLGlFQUFlcEIsVUFBVXFCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFwxMTBcXERlc2t0b3BcXFJlYWwgUHJvamVjdHNcXHJlYWN0LXdlYXRoZXItYXBwXFx0b2RvLWxpc3QtYXBwXFxzcmNcXHNsaWNlc1xcdG9kb1NsaWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGxvYWRUb2Rvcywgc2F2ZVRvZG9zIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsU3RvcmFnZUhlbHBlcnNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxWYWx1ZSA9IHtcclxuICBmaWx0ZXJTdGF0dXM6IFwiYWxsXCIsXHJcbiAgdG9kb0xpc3Q6IGxvYWRUb2RvcygpLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZG9TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInRvZG9cIixcclxuICBpbml0aWFsU3RhdGU6IGluaXRpYWxWYWx1ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkVG9kbzogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudG9kb0xpc3QucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIHNhdmVUb2RvcyhzdGF0ZS50b2RvTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVG9kbzogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS50b2RvTGlzdC5maW5kSW5kZXgoKHQpID0+IHQuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHN0YXRlLnRvZG9MaXN0W2luZGV4XSA9IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnRvZG9MaXN0W2luZGV4XSxcclxuICAgICAgICAgIHRpdGxlOiBhY3Rpb24ucGF5bG9hZC50aXRsZSxcclxuICAgICAgICAgIHN0YXR1czogYWN0aW9uLnBheWxvYWQuc3RhdHVzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2F2ZVRvZG9zKHN0YXRlLnRvZG9MaXN0KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlbGV0ZVRvZG86IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRvZG9MaXN0ID0gc3RhdGUudG9kb0xpc3QuZmlsdGVyKFxyXG4gICAgICAgICh0b2RvKSA9PiB0b2RvLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgICBzYXZlVG9kb3Moc3RhdGUudG9kb0xpc3QpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUZpbHRlclN0YXR1czogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZmlsdGVyU3RhdHVzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWRkVG9kbywgdXBkYXRlVG9kbywgZGVsZXRlVG9kbywgdXBkYXRlRmlsdGVyU3RhdHVzIH0gPVxyXG4gIHRvZG9TbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB0b2RvU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwibG9hZFRvZG9zIiwic2F2ZVRvZG9zIiwiaW5pdGlhbFZhbHVlIiwiZmlsdGVyU3RhdHVzIiwidG9kb0xpc3QiLCJ0b2RvU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJhZGRUb2RvIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsInVwZGF0ZVRvZG8iLCJpbmRleCIsImZpbmRJbmRleCIsInQiLCJpZCIsInRpdGxlIiwic3RhdHVzIiwiZGVsZXRlVG9kbyIsImZpbHRlciIsInRvZG8iLCJ1cGRhdGVGaWx0ZXJTdGF0dXMiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/slices/todoSlice.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/GlobalStyles.scss":
/*!**************************************!*\
  !*** ./src/styles/GlobalStyles.scss ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/utils/localStorageHelpers.ts":
/*!******************************************!*\
  !*** ./src/utils/localStorageHelpers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTodos: () => (/* binding */ loadTodos),\n/* harmony export */   saveTodos: () => (/* binding */ saveTodos)\n/* harmony export */ });\nconst loadTodos = ()=>{\n    if (false) {}\n    return [];\n};\nconst saveTodos = (todos)=>{\n    if (false) {}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy91dGlscy9sb2NhbFN0b3JhZ2VIZWxwZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsWUFBWTtJQUN2QixJQUFJLEtBQTZCLEVBQUUsRUFHbEM7SUFDRCxPQUFPLEVBQUU7QUFDWCxFQUFFO0FBRUssTUFBTU0sWUFBWSxDQUFDTDtJQUN4QixJQUFJLEtBQTZCLEVBQUUsRUFFbEM7QUFDSCxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDExMFxcRGVza3RvcFxcUmVhbCBQcm9qZWN0c1xccmVhY3Qtd2VhdGhlci1hcHBcXHRvZG8tbGlzdC1hcHBcXHNyY1xcdXRpbHNcXGxvY2FsU3RvcmFnZUhlbHBlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvYWRUb2RvcyA9ICgpOiBhbnlbXSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNvbnN0IHRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKTtcclxuICAgIHJldHVybiB0b2RvcyA/IEpTT04ucGFyc2UodG9kb3MpIDogW107XHJcbiAgfVxyXG4gIHJldHVybiBbXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlVG9kb3MgPSAodG9kb3M6IGFueVtdKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJsb2FkVG9kb3MiLCJ0b2RvcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzYXZlVG9kb3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/utils/localStorageHelpers.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();