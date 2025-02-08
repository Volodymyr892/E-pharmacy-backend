import { getAllReviews } from "../services/reviews.js";

export const getReviewsController = async (reg, res)=>{
    const reviews = await getAllReviews();
    res.json({
        status: 200,
        message: 'Successfully found reviews',
        data: reviews,
    });
};