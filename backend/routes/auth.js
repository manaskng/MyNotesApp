import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { protect } from "../middlewares/auth.js";
import jwt from "jsonwebtoken";
// ADD SendGrid Mail
import sgMail from "@sendgrid/mail";

const router = express.Router();

// Set the SendGrid API key from your environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Generate token function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(401).json({ message: "fill all fields" });
    }
    const Userexists = await User.findOne({ email });
    if (Userexists) {
      return res.status(400).json({ message: "user already exists" });
    }
    const user = await User.create({ username, email, password });
    const token = generateToken(user.id);
    res.status(201).json({ id: user._id, username: user.username, email: user.email, token });
  } catch (error) {
    return res.status(501).json({ message: "server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = generateToken(user.id);
    res.json({ id: user._id, username: user.username, email: user.email, token });
  } catch (error) {
    return res.status(501).json({ message: "server error" });
  }
});

// Get current user
router.get("/me", protect, async (req, res) => {
  return res.status(201).json(req.user);
});


router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${user._id}/${resetToken}`;

    // SENDGRID BLOCK
    const msg = {
      to: user.email,
      from: process.env.VERIFIED_SENDER_EMAIL, 
      subject: "Password Reset for NanoNotes",
      html: `<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password. This link is valid for 1 hour.</p>`,
    };

    await sgMail.send(msg);

    return res.json({ message: "Reset link sent to your email" });
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error);
    return res.status(500).json({ message: "Error sending email" });
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }
      if (decoded.id !== id) {
        return res.status(400).json({ message: "Invalid token" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      await User.findByIdAndUpdate(id, { password: hashedPassword });
      return res.json({ message: "Password updated successfully" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Password reset failed" });
  }
});


export default router;