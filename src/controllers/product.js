import { getAllproduct, getProductBuId } from '../services/product.js';
import createHttpError from 'http-errors';



export const getProductController = async (req, res,)=>{
    const products = await getAllproduct();
    res.json({
        status: 200,
        message: 'Successfully fpund product',
        data: products,
    });
};

export const getContactByIdController = async(req, res, next)=>{
    const {id} = req.params;
    const product = await getProductBuId(id);

    if(!product){
       throw createHttpError(404, 'Product not found');
    }
    res.json({
        status: 200,
        message: `Successfully found product with id ${id}`,
        data: product,
    });
};

