import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routing