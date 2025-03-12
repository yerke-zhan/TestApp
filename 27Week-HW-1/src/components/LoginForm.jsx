import React, { useState } from 'react'

export default function LoginForm() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className='login'>
      {!isLoggedIn ? (
        <div >
          <h2 >Жүйеге кіру қажет</h2>
          <button onClick={() => setIsLoggedIn(true)}
          >Login </button>
            
         
          <br /><br />
          {!showRegister && (
            <button onClick={() => setShowRegister(true)}>Register</button>
          )}
          {showRegister && (<div ><input type="text"placeholder="Email/Телефон"/>
            <input type="password"
                placeholder="Құпия сөз"/><button onClick={() => setShowRegister(false)}>Register</button>
            </div>
          )}
        </div>) : ( <div >
          <h2 >Бастапқы бетке қош келдіңіз</h2>
          <button onClick={() => setIsLoggedIn(false)}>Log out</button></div>
      )}
    </div>
  );
}


   
  