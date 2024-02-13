import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='App'>
        <header><NavBar/></header>
        
        <h1><a href=''>Sign in</a></h1>
      </div>
    </>
  )
}

export default App
