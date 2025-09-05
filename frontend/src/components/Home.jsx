// src/components/Home.jsx (with client-side search)

import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteModel from "./NoteModel";
import NoteCard from "./NoteCard";
import { useLocation } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function Home() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const location = useLocation();

  const API_URL = import.meta.env.VITE_API_URL;

  // This useEffect block is modified to filter on the frontend
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found. Please log in.");
          return;
        }

        const { data } = await axios.get(`${API_URL}/api/notes`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Get search term from URL
        const searchParams = new URLSearchParams(location.search);
        const search = searchParams.get("search") || "";

        // Filter the notes on the client-side
        const filteredNotes = search
          ? data.filter(
              (note) =>
                note.title.toLowerCase().includes(search.toLowerCase()) ||
                note.description.toLowerCase().includes(search.toLowerCase())
            )
          : data;
        
        // Sort by most recently updated
        const sortedNotes = filteredNotes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        setNotes(sortedNotes);
      } catch (error) {
        setError("Failed to fetch notes");
        console.error(error);
      }
    };
    fetchNotes();
  }, [location.search, API_URL]);

  const handleEdit = (note) => {
    setEditNote(note);
    setIsModalOpen(true);
  };

  const handleSaveNote = (savedNote) => {
    if (editNote) {
      setNotes(
        notes.map((note) => (note._id === savedNote._id ? savedNote : note))
      );
    } else {
      setNotes([savedNote, ...notes]);
    }
    setEditNote(null);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      setError("Failed to delete note");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

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
        onClick={() => {
          setEditNote(null);
          setIsModalOpen(true);
        }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white text-3xl rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Create new note"
      >
        <FiPlus />
      </button>

      {notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-16">
          <h2 className="text-2xl font-semibold">No notes yet!</h2>
          <p className="mt-2">Click the '+' button to create your first note.</p>
        </div>
      )}
    </div>
  );
}

export default Home;