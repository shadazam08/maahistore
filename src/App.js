import React from 'react'
import NavBar from './pages/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
