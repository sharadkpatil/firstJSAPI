import jwt from "jsonwebtoken"
import { user } from "../models/user.js";

export const isAuthenticated = async (req, res, next) =>{
    const {token} = req.cookies;
    console.log({token});
    if(!token) return res.status(404).json ({
        success: false,
        message: "I am not logged in",
    })
    const decoded= jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user= await user.findById(decoded._id); 
    console.log(req.user);
    next();
};