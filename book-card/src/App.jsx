import React from 'react'

import './App.css'
import BookCard from './components/BookCard'

function App() {
  return (
    <>
    <h1>My Profile Book Card </h1>
    <section>

    
    <BookCard 
    img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYabJ17_pk83XG-c4MX7NhlR5ZsULEwu6FAg&s"
    name ="Atomic Habits"
    author ="James Clear"
    data ="2018"
    />
    <BookCard
    img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3vKFM4rzCu15XXKoRkySwtrAph3IwqFxqaA&s"
    name ="The Psychology of Money"
    author ="Morgan Housel"
    data ="2020"/>
    <BookCard
    img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZqh2rKdRfae0UUwMe_-v0KB1g6J10neJkw&s"
    name ="Deep Work"
    author ="Cal Newport"
    data ="2016"/>
    </section>

    
      
    </>
  )
}

export default App
