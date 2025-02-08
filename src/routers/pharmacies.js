import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getPharmaciesNearestController, getPharmaciesStoreController } from "../controllers/pharmacies.js";

const router = Router();

router.get('/api/stores/nearest',
    ctrlWrapper(getPharmaciesNearestController)
);
router.get('/api/stores',
    ctrlWrapper(getPharmaciesStoreController)
);

export default router;