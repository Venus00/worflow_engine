"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IBaseNode_1 = require("../utils/IBaseNode");
class Number extends IBaseNode_1.IBaseNode {
    constructor(name) {
        const options = {
            inputs: []
        };
        super(name, options);
        this.log("node Number inited Succefully");
    }
    run() {
        const number = Math.floor(Math.random() * 100);
        return number;
    }
    validate() {
        return true;
    }
}
exports.default = Number;
