import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    if (!user) {
      throw new Error(`User not found with id of ${id}`, 404);
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      throw new Error("Please provide all required fields", 400);
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new Error("User already exists", 400);
    }

    const newUsers = await User.create([
      {
        name,
        email,
        password,
        role,
      },
    ]);

    const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        user: newUsers[0],
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const user = await User.findById(id);

    if (!user) {
      throw new Error(`User not found with id of ${id}`, 404);
    }

    const existingEmail = await User.findOne({ email: email });

    if (existingEmail && existingEmail._id.toString() === id) {
      throw new Error("Email already in use", 400);
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        role,
      },
      { timestamps: true, new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUserById = async (req, res) => {
  res.send("DELETE User by ID route");
};
