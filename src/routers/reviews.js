import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getReviewsController } from "../controllers/reviews.js";
const router = Router();

router.get('/api/customer-reviews',
    ctrlWrapper(getReviewsController)
);

export default router;