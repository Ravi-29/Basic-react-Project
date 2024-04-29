import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'

import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <ContactHeader />
    </>
  )
}

export default App
