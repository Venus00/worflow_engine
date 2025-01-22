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
                __exportStar(__webpack_require__(/*! ./nodes/Add */ "./nodes/Add.ts"), exports);
                // export  * from './nodes/Minus'
                //export  * from './nodes/Request'
                // export  * from './nodes/Number'
                // export  * from './nodes/Delay'


                /***/
}),

    /***/ "./nodes/Add.ts":
    /*!**********************!*\
      !*** ./nodes/Add.ts ***!
      \**********************/
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
                class ADD extends IBaseNode_1.IBaseNode {
                    constructor(name) {
                        const inputs = ["number", "number"];
                        super(name, { inputs });
                        this.log("node ADD inited Succefully");
                    }
                    run(input1, input2) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const result = input1 + input2;
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
                exports["default"] = ADD;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZC1Ob2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsbUNBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0IsbUJBQU8sQ0FBQyxnREFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ2hDRjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQ0FBZ0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVSxJQUFJLFFBQVE7QUFDN0M7QUFDQTtBQUNBLGlDQUFpQyxLQUFLLGVBQWUsS0FBSztBQUMxRDtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7O1VDaERqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3IvLi9tYWluLnRzIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yLy4vbm9kZXMvQWRkLnRzIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yLy4vdXRpbHMvSUJhc2VOb2RlLnRzIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3Ivd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25vZGVfZ2VuZXJhdG9yL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL25vZGVzL0FkZFwiKSwgZXhwb3J0cyk7XG4vLyBleHBvcnQgICogZnJvbSAnLi9ub2Rlcy9NaW51cydcbi8vZXhwb3J0ICAqIGZyb20gJy4vbm9kZXMvUmVxdWVzdCdcbi8vIGV4cG9ydCAgKiBmcm9tICcuL25vZGVzL051bWJlcidcbi8vIGV4cG9ydCAgKiBmcm9tICcuL25vZGVzL0RlbGF5J1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElCYXNlTm9kZV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL0lCYXNlTm9kZVwiKTtcbmNsYXNzIEFERCBleHRlbmRzIElCYXNlTm9kZV8xLklCYXNlTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBbXCJudW1iZXJcIiwgXCJudW1iZXJcIl07XG4gICAgICAgIHN1cGVyKG5hbWUsIHsgaW5wdXRzIH0pO1xuICAgICAgICB0aGlzLmxvZyhcIm5vZGUgQUREIGluaXRlZCBTdWNjZWZ1bGx5XCIpO1xuICAgIH1cbiAgICBydW4oaW5wdXQxLCBpbnB1dDIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGlucHV0MSArIGlucHV0MjtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gMilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGlzTmFOKGFyZ3NbMF0pIHx8IGlzTmFOKGFyZ3NbMV0pKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBREQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JQmFzZU5vZGUgPSB2b2lkIDA7XG5jbGFzcyBJQmFzZU5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgcnVuKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgfSk7XG4gICAgfVxuICAgIHZhbGlkYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGV4ZWN1dGUocmFtKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHJhbS50YWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJncy5yZXZlcnNlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSguLi5hcmdzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHRoaXMucnVuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHJhbS5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKDUwMCwgXCJpbnZhbGlkIGFyZ3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfTpbJHttZXNzYWdlfV1gKTtcbiAgICB9XG4gICAgZXJyb3IoY29kZSwgdGV4dCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBjb2RlIDogWyR7Y29kZX1dIG1lc3NhZ2UgOiBbJHt0ZXh0fV1gKTtcbiAgICB9XG59XG5leHBvcnRzLklCYXNlTm9kZSA9IElCYXNlTm9kZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=