//?
import { gl } from "../util/logger.js";
import express from "express";
const userRouter = express.Router();

//todo - Signup
import {
  signupValidator,
  signupValidationResult,
} from "../middleware/signupValidator.js";
import { postUserSignup } from "../routers/signupRouter.js";
import sendSignupMail from "../middleware/sendSignupMail.js";

userRouter.post(
  "/signup",
  signupValidator,
  signupValidationResult,
  postUserSignup,
  sendSignupMail
);

//todo - login
import {
  loginValidator,
  loginValidationResult,
} from "../middleware/loginValidator.js";
import { postUserLogin } from "../routers/loginRouter.js";

userRouter.post("/login", loginValidator, loginValidationResult, postUserLogin);

//todo - Logout
import { getUsersLogout } from "../routers/logoutRouter.js";

userRouter.get("/logout", getUsersLogout);

//todo - Reset
import {
  resetValidator,
  resetValidationResult,
} from "../middleware/resetValidator.js";
import { resetLink } from "../routers/resetRouter.js";
import sendResetMail from "../middleware/sendResetMail.js";

userRouter.post(
  "/reset",
  resetValidator,
  resetValidationResult,
  resetLink,
  sendResetMail
);

//todo
import { setNewPassword } from "../routers/emailPassword.js";

userRouter.get("/setnewpass/:id", setNewPassword);

//todo
import checkAuth from "../middleware/checkAuth.js";

userRouter.get("/admin", checkAuth, (req, res) => {
  gl.log("lav a");
  res.json("lav a");
});

//todo
import { getUserName } from "../routers/avatarRouter.js";

userRouter.get("/name", getUserName);

//todo
import { getUserActive } from "../routers/emailActive.js";

userRouter.get("/:id", getUserActive);

//todo
export default userRouter;
