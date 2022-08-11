import NotesList from "./components/NotesList"
import AddNote from "./components/AddNote"
import { useState } from "react"
import { nanoid } from 'nanoid'

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'This is my first note!',
    date: '28/04/2021'
  },
  {
    id: nanoid(),
    text: 'This is my second note!',
    date: '12/04/2021'
  },
  {
    id: nanoid(),
    text: 'This is my third note!',
    date: '2/04/2021'
  },
  {
    id: nanoid(),
    text: 'This is my fourth note!',
    date: '2/04/2021'
  }
])

const addNote = (text) => {
  const date = new Date()
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote]
  setNotes(newNotes)
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id)
  setNotes(newNotes)
}
  return (
    <div className="container">
      <NotesList notes={notes}
       handleAddNote={addNote}
       handleDeleteNote={deleteNote}/>
   
     </div>
    )
}

export default App