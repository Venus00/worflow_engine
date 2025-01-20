"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IBaseNode_1 = require("../utils/IBaseNode");
class ADD extends IBaseNode_1.IBaseNode {
    constructor() {
        super();
        console.log("node ADD inited Succefully");
    }
    run(input1, input2) {
        return input1 + input2;
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
