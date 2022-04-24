"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// express 모듈에서 express, (request, response, router) -> 타입 정의를 위해 불러옴!
const router = express_1.default.Router();
router.get('/', (req, res) => {
    return res.status(200).json({
        status: 200,
        message: '유저 조회 성공'
    });
});
module.exports = router;
4;
//# sourceMappingURL=user.js.map