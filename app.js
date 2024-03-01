import express from "express";
import UserRouter from "./router/user.js";
import TaskRouter from "./router/task.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/Error.js";

export const app= express();

config({
    path:"./data/config.env"
})
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/tasks", TaskRouter);
/*
app.use(cors({
    origin: [proces.env.URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))*/

app.use(errorMiddleware);