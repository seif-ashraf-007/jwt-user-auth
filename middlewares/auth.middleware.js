import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.heads.authorization.startsWith("Bearer")
    ) {
      token = req.header.authorization.split(" ")[1];

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const decoded = jwt.verify(token, JWT_SECRET);

      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      req.user = user;
      next();
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

export default authorize;

// In this middleware, we are verifying the token sent in the Authorization header.
// If the token is valid, we are fetching the user from the database and attaching
// it to the request object. This way, we can access the user details in the protected routes.
// If the token is invalid, we are sending a 401 Unauthorized response.
