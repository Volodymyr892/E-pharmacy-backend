import { model, Schema } from "mongoose";

const reviewsSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        testimonial:{
        type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: false, // або true, якщо аватарка обов'язкова
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
export const reviewsCplection = model("reviews", reviewsSchema);