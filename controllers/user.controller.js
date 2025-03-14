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

export const getUserById = async (req, res) => {
  res.send("GET User by ID route");
};

export const createUser = async (req, res) => {
  res.send("POST User route");
};

export const updateUserById = async (req, res) => {
  res.send("PUT User by ID route");
};

export const deleteUserById = async (req, res) => {
  res.send("DELETE User by ID route");
};
