import { model, Schema } from "mongoose";

const productSchema = new Schema(
    {
        photo:{
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/.test(value);
                },
                message: "Некоректний URL фото",
            }
        },
        name:{
            type: String,
            required: true,
        },
        suppliers:{
            type: String,
            required: true,
        },
        stock:{
            type: Number,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        category:{
            type: String,
            required: true,
            // enum: []
        },
        description : {
            type: String,
            required: true,
        },
        reviews: [
            {
                user: { type: String, required: true },
                rating: { type: Number, required: true, min: 1, max: 5 },
                comment: { type: String, required: true },
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const ProductColections = model("prodacts", productSchema);
