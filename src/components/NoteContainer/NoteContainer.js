import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'

export default function NoteContainer(props) {
  const reverseArr = (arr) => {
    const array = []
    for(let i = arr.length-1; i>=0; --i) {
      array.push(arr[i])
    }
    return array
  }

  const notes = reverseArr(props.notes)
  return (
    <div className='note-container'>
        <h2>Notes</h2>
        <div className='note-container_notes custom-scroll'>
          { notes?.length > 0 ?
            notes.map((note) => 
              <Note key={note.id} note={note} deleteNote={props.deleteNote} updateText={props.updateText} />
            ) : <h3>No notes present</h3>
          }
            
        </div>
    </div>
  )
}
