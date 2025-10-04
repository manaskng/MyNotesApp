import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { BsPinFill } from "react-icons/bs";

function NoteCard({ note, onEdit, onDelete, onPin }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{note.title}</h3>
          {note.isPinned && (
            <button onClick={() => onPin(note._id)} className="text-blue-500 hover:text-blue-700" aria-label="Unpin note">
              <BsPinFill className="flex-shrink-0" size={20} />
            </button>
          )}
        </div>
        
        <div 
          className="prose max-w-none text-gray-600 mb-4 prose-a:text-blue-600 hover:prose-a:underline" 
          dangerouslySetInnerHTML={{ __html: note.description }} 
        />
      </div>
      <div className="border-t pt-3 mt-auto">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
          <div className="flex space-x-3 items-center">
            <button onClick={() => onPin(note._id)} className="text-gray-500 hover:text-blue-600" aria-label="Toggle pin status">
              <BsPinFill size={18} />
            </button>
            <button onClick={() => onEdit(note)} className="text-gray-500 hover:text-blue-600" aria-label="Edit note">
              <FiEdit size={18} />
            </button>
            <button onClick={() => onDelete(note._id)} className="text-gray-500 hover:text-red-600" aria-label="Delete note">
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;