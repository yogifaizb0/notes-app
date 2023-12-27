import React from "react";
import { showFormattedDate } from "../utils/data";
import NotesItemContent from "./NotesItemContent";
import NotesItemAction from "./NotesItemAction";

function NotesItem({ title, createdAt, body, id, onDelete, onArchive, archived }) {
    return (
        <div className="note-item">
            <NotesItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
            <NotesItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived}/>
        </div>
    )
}

export default NotesItem