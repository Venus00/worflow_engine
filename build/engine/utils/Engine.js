"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Engine = void 0;
const fs = __importStar(require("fs"));
const Ram_1 = require("./Ram");
class Engine {
    constructor() {
        this.nodes = [];
    }
    init(dir, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //load nodes
            try {
                const allNodes = yield this.loadNodes(dir);
                this.nodes = data.nodes.map((node) => {
                    const nodeContructor = allNodes.find((n) => n.type === node.type);
                    if (nodeContructor) {
                        return {
                            id: node.uuid,
                            node: (new nodeContructor.builder(`${node.type}[${node.uuid}]`))
                        };
                    }
                    else
                        return null;
                }).filter((nItem) => nItem !== null);
                return data.connections;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    run(worflow) {
        const ram = new Ram_1.Ram();
        console.log(worflow);
        for (let i = 0; i < worflow.length; i++) {
            for (let j = 0; j < worflow[i].length; j++) {
                const node = this.nodes.find((n) => n.id === worflow[i][j]);
                if (node)
                    node === null || node === void 0 ? void 0 : node.node.execute(ram);
            }
        }
    }
    loadNodes(dir) {
        const Nodes = [];
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (error, files) => {
                if (error)
                    reject(error);
                const jsFiles = files.filter((filename) => filename.includes('.js'));
                const nodes = jsFiles.map((filename) => {
                    const Node = require(`${dir}/${filename}`);
                    return {
                        name: '',
                        type: filename.split('.')[0],
                        builder: Node.default
                    };
                });
                resolve(nodes);
            });
        });
    }
}
exports.Engine = Engine;
