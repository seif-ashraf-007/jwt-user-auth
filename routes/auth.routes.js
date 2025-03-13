import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signup", signUp);

authRouter.post("/login", signIn);

export default authRouter;
