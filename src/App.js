import NotesList from "./components/NotesList"
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
  return (
    <div className="container">
      <NotesList notes={notes} />
   
     </div>
    )
}

export default App