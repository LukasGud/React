import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const expiresIn = "10d";

export const generateToken = (payload: Types.ObjectId) => {
  const token = jwt.sign({id: payload.toString }, process.env.JWT_SECRET!, { expiresIn });
  return token;
};