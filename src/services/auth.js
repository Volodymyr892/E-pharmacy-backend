import {randomBytes} from 'crypto';
import bcrypt from "bcrypt";
import createHttpError from "http-errors";

import { FIFTEEN_MINUTS, ONE_DAY } from "../constants/index.js";
import { UsersCollection } from "../db/users/user.js";
import { SessionCollection } from '../db/users/session.js';

export const registerUser = async(payload)=>{
    const user = await UsersCollection.findOne({email: payload.email});
    if(user) throw createHttpError(409, 'Email in use');

    const encryptedPassword = await bcrypt.hash(payload.password, 10);

    return await UsersCollection.create({
        ...payload,
        password: encryptedPassword,
    });
};

export const loginUser = async(payload)=>{
    const user = await  UsersCollection.findOne({email: payload.email});
    if(!user){
        throw createHttpError(404, 'User not found');
    }

    const isEqual = await bcrypt.compare(payload.password, 
        user.password);

    if(!isEqual){
        throw createHttpError(401, 'Unautorized');
    }

    await SessionCollection.deleteOne({userId:user._id});

    const accessToken = randomBytes(30).toString('base64');
    const refreshToken = randomBytes(30).toString('base64');

    return await SessionCollection.create({
        userId: user._id,
        accessToken,
        refreshToken,
        accessTokenValidUntil: new Date( Date.now()+FIFTEEN_MINUTS),
        refreshTokenValidUntil: new Date(Date.now()+ONE_DAY),
    });
};
export const logoutUser = async(sessionId)=>{
    await SessionCollection.deleteOne({_id: sessionId});
};