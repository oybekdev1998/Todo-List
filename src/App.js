import React from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./components/context/AlertState"
import { FirebaseState } from "./components/context/firebaseContext/firebaseState";


const App = () => {

  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>  
    </FirebaseState>
  );
}

export default App;
