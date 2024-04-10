import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Work from './Pages/Work/Work'
import { Outlet } from "react-router-dom";
import Contact from './Pages/Contact/Contact.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  )
}

export default App