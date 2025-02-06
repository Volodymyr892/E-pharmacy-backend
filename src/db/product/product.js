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
            // enum:['Square', 'Acme', 'Beximco', 'ACI']
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
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const ProductColections = model("prodacts", productSchema);
