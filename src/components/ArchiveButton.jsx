import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
    if (archived) {
        return <button className="note-item__archive" onClick={() => onArchive(id)}>Pindahkan</button> 
    }
    return <button className="note-item__archive" onClick={() => onArchive(id)}>Arsipkan</button>
}

export default ArchiveButton