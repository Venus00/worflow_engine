"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// nodes/Minus.ts
var Minus_exports = {};
__export(Minus_exports, {
    default: () => Minus
});
module.exports = __toCommonJS(Minus_exports);

// utils/IBaseNode.ts
var IBaseNode = class {
    constructor(name, options) {
        this.name = name;
        this.options = options;
    }
    async run(...args) {
    }
    validate(...args) {
        return true;
    }
    async execute(ram) {
        let args = [];
        for (let i = 0; i < this.options.inputs.length; i++) {
            args.push(ram.take());
        }
        args.reverse();
        if (this.validate(...args)) {
            const result = await this.run(...args);
            if (result)
                ram.push(result);
        } else {
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
};

// nodes/Minus.ts
var Minus = class extends IBaseNode {
    constructor(name) {
        const options = {
            inputs: ["number", "number"]
        };
        super(name, options);
        this.log("node Minus inited Succefully");
    }
    async run(input1, input2) {
        const result = input1 - input2;
        return result;
    }
    validate(...args) {
        if (args.length !== 2) return false;
        if (isNaN(args[0]) || isNaN(args[1])) return false;
        return true;
    }
};
