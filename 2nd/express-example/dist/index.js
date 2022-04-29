"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // express 객체 받아옴
app.use(express_1.default.json()); // express에서 request body를 json으로 받아오겠다.
app.use('/api', require('./api')); // use -> 모든 요청
app.get('/', (req, res, next) => {
    res.send('<h1>Hi! My name is Philip!<h1>');
});
app.listen('8080', () => {
    console.log(`
   #############################################
       🛡️ Server listening on port: 8000 🛡️
   #############################################
    `);
});
//# sourceMappingURL=index.js.map