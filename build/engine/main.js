"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = void 0;
const ts_command_line_args_1 = require("ts-command-line-args");
exports.args = (0, ts_command_line_args_1.parse)({
    load1: String,
    load2: String
});
const file1 = exports.args.load1;
const file2 = exports.args.load2;
const NodeAdd = require(file1);
const NodeMinus = require(file2);
const AddObject = new NodeAdd.default();
const MinusObject = new NodeMinus.default();
console.log(AddObject.execute(5, MinusObject.execute(-2, "teet")));
