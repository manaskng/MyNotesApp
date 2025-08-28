import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteModel from "./NoteModel";
import { useLocation } from "react-router-dom";

function Home() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const location = useLocation(); // for search params

  // ✅ get backend URL from Vite env
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found. Please log in.");
        return;
      }

      const searchParams = new URLSearchParams(location.search);
      const search = searchParams.get("search") || "";

      const { data } = await axios.get(`${API_URL}/api/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const filteredNotes = search
        ? data.filter(
            (note) =>
              note.title.toLowerCase().includes(search.toLowerCase()) ||
              note.description.toLowerCase().includes(search.toLowerCase())
          )
        : data;

      setNotes(filteredNotes);
    } catch (error) {
      setError("Failed to fetch notes");
      console.error(error);
    }
  };

  const handleEdit = (note) => {
    setEditNote(note);
    setIsModalOpen(true);
  };

  const handleSaveNote = (newNote) => {
    if (editNote) {
      setNotes(notes.map((note) => (note._id === newNote._id ? newNote : note)));
    } else {
      setNotes([...notes, newNote]);
    }
    setEditNote(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchNotes();
  }, [location.search]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found. Please log in.");
        return;
      }

      await axios.delete(`${API_URL}/api/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      setError("Failed to delete note");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-500">
      {error && <p className="text-red-400 mb-4">{error}</p>}

      <NoteModel
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditNote(null);
        }}
        note={editNote}
        onSave={handleSaveNote}
      />

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gray-800 text-white text-3xl rounded-full shadow-lg hover:bg-gray-900 flex items-center justify-center"
      >
        <span className="pb-1">+</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div
            key={note._id}
            className="bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-medium text-white mb-2">
              {note.title}
            </h3>
            <p className="text-gray-300 mb-4">{note.description}</p>
            <p className="text-sm text-gray-400 mb-4">
              {new Date(note.updatedAt).toLocaleString()}
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(note)}
                className="bg-yellow-600 text-white px-3 py-1 rounded-md hover:bg-yellow-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(note._id)}
                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
