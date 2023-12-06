import express from "express";
const router = express.Router();
import {
  registerController,
  loginController,
  userDetailsController,
  updateController,
  deleteStudentController,
  deleteTeacherController,
  deleteStudentByTeacherController,
} from "../controller/userController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/user-details/:userId", userDetailsController);
router.post("/update-user/:userId", updateController);
router.post("/delete-student/:userId", deleteStudentController);
router.post("/delete-teacher/:userId", deleteTeacherController);
router.post("/delete-studentby-teacher/:userId", deleteStudentByTeacherController);

export default router;
