import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { loginUserController, registeruserController } from "../controllers/aurh.js";
import { validateBody } from "../middlewares/validateBody.js";
import { loginUserSchema, registerUserSchema } from "../validation/auth.js";

const router = Router();

router.post('/api/user/register',
    validateBody(registerUserSchema),
    ctrlWrapper(registeruserController),
);

router.post('/api/user/login',
    validateBody(loginUserSchema),
    ctrlWrapper(loginUserController),
);

export default router;