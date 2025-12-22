import type { Request, Response, NextFunction } from 'express';
import { loginService, logoutService, signUpService } from '../services/auth.service';


export const signUpController = async (req:Request, res:Response, next:NextFunction) =>
    signUpService(req,res,next);

export const loginController = async (req:Request, res:Response, next: NextFunction) => loginService(req,res,next);


export const logoutController = async (req:Request, res:Response, next: NextFunction) => logoutService(req,res,next);