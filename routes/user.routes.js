import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controllers/user.controller.js";
import { authorize, authorizeAdmin } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", authorize, authorizeAdmin("admin"), getAllUsers);

userRouter.get("/:id", authorize, getUserById);

userRouter.post("/", authorize, authorizeAdmin("admin"), createUser);

userRouter.put("/:id", authorize, authorizeAdmin("admin"), updateUserById);

userRouter.delete("/:id", authorize, authorizeAdmin("admin"), deleteUserById);

export default userRouter;
