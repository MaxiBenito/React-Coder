import React from 'react'
import "../style/NavBar.css"

const navBar = () => {
  return (
    
    <ul>
      <li><a className="active" href="#home">Home</a></li>
      <li><a href="#home">home</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#products">products</a></li>
    </ul>
   
  )
}

export default navBar
