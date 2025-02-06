import { ProductColections } from "../db/product/product.js";

export const getAllproduct = async() =>{
    const product = await ProductColections.find();
    console.log("Fetched products:", product);
    return product;
};

export const getProductBuId = async(productId)=>{
    const product  = await ProductColections.findById(productId);
    return product;
};