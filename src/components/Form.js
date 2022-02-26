import React, {useState, useContext} from "react"
import { AlertContext } from "./context/alertContext"

export const Form = () => {

  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const submitHandler = e => {
    e.preventDefault()

    if(value.trim()) {
      alert.show("Заметка была создана", 'success')
      setValue('')
    }
    else{
      alert.show("Введите название заметки")
    }
  }

  return (
    <form className="input-group" onSubmit={submitHandler}>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Введите название заметки" 
        aria-describedby="addon-wrapping" 
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}