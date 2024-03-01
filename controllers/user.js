import { user } from "../models/user.js";
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/Error.js";

export const getAllUser = async (req, res, next)=>{

    try {
        const users = await user.find({});
        res.json({
            success: true,
            users
        })        
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next)=>{
    try {
        const {email, password} = req.body;
        let userD = await user.findOne({email}).select("+password");
    
        if(!userD) return next(new ErrorHandler("Invalid Username or Password", 404));

        const isMatch = await bcrypt.compare(password, userD.password);
        if(!isMatch) return next(new ErrorHandler("Invalid Username or Password", 404));    
        sendCookie(userD, res, `Welcome back, ${userD.name}`, 200);
    } catch (error) {
        console.log(error);
        next(error);
    }

}

export const logout = async (req, res, next) => {
    try {
        res.status(200).cookie("token", "", {expires: new Date(Date.now())}).json({
        success: true,
        users:req.user,
    })
    } catch (error) {
        next(error);
    }

}
export const getUserbyID = async (req, res, next)=>{
    try {
        res.status(200).json({
        success: true,
        users:req.user,
    })
    } catch (error) {
        next(error);
    }

}
export const register = async (req, res, next)=>{
    try {
        const {name, email, password} = req.body;
        let userD = await user.findOne({email});
    
        if(userD) return next(new ErrorHandler("User Already Exist", 404));
    
        const hashedPassword = await bcrypt.hash(password, 10);
        userD = await user.create({
            name,
            email,
            password: hashedPassword,
        });
       sendCookie(userD, res, "Registered Successfully", 201);        
    } catch (error) {
        next(error);
    }
}

export const root = (req, res, next) =>{
    res.send("It's working...");
}