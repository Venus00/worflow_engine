/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                        desc = { enumerable: true, get: function () { return m[k]; } };
                    }
                    Object.defineProperty(o, k2, desc);
                }) : (function (o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                }));
                var __exportStar = (this && this.__exportStar) || function (m, exports) {
                    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                //export  * from './nodes/Add'
                __exportStar(__webpack_require__(/*! ./nodes/Minus */ "./nodes/Minus.ts"), exports);
                //export  * from './nodes/Request'
                // export  * from './nodes/Number'
                // export  * from './nodes/Delay'


                /***/
}),

    /***/ "./nodes/Minus.ts":
    /*!************************!*\
      !*** ./nodes/Minus.ts ***!
      \************************/
    /***/ (function (__unused_webpack_module, exports, __webpack_require__) {


                var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
                    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                const IBaseNode_1 = __webpack_require__(/*! ../utils/IBaseNode */ "./utils/IBaseNode.ts");
                class Minus extends IBaseNode_1.IBaseNode {
                    constructor(name) {
                        const options = {
                            inputs: ["number", "number"]
                        };
                        super(name, options);
                        this.log("node Minus inited Succefully");
                    }
                    run(input1, input2) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = input1 - input2;
                            return result;
                        });
                    }
                    validate(...args) {
                        if (args.length !== 2)
                            return false;
                        if (isNaN(args[0]) || isNaN(args[1]))
                            return false;
                        return true;
                    }
                }
                exports["default"] = Minus;


                /***/
}),

    /***/ "./utils/IBaseNode.ts":
    /*!****************************!*\
      !*** ./utils/IBaseNode.ts ***!
      \****************************/
    /***/ (function (__unused_webpack_module, exports) {


                var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
                    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.IBaseNode = void 0;
                class IBaseNode {
                    constructor(name, options) {
                        this.name = name;
                        this.options = options;
                    }
                    run(...args) {
                        return __awaiter(this, void 0, void 0, function* () { });
                    }
                    validate(...args) {
                        return true;
                    }
                    execute(ram) {
                        return __awaiter(this, void 0, void 0, function* () {
                            let args = [];
                            for (let i = 0; i < this.options.inputs.length; i++) {
                                args.push(ram.take());
                            }
                            args.reverse();
                            if (this.validate(...args)) {
                                const result = yield this.run(...args);
                                if (result)
                                    ram.push(result);
                            }
                            else {
                                this.error(500, "invalid args");
                                return [];
                            }
                        });
                    }
                    log(message) {
                        console.log(`${this.name}:[${message}]`);
                    }
                    error(code, text) {
                        console.error(`code : [${code}] message : [${text}]`);
                    }
                }
                exports.IBaseNode = IBaseNode;


                /***/
})

        /******/
});
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
            /******/
}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
            /******/
};
    /******/
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
        /******/
}
    /******/
    /************************************************************************/
    /******/
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module is referenced by other modules so it can't be inlined
    /******/ 	var __webpack_exports__ = __webpack_require__("./main.ts");
    /******/
    /******/
})()
    ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZC1Ob2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBZTtBQUNwQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0IsbUJBQU8sQ0FBQyxnREFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ2xDRjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQ0FBZ0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVSxJQUFJLFFBQVE7QUFDN0M7QUFDQTtBQUNBLGlDQUFpQyxLQUFLLGVBQWUsS0FBSztBQUMxRDtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7O1VDaERqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3IvLi9tYWluLnRzIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yLy4vbm9kZXMvTWludXMudHMiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3IvLi91dGlscy9JQmFzZU5vZGUudHMiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3Ivd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ub2RlX2dlbmVyYXRvci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3Ivd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vL2V4cG9ydCAgKiBmcm9tICcuL25vZGVzL0FkZCdcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9ub2Rlcy9NaW51c1wiKSwgZXhwb3J0cyk7XG4vL2V4cG9ydCAgKiBmcm9tICcuL25vZGVzL1JlcXVlc3QnXG4vLyBleHBvcnQgICogZnJvbSAnLi9ub2Rlcy9OdW1iZXInXG4vLyBleHBvcnQgICogZnJvbSAnLi9ub2Rlcy9EZWxheSdcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQmFzZU5vZGVfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9JQmFzZU5vZGVcIik7XG5jbGFzcyBNaW51cyBleHRlbmRzIElCYXNlTm9kZV8xLklCYXNlTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgaW5wdXRzOiBbXCJudW1iZXJcIiwgXCJudW1iZXJcIl1cbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMubG9nKFwibm9kZSBNaW51cyBpbml0ZWQgU3VjY2VmdWxseVwiKTtcbiAgICB9XG4gICAgcnVuKGlucHV0MSwgaW5wdXQyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBpbnB1dDEgLSBpbnB1dDI7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFsaWRhdGUoLi4uYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IDIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChpc05hTihhcmdzWzBdKSB8fCBpc05hTihhcmdzWzFdKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWludXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JQmFzZU5vZGUgPSB2b2lkIDA7XG5jbGFzcyBJQmFzZU5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgcnVuKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgfSk7XG4gICAgfVxuICAgIHZhbGlkYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGV4ZWN1dGUocmFtKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHJhbS50YWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJncy5yZXZlcnNlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSguLi5hcmdzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHRoaXMucnVuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHJhbS5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKDUwMCwgXCJpbnZhbGlkIGFyZ3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfTpbJHttZXNzYWdlfV1gKTtcbiAgICB9XG4gICAgZXJyb3IoY29kZSwgdGV4dCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBjb2RlIDogWyR7Y29kZX1dIG1lc3NhZ2UgOiBbJHt0ZXh0fV1gKTtcbiAgICB9XG59XG5leHBvcnRzLklCYXNlTm9kZSA9IElCYXNlTm9kZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=