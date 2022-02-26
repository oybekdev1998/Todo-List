import React from "react"

export const Notes = ({notes}) => {
  return (
    <ul className="list-group">
      {notes.map(note => {
        return (
          <li 
            className="list-group-item d-flex justify-content-between"
            key={note.id}
          >
            <div>
              <strong>{note.title}</strong> &nbsp;
              <small>{new Date().toLocaleDateString()}</small>
            </div>
            <button type="button" className="btn btn-danger">Delete</button>
          </li>
        )  
      })}
    </ul>
  )
}