import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NoteModel({ isOpen, onClose, note, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(note ? note.title : ""); // if edit, prefill
    setDescription(note ? note.description : "");
    setError(null);
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found. Please log in.");
        return;
      }

      const payload = { title, description };
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const baseURL = import.meta.env.VITE_API_URL;

      // edit or create both dealt here
      if (note) {
        const { data } = await axios.put(
          `${baseURL}/api/notes/${note._id}`,
          payload,
          config
        );
        onSave(data);
      } else {
        const { data } = await axios.post(
          `${baseURL}/api/notes`,
          payload,
          config
        );
        onSave(data);
      }

      setTitle("");
      setDescription("");
      setError("");
      onClose();
    } catch (error) {
      console.error("Note save error", error);
      setError("Failed to save note");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {note ? "Edit Note" : "Create Note"}
        </h2>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note - Title"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600
               rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Note - Description"
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600
               rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {note ? "Update" : "Create"}
            </button>
            <button
              onClick={() => {
                setTitle("");
                setDescription("");
                setError("");
                onClose(); // parent-provided close function
              }}
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NoteModel;
