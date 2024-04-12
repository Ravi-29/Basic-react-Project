import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  

  return (
    <>
      <nav className='container'>
        <div className='logo'>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li >Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>

      </nav>
    </>
  )
}

export default App
