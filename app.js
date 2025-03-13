import express from "express";
import { PORT, NODE_ENV } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`[INFO] Server is running on port ${PORT} in ${NODE_ENV} mode`);
  console.log(`[INFO] http://localhost:${PORT}`);
});
