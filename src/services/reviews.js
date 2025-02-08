import { reviewsCplection } from "../db/product/reviews.js";

export const getAllReviews =  async()=>{
    const reviews = await reviewsCplection.find();
    return reviews;
};