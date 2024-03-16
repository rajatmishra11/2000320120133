import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const id=2000320120133
  const name="Rajat Mishra"
  //useNavigate Hook-
  const navigate= useNavigate();
  function gotoAbout() {
    // navigate('/about');
    navigate('/about', {state: {roll_no : id, name: name}});
  }

  return (
    <>
    <div>Home</div>
    <Link to="/about">About</Link> <br />
    <button onClick={gotoAbout}>Contact Us</button>
    </>
    
  )
}

export default Home