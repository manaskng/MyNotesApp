import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    
    isPinned: {
      type: Boolean,
      required: true,
      default: false, // Default to not pinned
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", NoteSchema);
export default Note;