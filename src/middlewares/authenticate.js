import createHttpError from "http-errors";
import { SessionCollection } from "../db/users/session.js";
import { UsersCollection } from "../db/users/user.js ";

export const authenticate = async(req, res, next)=>{
    const authHeader = req.get('Authorization');

    if(!authHeader){
        next(createHttpError(401, 'Please provide Authorization header'));
        return;
    }

    const [bearer, token] = authHeader.split(" ");
    // const bearer = authHeader.split('')[0];
    // const token = authHeader.split('')[1];

    if(bearer !== 'Bearer' || !token){
        next(createHttpError(401, 'Auth header should be of type Bearer'));
        return;
    }

    const session = await SessionCollection.findOne(
        {accessToken:token}
    );

    if(!session){
        next(createHttpError(401, 'Session not found'));
        return;
    }

    const isAccessTokenExpired = new Date() > new Date(session.accessTokenValidUntil);

    if(isAccessTokenExpired){
        return next(createHttpError(401, 'Access token expired'));
    }

    const user = await UsersCollection.findById(session.userId);

    if(!user){
        next(createHttpError(401,  "User not found"));
        return;
    }

    req.user = user;
    // console.log("🚀 ~ authenticate ~ req.user:", req.user);

    next();
};