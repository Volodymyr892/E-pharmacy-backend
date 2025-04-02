
import { ProductColections } from "../db/product/product.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getAllproduct = async({page, perPage}) =>{
    const limit = perPage;
    const skip = (page - 1) * perPage; 

    const productsQouery = ProductColections.find();
    const productsCount = await ProductColections.find()
        .merge(productsQouery)
        .countDocuments();

    const products = await productsQouery.skip(skip).limit(limit).exec();

    const paginationData = calculatePaginationData(productsCount, perPage, page);

    return {
        data: products, 
        ...paginationData,
    };
};

export const getProductBuId = async(productId)=>{
    const product  = await ProductColections.findById(productId);
    return product;
};