import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './components/left/Left.jsx'
import Center from './components/Center/Center.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = "container">
    <Left />
    <Center />
    <div id = "right">right</div>
    </div>
    </>
  )
}

export default App
