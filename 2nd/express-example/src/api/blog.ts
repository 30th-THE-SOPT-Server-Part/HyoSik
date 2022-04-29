import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '블로그에 방문하신 것을 환영합니다!'
    });
});

module.exports = router;