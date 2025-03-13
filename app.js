import express from "express";
import { PORT, NODE_ENV } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`[INFO] Server is running on port ${PORT} in ${NODE_ENV} mode`);
  console.log(`[INFO] http://localhost:${PORT}`);
  await connectToDatabase();
});
