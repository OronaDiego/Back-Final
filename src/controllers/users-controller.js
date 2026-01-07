import { UserModel } from "../models/user-model.js";

export const getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
};

export const createUser = async (req, res) => {
  const user = await UserModel.create(req.body);
  res.status(201).json(user);
};

export const getUserById = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.json(user);
};
