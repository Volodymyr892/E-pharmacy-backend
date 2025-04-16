import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getUserInfoController, loginUserController, logoutUserController, registeruserController } from "../controllers/aurh.js";
import { validateBody } from "../middlewares/validateBody.js";
import { loginUserSchema, registerUserSchema } from "../validation/auth.js";
import {authenticate} from "../middlewares/authenticate.js";

const router = Router();

router.post('/api/user/register',
    validateBody(registerUserSchema),
    ctrlWrapper(registeruserController),
);

router.post('/api/user/login',
    validateBody(loginUserSchema),
    ctrlWrapper(loginUserController),
);
router.post('/api/user/logout',
    ctrlWrapper(logoutUserController),
);

router.get('/api/user/user-info',
    authenticate,
    ctrlWrapper(getUserInfoController),
);
export default router;