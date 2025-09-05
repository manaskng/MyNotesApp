// src/components/NoteCard.jsx

import React from "react";
import Linkify from "linkify-react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function NoteCard({ note, onEdit, onDelete }) {
  // Add styling to make links stand out
  const linkifyOptions = {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-blue-600 font-semibold hover:underline",
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{note.title}</h3>
        <p className="text-gray-600 mb-4 whitespace-pre-wrap">
          <Linkify options={linkifyOptions}>{note.description}</Linkify>
        </p>
      </div>
      <div className="border-t pt-3 mt-auto">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
          <div className="flex space-x-2">
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