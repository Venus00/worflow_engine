"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBaseNode = void 0;
class IBaseNode {
    constructor() {
        this.name = Object(this).name;
    }
    run(...args) { }
    validate(...args) {
        return true;
    }
    execute(...args) {
        if (this.validate(...args))
            return this.run(...args);
        else
            this.error(500, "invalid args");
    }
    error(code, text) {
        console.error(`code : [${code}] message : [${text}]`);
    }
}
exports.IBaseNode = IBaseNode;
