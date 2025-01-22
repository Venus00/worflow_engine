"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ram = void 0;
class Ram {
    constructor() {
        this.ram = [];
    }
    push(element) {
        console.log(this.ram);
        this.ram.push(element);
    }
    take() {
        console.log(this.ram);
        if (this.ram.length === 0)
            throw new Error("ram overtake");
        return this.ram.pop();
    }
}
exports.Ram = Ram;
