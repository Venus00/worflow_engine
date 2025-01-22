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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IBaseNode_1 = require("../utils/IBaseNode");
const axios_1 = __importDefault(require("axios"));
class Request extends IBaseNode_1.IBaseNode {
    constructor(name, properties) {
        const inputs = [];
        super(name, { inputs });
        this.url = properties.url;
        this.log("node Request inited Succefully");
    }
    run(input1, input2) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(this.url);
        });
    }
    validate(...args) {
        return true;
    }
}
exports.default = Request;
