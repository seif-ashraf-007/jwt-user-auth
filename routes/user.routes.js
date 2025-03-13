import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("GET User route");
});

userRouter.get("/:id", (req, res) => {
  res.send("GET User by ID route");
});

userRouter.post("/", (req, res) => {
  res.send("POST User route");
});

userRouter.put("/:id", (req, res) => {
  res.send("PUT User by ID route");
});

userRouter.delete("/:id", (req, res) => {
  res.send("DELETE User by ID route");
});

export default userRouter;
