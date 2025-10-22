import Joi from "joi";

export const createMentorSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().min(2).max(100).required(),
  profession: Joi.string().min(2).max(100).required(),
  experience: Joi.number().min(0).max(100).required(),
  skillLevel: Joi.string()
    .valid("beginner", "intermediate", "advanced", "expert")
    .required(),
  githubUrl: Joi.string().uri().allow("", null),
  linkedinUrl: Joi.string().uri().allow("", null),
});


export const adminSignupSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(100).required(),
  password: Joi.string().min(6).required(),
});