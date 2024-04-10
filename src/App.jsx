import React from 'react'
import Header from './container/Header/Header'
import About from './container/About/About'
import Work from './container/Work/Work'
import Skill from './container/Skill/Skill'
import Testimonail from './container/Testimonail/Testimonail'
import Footer from './container/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <div className='container-fluid   bg-primaryColor'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonail />
      <Footer />
    </div>
  )
}
