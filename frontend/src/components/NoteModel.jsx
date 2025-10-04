// src/components/NoteModel.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import RichTextEditor from "./RichTextEditor"; 

function NoteModel({ isOpen, onClose, note, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTitle(note ? note.title : "");
      // Use existing description or default to an empty paragraph for a new note
      setDescription(note ? note.description : "<p></p>");
      setError("");
    }
  }, [isOpen, note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const payload = { title, description };
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const baseURL = import.meta.env.VITE_API_URL;

      let savedNote;
      if (note) {
        const { data } = await axios.put(`${baseURL}/api/notes/${note._id}`, payload, config);
        savedNote = data;
      } else {
        const { data } = await axios.post(`${baseURL}/api/notes`, payload, config);
        savedNote = data;
      }

      onSave(savedNote);
      onClose(); // This was missing in your original code, but is good to have
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save note. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Increased the max-width to give the editor more space */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {note ? "Edit Note" : "Create a New Note"}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full px-4 py-2 bg-slate-100 text-gray-800 border-2 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {/* 2. Replace the old <textarea> with our new RichTextEditor component */}
          <RichTextEditor
            content={description}
            onChange={(newContent) => setDescription(newContent)}
          />

          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              type="button"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {note ? "Update Note" : "Create Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NoteModel;