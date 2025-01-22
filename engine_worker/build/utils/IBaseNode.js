"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
