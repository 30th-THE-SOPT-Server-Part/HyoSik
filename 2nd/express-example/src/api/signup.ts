import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '회원가입을 위해 약관에 동의해주세요'
    });
});

module.exports = router;