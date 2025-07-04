import Note from "../models/Note.js";
import express from "express";
const router = express.Router();
import { protect } from './../middlewares/auth.js';



router.get("/", protect, async (req, res) => {
    try {
        const notes = await Note.find({ createdBy: req.user._id }); // 🔧 fixed field
        return res.json(notes);
    } catch (err) {
        console.error("No notes by you", err);
        return res.status(501).json({ message: "server error" });
    }
});

// creating a note
router.post("/", protect, async (req, res) => {
    const { title, description } = req.body;
    try {
        if (!title || !description) {
            return res.status(401).json({ message: "Please fill all the fields" });
        }
        const note = await Note.create({ title, description, createdBy: req.user._id });
        return res.json(note);
    } catch (error) {
        console.error("Server Error", error);
        return res.status(501).json({ message: "server error" });
    }
});

// get single note by id
router.get("/:id", protect, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(201).json(note);
    } catch (error) {
        console.error("Server Error", error);
        return res.status(501).json({ message: "server error" });
    }
});

// update a note
router.put("/:id", protect, async (req, res) => {
    const { title, description } = req.body; // 🔧 added destructure
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        if (note.createdBy.toString() != req.user._id.toString()) {
            return res.status(400).json({ message: "not authorised" });
        }
        note.title = title || note.title;
        note.description = description || note.description;
        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (error) {
        console.error("Server Error", error);
        res.status(501).json({ message: "server error" });
    }
});

// delete a note
router.delete("/:id", protect, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        if (note.createdBy.toString() != req.user._id.toString()) {
            return res.status(400).json({ message: "not authorised" });
        }
        await note.deleteOne();
        res.status(201).json({ message: "Note deleted" });
    } catch (error) {
        console.error("Server Error", error);
        res.status(501).json({ message: "server error" });
    }
});

export default router;
