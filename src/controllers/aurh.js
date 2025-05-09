import { loginUser, logoutUser, registerUser } from "../services/auth.js";
import { ONE_DAY } from "../constants/index.js";
import createHttpError from "http-errors";

export const  registeruserController = async(req, res)=>{
    const user = await registerUser(req.body);
    res.status(201).json({
        status: 201,
        message: 'Successfully registered a user!',
        data: user,
    });
};

export const loginUserController = async (req, res) => {
    const session = await loginUser(req.body);

    res.cookie('refreshToken', session.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + ONE_DAY),
    });

    res.cookie('sessionId', session._id, {
        httpOnly: true,
        expires: new Date(Date.now() + ONE_DAY),
    });

    res.json({
        status: 200, 
        message: 'Successfully logged in an user!',
        data: {
            accessToken: session.accessToken,
        },
    });
};

export const logoutUserController = async(req, res)=>{
    if(req.cookies.sessionId){
        await logoutUser(req.cookies.sessionId);
    }

    res.clearCookie('sessionId');
    res.clearCookie('refreshToken');

    res.status(204).send();
};

export const getUserInfoController = async(req, res, next)=>{
    try{
        const user = req.user;

        if(!user) {
            throw createHttpError(404, "User not Found");
        }
    } catch(error){
        next(error);
    }
};
