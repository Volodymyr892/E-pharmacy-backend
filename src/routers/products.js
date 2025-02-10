import { Router } from "express";
import { getProductController, getContactByIdController } from "../controllers/product.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { isValidId } from "../middlewares/isValidId.js";
const router = Router();

router.get('/api/products/', 
    ctrlWrapper(getProductController)
);

router.get('/api/products/:id',
    isValidId,
    ctrlWrapper(getContactByIdController));

export default router;