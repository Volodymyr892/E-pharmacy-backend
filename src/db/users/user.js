// import { required } from "joi";
import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        phone:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        }
    },
    { versionKey: false } 
);

userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

export const UsersCollection = model('users', userSchema);
console.log("🚀 ~ UsersCollection:", UsersCollection);
