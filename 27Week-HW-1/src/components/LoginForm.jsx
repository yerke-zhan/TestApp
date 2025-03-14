import React, { useState } from 'react';

export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className='login'>
      {!isLoggedIn ? (
        <div>
          <h2>Жүйеге кіру қажет</h2>

          
          {!showRegister && (
            <button onClick={() => setIsLoggedIn(true)}>Кіру</button>
          )}

          <br /><br />

          {!showRegister ? (
            <button onClick={() => setShowRegister(true)}>Тіркелу</button>
          ) : (
            <div>
              <input type="text" placeholder="Email/Телефон" />
              <input type="password" placeholder="Құпия сөз" />
              <button onClick={() => setShowRegister(false)}>Тіркелу</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Бастапқы бетке қош келдіңіз</h2>
          <button onClick={() => setIsLoggedIn(false)}>Шығу</button>
        </div>
      )}
    </div>
  );
}
