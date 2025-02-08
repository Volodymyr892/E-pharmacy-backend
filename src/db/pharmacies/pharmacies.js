import { model, Schema } from "mongoose";

const pharmaciesSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        phone:{
            type: Number,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const  pharmaciesNearestCollection = model("pharmaciesNearest", pharmaciesSchema, "pharmaciesNearest");
export const pharmaciesStoreCollections = model("pharmaciesStore", pharmaciesSchema,"pharmaciesStore");