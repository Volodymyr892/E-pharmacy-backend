import { getAllproduct, getProductBuId } from '../services/product.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import {parseSortParams} from "../utils/parseSortParams.js";




export const getProductController = async (req, res,)=>{
    const {page, perPage} = parsePaginationParams(req.query);
    const {sortBy, sortOrder} = parseSortParams(req.query);

    const products = await getAllproduct({
        page,
        perPage,
        sortBy,
        sortOrder,
    });
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

