import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }) {

    if (notes.length === 0) {
        return <p className="notes-list__empty-message">Tidak ada catatan</p>
    }

    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NotesItem 
                    key={note.id} 
                    id={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    archived={note.archived}
                    {...note} />                    
                ))
            }
        </div>
    )
}

export default NotesList