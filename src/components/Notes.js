import React from "react"
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ({notes, onRemove}) => {
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map(note => {
        return (
          <CSSTransition 
          key={note.id}
          classNames={'note'}
          timeout={800}
          >
            <li className="list-group-item d-flex justify-content-between">
              <div>
                <strong>{note.title}</strong> &nbsp;
                <small>{note.date}</small>
              </div>
              <button 
              type="button" 
              className="btn btn-danger"
              onClick={() => onRemove(note.id) }
              >Delete</button>
            </li>
          </CSSTransition>
        )  
      })}
    </TransitionGroup>
  )
}