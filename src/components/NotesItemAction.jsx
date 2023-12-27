import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesItemAction({ id, onDelete, onArchive, archived }) {
    return (
        <div className="note-item__Action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} archived={archived}/>
        </div>
    )
}

export default NotesItemAction