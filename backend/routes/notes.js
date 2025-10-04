import Note from "../models/Note.js";
import express from "express";
const router = express.Router();
import { protect } from './../middlewares/auth.js';

// Get all notes for a user
router.get("/", protect, async (req, res) => {
    try {
        // CHANGED: Use 'user' instead of 'createdBy'
        const notes = await Note.find({ user: req.user._id }); 
        return res.json(notes);
    } catch (err) {
        console.error("Error fetching notes", err);
        return res.status(500).json({ message: "Server error" });
    }
});

// Create a note
router.post("/", protect, async (req, res) => {
    const { title, description } = req.body;
    try {
        if (!title || !description) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        // CHANGED: Use 'user' instead of 'createdBy'
        const note = await Note.create({ title, description, user: req.user._id }); 
        return res.json(note);
    } catch (error) {
        console.error("Server Error", error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Get single note by id
router.get("/:id", protect, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        // Add authorization check here as well for security
        if (note.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized" });
        }
        res.json(note);
    } catch (error) {
        console.error("Server Error", error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Update a note
router.put("/:id", protect, async (req, res) => {
    const { title, description } = req.body;
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        // CHANGED: Use 'note.user' instead of 'note.createdBy'
        if (note.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized" });
        }
        note.title = title || note.title;
        note.description = description || note.description;
        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (error) {
        console.error("Server Error", error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Delete a note
router.delete("/:id", protect, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        // CHANGED: Use 'note.user' instead of 'note.createdBy'
        if (note.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized" });
        }
        await note.deleteOne();
        res.json({ message: "Note deleted" });
    } catch (error) {
        console.error("Server Error", error);
        return res.status(500).json({ message: "Server error" });
    }
});

export default router;