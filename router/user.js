import express from "express"
import { getAllUser, insertUser, root } from "../controllers/user.js";

const router = express.Router();

router.get("/", root)

router.get("/all", getAllUser);

router.post("/new", insertUser);

export default router;