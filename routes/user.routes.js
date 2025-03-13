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

userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);

userRouter.put("/:id", updateUserById);

userRouter.delete("/:id", deleteUserById);

export default userRouter;
