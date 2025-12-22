import { RequestHandler } from "express";
import validator from "../../validator";
import { userSchema } from "./user-schema";

export const signupValidation : RequestHandler =(req,res,next) => validator(userSchema.signupUser, {...req.body}, next);

export const loginValidation : RequestHandler =(req,res,next) => validator(userSchema.loginUser, {...req.body}, next);  