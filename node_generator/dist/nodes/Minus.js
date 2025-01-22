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
