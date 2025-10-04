// src/components/NoteCard.jsx

import React from "react";
import Linkify from "linkify-react";
import { FiEdit, FiTrash2, FiPin } from "react-icons/fi"; // 1. Import the Pin icon

// 2. Accept the new 'onPin' function as a prop
function NoteCard({ note, onEdit, onDelete, onPin }) {
  const linkifyOptions = {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-blue-600 font-semibold hover:underline",
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{note.title}</h3>
            {/* 3. Show a colored pin icon if the note is pinned */}
            {note.isPinned && <FiPin className="text-blue-500 flex-shrink-0" size={20} />}
        </div>
        <p className="text-gray-600 mb-4 whitespace-pre-wrap">
          <Linkify options={linkifyOptions}>{note.description}</Linkify>
        </p>
      </div>
      <div className="border-t pt-3 mt-auto">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
          <div className="flex space-x-3 items-center">
            {/* 4. The new Pin button */}
            <button
              onClick={() => onPin(note._id)}
              className="text-gray-500 hover:text-blue-600"
              aria-label="Pin note"
            >
              <FiPin size={18} />
            </button>
            <button
              onClick={() => onEdit(note)}
              className="text-gray-500 hover:text-blue-600"
              aria-label="Edit note"
            >
              <FiEdit size={18} />
            </button>
            <button
              onClick={() => onDelete(note._id)}
              className="text-gray-500 hover:text-red-600"
              aria-label="Delete note"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;