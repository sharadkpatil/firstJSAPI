import express from "express";
import router from "./router/user.js";
import {config} from "dotenv"

export const app= express();

config({
    path:"./data/config.env"
})
app.use(express.json());
app.use("/users", router);
