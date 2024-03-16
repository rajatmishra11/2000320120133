import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location= useLocation();
  return (
    <div>
      <h1>About Page</h1>
      <h2> I'm {location.state.name} and my Roll_no is: {location.state.roll_no}</h2>
    </div>
  )
}

export default About