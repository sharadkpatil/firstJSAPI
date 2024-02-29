import { user } from "../models/user.js";

export const getAllUser = async (req, res)=>{

    const users = await user.find({});
    res.json({
        success: true,
        users
    })
}

export const insertUser = async (req, res)=>{
    const {name, email, password} = req.body;
    await user.create({
        name,
        email,
        password,
    });
    res.status(201).json({
        success: true,
        message: "SignUp successfully",
    })
}

export const root = (req, res) =>{
    res.send("It's working...");
}