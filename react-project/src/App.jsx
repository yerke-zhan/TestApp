import React  from 'react';
import './App.css'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/About';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';







function App() {
  
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
<Route path = '/profile'element ={<Profile/>}/>
<Route path='/project' element={<Project/>}/>
<Route path='/about' element={<About/>}/>
{/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
    
   
      
    </BrowserRouter>
    
  )
}

export default App
