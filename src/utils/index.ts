import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config";

// Utility functions
export const GenerateSalt = async (): Promise<string> => {
  return await bcrypt.genSalt();
};

export const GeneratePassword = async (
  password: string,
  salt: string
): Promise<string> => {
  return await bcrypt.hash(password, salt);
};

export const ValidatePassword = async (
  enteredPassword: string,
  savedPassword: string,
  salt: string
): Promise<boolean> => {
  return (
    (await GeneratePassword(enteredPassword, salt)) === savedPassword
  );
};

export const GenerateSignature = async (
  payload: any
): Promise<string> => {
  try {
    return await jwt.sign(payload, config.SECRET, { expiresIn: "60d" });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const ValidateSignature = async (
  req: any
): Promise<boolean> => {
  try {
    const signature = req.get("Authorization");
    console.log(signature);
    const payload = await jwt.verify(signature.split(" ")[1], config.SECRET);
    req.user = payload;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const FormateData = (data: any): { data: any } => {
  if (data) {
    return { data };
  } else {
    throw new Error("Data Not found!");
  }
};
