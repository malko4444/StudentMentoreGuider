import User from "../models/User.js";
import { createMentor as createMentorService } from "../services/mentorService.js";
import { comparePassword, generateToken } from "../utils/authUtils.js";

export const createMentor = async (req, res, next) => {
  try {
    const savedUser = await createMentorService(req.body);

    return res.status(201).json({
      message: "Mentor created successfully",
      user: savedUser,
    });
  } catch (err) {
    next(err);
  }

};
export const loginMentor = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("email,paswweord", email, password);
    
    // check the mentor exist in mentor Collection  
    if( !email || !password ){
        return res.status(400).json({ message: "Email and password are required" });
    }
    // also get the password and compare later
    const mentor = await User.findOne({ email: email, role: "mentor" });
    console.log( "mentor in db ", mentor);
    
    if (!mentor) {
        return res.status(401).json({ message: "Invalid email" });
    }
    if(await comparePassword(password, mentor.password) === false){
        return res.status(401).json({ message: "Invalid password" });
    }
    const token = generateToken(mentor._id, "mentor");
    // auto set the response to cookies
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(200).json({ message: "Mentor login successful" });
  } catch (err) {
    next(err);
  }
};