"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const colors_1 = __importDefault(require("colors"));
server_1.default.listen(4000, () => {
    console.log(colors_1.default.cyan.bold("REST API en el puerto 4000"));
});
//# sourceMappingURL=index.js.map