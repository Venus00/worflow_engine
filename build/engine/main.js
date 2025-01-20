"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = void 0;
const ts_command_line_args_1 = require("ts-command-line-args");
exports.args = (0, ts_command_line_args_1.parse)({
    load: String
});
console.log(exports.args.load);
const file = exports.args.load;
const { BasicNode } = require(file);
//console.log(BasicNode)
const newObject = new BasicNode();
