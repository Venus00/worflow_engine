"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicNode {
    constructor() {
        this.a = 0;
        console.log("node inited Succefully");
    }
    increment(value) {
        this.a += value;
    }
}
exports.default = BasicNode;
