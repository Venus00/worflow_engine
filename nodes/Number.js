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

// nodes/Number.ts
var Number_exports = {};
__export(Number_exports, {
    default: () => Number
});
module.exports = __toCommonJS(Number_exports);

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

// nodes/Number.ts
var Number = class extends IBaseNode {
    constructor(name) {
        const options = {
            inputs: []
        };
        super(name, options);
        this.log("node Number inited Succefully");
    }
    async run() {
        const number = Math.floor(Math.random() * 100);
        return number;
    }
    validate() {
        return true;
    }
};
