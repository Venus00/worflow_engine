"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IBaseNode_1 = require("../utils/IBaseNode");
class Minus extends IBaseNode_1.IBaseNode {
    constructor(name) {
        const options = {
            inputs: ["number", "number"]
        };
        super(name, options);
        this.log("node Minus inited Succefully");
    }
    run(input1, input2) {
        const result = input1 - input2;
        this.log(result + '');
        return result;
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
