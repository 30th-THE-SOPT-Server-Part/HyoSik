import express, { Router } from 'express';

const router: Router = express.Router();

router.use('/user', require('./user')); // router.use : /user 엔드포인트로 들어오는 모든 요청을 유저 모듈에서 사용

module.exports = router; // 모듈로 반환