import {SORT_ORDER} from "../constants/index.js";
import { ProductColections } from "../db/product/product.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getAllproduct = async({
    page = 1, 
    perPage = 10,
    sortOrder = SORT_ORDER.ASC,
    sortBy = '_id',
    filter = {}
}) => {
    const limit = perPage;
    const skip = (page - 1) * perPage; 

    const productsQouery = ProductColections.find(filter);
    const productsCount = await ProductColections.find(filter).countDocuments();
        // .merge(productsQouery)
        // .countDocuments();

    const products = await productsQouery
    .skip(skip)
    .limit(limit)
    .sort({[sortBy] : sortOrder })
    .exec();

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