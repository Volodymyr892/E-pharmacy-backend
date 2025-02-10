import bcrypt from "bcrypt";
import { UsersCollection } from "../db/users/user.js";
import createHttpError from "http-errors";

export const registerUser = async(payload)=>{
    const user = await UsersCollection.findOne({email: payload.email});
    console.log("🚀 ~ registerUser ~ user:", user);
    if(user) throw createHttpError(409, 'Email in use');

    const encryptedPassword = await bcrypt.hash(payload.password, 10);

    return await UsersCollection.create({
        ...payload,
        password: encryptedPassword,
    });
};
console.log("🚀 ~ registerUser ~ registerUser:", registerUser);
