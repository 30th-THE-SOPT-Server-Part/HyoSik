"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use('/user', require('./user')); // router.use : /user 엔드포인트로 들어오는 모든 요청을 유저 모듈에서 사용
module.exports = router; // 모듈로 반환
//# sourceMappingURL=index.js.map