import { Router } from "express";

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  res.send("POST Signup route");
});

authRouter.post("/login", (req, res) => {
  res.send("POST Login route");
});

export default authRouter;
