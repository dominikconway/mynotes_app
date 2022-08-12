import NotesList from "./components/NotesList"
import AddNote from "./components/AddNote"
import Search from './components/Search'
import Header from "./components/Header"
import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'Do Homework',
    date: '08/11/2021'
  },
  {
    id: nanoid(),
    text: 'Cook Dinner',
    date: '08/11/2021'
  },
  {
    id: nanoid(),
    text: 'Pick up BB',
    date: '08/12/2021'
  },
  {
    id: nanoid(),
    text: 'finish project',
    date: '2/04/2021'
  }
])

const [searchText, setSearchText] = useState('')

const [darkMode, setDarkMode] = useState('false')

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('notes_app-data'))

  if(savedNotes) {
    setNotes(savedNotes)
  }
}, [])

useEffect(()=> {
  localStorage.setItem('notes_app-data',
  JSON.stringify(notes))
}, [notes])

  

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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
   
     </div>
    </div>
    )
}

export default App