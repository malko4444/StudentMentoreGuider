import upload from "../middlewares/uploadImage.js";
import User from "../models/User.js";
import { createMentor as createMentorService } from "../services/mentorService.js";
import { comparePassword, generateToken } from "../utils/authUtils.js";
import cloudinary from "../config/cloudinaryConfig.js";

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
export const getMentorProfile = async (req, res, next) => {
  try {
    const mentorId = req.user.id;
    const mentor = await User.findById(mentorId).select("-password");
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    res.status(200).json({ mentor , 
    message: "Mentor profile fetched successfully"
    });
  } catch (err) {
    next(err);
  }
};


export const uploadPicture = async (req, res, next) => {
  try {
    const mentorId = req.user.id;

    // Check if file exists (multer adds it to req.file)
    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    // Get Cloudinary file info
    const imageUrl = req.file.path;
    const filename = req.file.filename;

    // Update mentor record in DB
    const updatedMentor = await User.findByIdAndUpdate(
      mentorId,
      {
        $set: {
          "profilePicture.url": imageUrl,
          "profilePicture.filename": filename,
        },
      },
      { new: true }
    );

    if (!updatedMentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    return res.status(200).json({
      message: "Profile picture uploaded successfully",
      profilePicture: updatedMentor.profilePicture,
    });
  } catch (error) {
    next(error);
  }
};



export const deleteProfilePicture = async (req, res, next) => {
  try {
    const mentorId = req.user.id;

    const mentor = await User.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    // Check if mentor has an existing profile picture
    if (!mentor.profilePicture || !mentor.profilePicture.filename) {
      return res.status(400).json({ message: "No profile picture to delete" });
    }

    // Delete from Cloudinary
    const publicId = mentor.profilePicture.filename;
    await cloudinary.uploader.destroy(publicId);

    // Remove from DB
    mentor.profilePicture = { url: null, filename: null };
    await mentor.save();

    return res.status(200).json({ message: "Profile picture deleted successfully" });
  } catch (error) {
    next(error);
  }
};

