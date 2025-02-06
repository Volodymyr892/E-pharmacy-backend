import { Router } from "express";
import { getAllproduct, getProductBuId } from '../services/product.js';
const router = Router();

router.get('/api/products/', async (req, res)=>{
    const products = await getAllproduct();
    res.status(200).json({
        data: products,
    });
});
router.get('/api/products/:id', async(req, res, next)=>{
    const {id} = req.params;
    const product = await getProductBuId(id);

    if(!product){
        res.status(404).json({
            message: 'Product not found'
        });
    }
    res.status(200).json({
        data: product,
    });
});

export default router;