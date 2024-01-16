import React, { useEffect } from 'react'
import NavBar from './pages/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact';
import WOW from 'wowjs'

const App = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exect path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
