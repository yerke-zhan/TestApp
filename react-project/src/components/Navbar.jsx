import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
   
    <nav>
        <Link to ={'/profile'} >My Profile</Link>
        <Link to ={'/project'}>My Projects</Link>
        <Link to={'/about'}>About Me</Link>
    </nav>
   
  )
}
