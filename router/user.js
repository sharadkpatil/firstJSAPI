import express from "express"
import { getAllUser, getUserbyID, login, logout, register, root } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", root)

router.get("/all", getAllUser);

router.post("/register", register);
router.post("/login", login);

router.get("/getUserbyID", isAuthenticated, getUserbyID);
router.get("/logout", logout);

export default router;