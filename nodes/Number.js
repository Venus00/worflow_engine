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
                __exportStar(__webpack_require__(/*! ./nodes/Number */ "./nodes/Number.ts"), exports);
                // export  * from './nodes/Delay'


                /***/
}),

    /***/ "./nodes/Number.ts":
    /*!*************************!*\
      !*** ./nodes/Number.ts ***!
      \*************************/
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
                class Number extends IBaseNode_1.IBaseNode {
                    constructor(name) {
                        const options = {
                            inputs: []
                        };
                        super(name, options);
                        this.log("node Number inited Succefully");
                    }
                    run() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const number = Math.floor(Math.random() * 100);
                            return number;
                        });
                    }
                    validate() {
                        return true;
                    }
                }
                exports["default"] = Number;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZC1Ob2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMseUNBQWdCO0FBQ3JDOzs7Ozs7Ozs7OztBQ3BCYTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLG1CQUFPLENBQUMsZ0RBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDOUJGO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1QixVQUFVLElBQUksUUFBUTtBQUM3QztBQUNBO0FBQ0EsaUNBQWlDLEtBQUssZUFBZSxLQUFLO0FBQzFEO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7VUNoRGpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlX2dlbmVyYXRvci8uL21haW4udHMiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3IvLi9ub2Rlcy9OdW1iZXIudHMiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3IvLi91dGlscy9JQmFzZU5vZGUudHMiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3Ivd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ub2RlX2dlbmVyYXRvci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbm9kZV9nZW5lcmF0b3Ivd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vL2V4cG9ydCAgKiBmcm9tICcuL25vZGVzL0FkZCdcbi8vZXhwb3J0ICAqIGZyb20gJy4vbm9kZXMvTWludXMnXG4vL2V4cG9ydCAgKiBmcm9tICcuL25vZGVzL1JlcXVlc3QnXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbm9kZXMvTnVtYmVyXCIpLCBleHBvcnRzKTtcbi8vIGV4cG9ydCAgKiBmcm9tICcuL25vZGVzL0RlbGF5J1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElCYXNlTm9kZV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL0lCYXNlTm9kZVwiKTtcbmNsYXNzIE51bWJlciBleHRlbmRzIElCYXNlTm9kZV8xLklCYXNlTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgaW5wdXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBzdXBlcihuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5sb2coXCJub2RlIE51bWJlciBpbml0ZWQgU3VjY2VmdWxseVwiKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTnVtYmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSUJhc2VOb2RlID0gdm9pZCAwO1xuY2xhc3MgSUJhc2VOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHJ1biguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBleGVjdXRlKHJhbSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChyYW0udGFrZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZ3MucmV2ZXJzZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUoLi4uYXJncykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB0aGlzLnJ1biguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICByYW0ucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcig1MDAsIFwiaW52YWxpZCBhcmdzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX06WyR7bWVzc2FnZX1dYCk7XG4gICAgfVxuICAgIGVycm9yKGNvZGUsIHRleHQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgY29kZSA6IFske2NvZGV9XSBtZXNzYWdlIDogWyR7dGV4dH1dYCk7XG4gICAgfVxufVxuZXhwb3J0cy5JQmFzZU5vZGUgPSBJQmFzZU5vZGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9