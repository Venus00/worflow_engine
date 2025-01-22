var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("utils/IRam", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ram = void 0;
    class Ram {
        push(item) { }
        take() { }
    }
    exports.Ram = Ram;
});
define("utils/IBaseNode", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("main", ["require", "exports", "axios", "utils/IBaseNode"], function (require, exports, axios_1, IBaseNode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_1 = __importDefault(axios_1);
    class Request extends IBaseNode_1.IBaseNode {
        constructor(name, properties) {
            const inputs = [];
            super(name, { inputs });
            this.url = properties.url;
            this.log("node Request inited Succefully");
        }
        run(input1, input2) {
            return __awaiter(this, void 0, void 0, function* () {
                return axios_1.default.get(this.url);
            });
        }
        validate(...args) {
            return true;
        }
    }
    exports.default = Request;
});
define("nodes/Add", ["require", "exports", "utils/IBaseNode"], function (require, exports, IBaseNode_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ADD extends IBaseNode_2.IBaseNode {
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
    exports.default = ADD;
});
define("nodes/Delay", ["require", "exports", "utils/IBaseNode"], function (require, exports, IBaseNode_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Delay extends IBaseNode_3.IBaseNode {
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
    exports.default = Delay;
});
define("nodes/Minus", ["require", "exports", "utils/IBaseNode"], function (require, exports, IBaseNode_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Minus extends IBaseNode_4.IBaseNode {
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
    exports.default = Minus;
});
define("nodes/Number", ["require", "exports", "utils/IBaseNode"], function (require, exports, IBaseNode_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Number extends IBaseNode_5.IBaseNode {
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
    exports.default = Number;
});
define("nodes/Request", ["require", "exports", "utils/IBaseNode", "axios"], function (require, exports, IBaseNode_6, axios_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_2 = __importDefault(axios_2);
    class Request extends IBaseNode_6.IBaseNode {
        constructor(name, properties) {
            const inputs = [];
            super(name, { inputs });
            this.url = properties.url;
            this.log("node Request inited Succefully");
        }
        run(input1, input2) {
            return __awaiter(this, void 0, void 0, function* () {
                return axios_2.default.get(this.url);
            });
        }
        validate(...args) {
            return true;
        }
    }
    exports.default = Request;
});
