import React from 'react'
import '../index.css'


 export default function Header(props){

  return(
    <header>
    <h1>Logo</h1>
    <h2>{props.title}</h2>
    
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div>
      {props.text/* Here will be time! */}
      {props.Yerke}
    </div>
  </header>
  )
  }
  