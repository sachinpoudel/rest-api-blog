import express from "express";
import { loginValidation, signupValidation } from "../middlewares/validation/authValidation/user-validation";
import { loginController, signUpController } from "../controllers/auth.controller";

const router = express.Router()

router.post('/signup', signupValidation, signUpController);
router.post('/login',loginValidation, loginController)
router.post('/logout', loginValidation, loginController)

export default router;