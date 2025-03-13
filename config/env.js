import { config } from "dotenv";
config({ path: `./env/.env.${process.env.NODE_ENV || "development"}.local` });

export const { NODE_ENV, PORT, MONGO_URI, JWT_SECRET, JWT_EXPIRES_IN } =
  process.env;
