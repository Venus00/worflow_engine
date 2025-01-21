"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBaseNode = void 0;
class IBaseNode {
    constructor(name, options) {
        this.name = name;
        this.options = options;
    }
    run(...args) { }
    validate(...args) {
        return true;
    }
    execute(ram) {
        let args = [];
        for (let i = 0; i < this.options.inputs.length; i++) {
            args.push(ram.take());
        }
        args.reverse();
        if (this.validate(...args)) {
            ram.push(this.run(...args));
        }
        else {
            this.error(500, "invalid args");
            return [];
        }
    }
    log(message) {
        console.log(`${this.name}:[${message}]`);
    }
    error(code, text) {
        console.error(`code : [${code}] message : [${text}]`);
    }
}
exports.IBaseNode = IBaseNode;
