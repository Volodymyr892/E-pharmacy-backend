import { registerUser } from "../services/auth.js";

export const  registeruserController = async(req, res)=>{
    const user = await registerUser(req.body);
    console.log("🚀 ~ registeruserController ~ user:", user);

    res.status(201).json({
        status: 201,
        message: 'Successfully registered a user!',
        data: user,
    });
};
console.log("🚀 ~ registeruserController ~ registeruserController:", registeruserController);
