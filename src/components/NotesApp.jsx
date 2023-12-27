import React from "react"
import NotesAppHeader from "./NotesAppHeader"
import NotesAppBody from "./NotesAppBody"
import { getInitialData } from "../utils/data"


class NotesApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData(),
    }
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this)
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this)
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({ notes })
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map(note => {
        if (note.id === id) {
          return {
            ...note,
            archived: true,
          }
        }
        return note;
      })
  
      return {
        notes: updatedNotes,
      }
    })
  }

  onUnarchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map(note => {
        if (note.id === id) {
          return {
            ...note,
            archived: false,
          }
        }
        return note;
      })
  
      return {
        notes: updatedNotes,
      }
    })
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }

        ]
      }
    })
  }
 
  render () {
    const activeNotes = this.state.notes.filter((note) => !note.archived)
    const archivedNotes = this.state.notes.filter((note) => note.archived)
    
    return (
      <>
        <NotesAppHeader />
        <NotesAppBody 
        addNotes={this.onAddNotesHandler}
        activeNotes={activeNotes}
        archivedNotes={archivedNotes}
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
        onUnarchive={this.onUnarchiveHandler}
        />
      </>
    )
  }
  }

export default NotesApp
