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
                //export  * from './nodes/Minus'
                //export  * from './nodes/Request'
                // export  * from './nodes/Number'
                __exportStar(__webpack_require__(/*! ./nodes/Delay */ "./nodes/Delay.ts"), exports);


                /***/
}),

    /***/ "./nodes/Delay.ts":
    /*!************************!*\
      !*** ./nodes/Delay.ts ***!
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
                class Delay extends IBaseNode_1.IBaseNode {
                    constructor(name, properties) {
                        const options = {
                            inputs: []
                        };
                        super(name, options);
                        this.timeout = properties.timeout;
                        this.log("node Delay inited Succefully");
                    }
                    run(input1, input2) {
                        return __awaiter(this, void 0, void 0, function* () {
                            return new Promise((res) => {
                                setTimeout(() => {
                                    res();
                                }, this.timeout);
                            });
                        });
                    }
                    validate(...args) {
                        return true;
                    }
                }
                exports["default"] = Delay;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZC1Ob2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBZTs7Ozs7Ozs7Ozs7QUNwQnZCO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0IsbUJBQU8sQ0FBQyxnREFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNsQ0Y7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0NBQWdDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLFVBQVUsSUFBSSxRQUFRO0FBQzdDO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSyxlQUFlLEtBQUs7QUFDMUQ7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7OztVQ2hEakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGVfZ2VuZXJhdG9yLy4vbWFpbi50cyIsIndlYnBhY2s6Ly9ub2RlX2dlbmVyYXRvci8uL25vZGVzL0RlbGF5LnRzIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yLy4vdXRpbHMvSUJhc2VOb2RlLnRzIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3Ivd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy9leHBvcnQgICogZnJvbSAnLi9ub2Rlcy9BZGQnXG4vL2V4cG9ydCAgKiBmcm9tICcuL25vZGVzL01pbnVzJ1xuLy9leHBvcnQgICogZnJvbSAnLi9ub2Rlcy9SZXF1ZXN0J1xuLy8gZXhwb3J0ICAqIGZyb20gJy4vbm9kZXMvTnVtYmVyJ1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL25vZGVzL0RlbGF5XCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQmFzZU5vZGVfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9JQmFzZU5vZGVcIik7XG5jbGFzcyBEZWxheSBleHRlbmRzIElCYXNlTm9kZV8xLklCYXNlTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvcGVydGllcykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgaW5wdXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBzdXBlcihuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gcHJvcGVydGllcy50aW1lb3V0O1xuICAgICAgICB0aGlzLmxvZyhcIm5vZGUgRGVsYXkgaW5pdGVkIFN1Y2NlZnVsbHlcIik7XG4gICAgfVxuICAgIHJ1bihpbnB1dDEsIGlucHV0Mikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFsaWRhdGUoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEZWxheTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklCYXNlTm9kZSA9IHZvaWQgMDtcbmNsYXNzIElCYXNlTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBydW4oLi4uYXJncykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyB9KTtcbiAgICB9XG4gICAgdmFsaWRhdGUoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZXhlY3V0ZShyYW0pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2gocmFtLnRha2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKC4uLmFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgdGhpcy5ydW4oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmFtLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoNTAwLCBcImludmFsaWQgYXJnc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9Olske21lc3NhZ2V9XWApO1xuICAgIH1cbiAgICBlcnJvcihjb2RlLCB0ZXh0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGNvZGUgOiBbJHtjb2RlfV0gbWVzc2FnZSA6IFske3RleHR9XWApO1xuICAgIH1cbn1cbmV4cG9ydHMuSUJhc2VOb2RlID0gSUJhc2VOb2RlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==