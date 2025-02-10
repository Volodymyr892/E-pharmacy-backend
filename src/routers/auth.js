import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registeruserController } from "../controllers/aurh.js";
import { validateBody } from "../middlewares/validateBody.js";
import { registerUserSchema } from "../validation/auth.js";

const router = Router();

router.post('/api/user/register',
    validateBody(registerUserSchema),
    ctrlWrapper(registeruserController),
);

export default router;