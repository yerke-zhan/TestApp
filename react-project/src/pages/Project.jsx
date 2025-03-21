import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'



export default function Project() {
  
  const navigate= useNavigate();

  const [text, setText]=useState()
  const [text2, setText2]=useState()
  const [text3, setText3]=useState()
  return (

    <div>
        <h1>My Projects</h1>
        <h4> Here are some of my projects: </h4>
<ul> 
        <li>  <a href="https://yerke-zhan.github.io/WeatherAppFinal/"> Weather App </a>
        <button onClick={() => setText(!text)}>
        
        {text? "Back": "more..."}

    </button></li> 
    {text && <p>Weather App- қосымшасы ауа райын көруге арналған.Кез келген қаланың атын енгізіңіз. </p>}
            
            <li><a href="https://yerke-zhan.github.io/Recipe2/"> RecipeApp  </a>
            <button onClick={() => setText2(!text2)}>
        
        {text2? " Back": "more..."}

    </button></li>
    {text2 && <p>Recipe App- қосымшасы арқылы менюге қатысты барлық ақпаратты аласыз. Жаңа ресепт жазуға болады. </p>}
           
           <li><a href="https://yerke-zhan.github.io/NewYearProjesi/"> New Year Page </a>
            
            <button onClick={() => setText3(!text3)}>
        
        {text3? "Back": "more..."}

    </button></li> 
    {text3 && <p>New Year Page- сайты жаңа жылға құттықтаулар және жаңа жылдың басталуына қанша уақыт қалғанын көрсетеді. </p>}
    </ul>

      <button onClick={()=>navigate('/about')}>About Me</button>
     

    
    </div>


  )
}
