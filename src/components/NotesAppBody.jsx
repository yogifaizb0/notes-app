import React from "react"
import NotesList from "./NotesList"
import NotesInput from "./NotesInput"

function NotesAppBody({ addNotes, activeNotes, archivedNotes, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-app__body">
      <NotesInput addNotes={addNotes}/>
      <h2>Daftar Catatan</h2>
      <NotesList 
      notes={activeNotes} 
      onDelete={onDelete} 
      onArchive={onArchive}
      />
      <h2>Arsip</h2>
      <NotesList 
      notes={archivedNotes} 
      onDelete={onDelete} 
      onArchive={onUnarchive}
      />
    </div>
  )

} 
    
export default NotesAppBody
