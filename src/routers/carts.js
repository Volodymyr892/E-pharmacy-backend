import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { validateBody } from "../middlewares/validateBody.js";
import { validateCartUpdateSchema, validationOrderSchema } from "../validation/cartUpdate.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { checkoutController, updateCartController } from "../controllers/carts.js";

const router = Router();

router.use(authenticate);

router.put('/api/cart/update',
    validateBody(validateCartUpdateSchema),
    ctrlWrapper(updateCartController),
);

router.post('/api/cart/checkout',
    validateBody(validationOrderSchema),
    ctrlWrapper(checkoutController),
);

export default router;