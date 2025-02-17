import { model, Schema } from "mongoose";

const cartSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        items: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: "prodacts",
                    required: true,
                },
                quantity:{
                    type: Number,
                    required:true,
                    default: 1,
                }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const cartCollection = model("cartUpdate", cartSchema);

const orderSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        items: [
               {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: "prodacts",
                    required: true,
                },
                name: String,
                price: Number,
                quantity: Number,
            }
        ],
        totalAmount:{
            type: Number,
            required: true,
        },
        paymentMethod:{
            type:String,
            enum: ["Cash on Deliver", "Bank"],
            required: true,
        },
        shippingAddress: {
            fullName: String,
            phone: String,
            address:String,
            city: String,
            zipCode: String,
            country:String,
        },
        status: {
            type: String, 
            enum: ["Pending", "Paid", "Shipped"],
            default: "Pending",
        }
    },
    { timestamps: true }
);

export const orderCollection = model("order", orderSchema);