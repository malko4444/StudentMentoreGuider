import express from "express";
import { validateRequest } from "../middlewares/validateRequest.js";
import { createMentorSchema } from "../utils/validators.js";
import { createMentor, loginMentor } from "../controllers/mentorController.js";

const router = express.Router();

router.post("/mentor/signup", validateRequest(createMentorSchema), createMentor);
router.post ("/mentor/login" , loginMentor)

export default router;
