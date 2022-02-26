import React, {useContext, useEffect} from "react"
import { FirebaseContext } from "../components/context/firebaseContext/firebaseContext"
import { Form } from '../components/Form'
import { Loader } from "../components/Loader"
import { Notes } from "../components/Notes"


export const Home = () => {

  const {loading, notes, fetchNotes} = useContext(FirebaseContext)
  
  useEffect(()=>{
    fetchNotes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="container pt-4">
      <Form />
      <hr/>

      {
        loading
        ? <Loader />
        : <Notes notes={notes} />
      }
      
    </div>  
  )
}

