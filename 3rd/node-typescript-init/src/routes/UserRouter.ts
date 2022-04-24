import { Router } from "express";
import { UserController } from "../controllers";

const router: Router = Router();

// route => user (/user) => post
router.post('/', UserController.createUser);

export default router;