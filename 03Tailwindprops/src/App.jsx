import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from 'd:/PRANAY/React/03Tailwindprops/src/components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-green-400 text-black mb-4">
      Hello world!
    </h1>
    <Card username="Pranay" btn="visit me" img="https://lh3.googleusercontent.com/a/ACg8ocKxNEDMXx7LjAzDT1dMDp4wNPq6g7uFQzgRB6pEHN6M2akcnQk=s360-c-no" />  
    <Card username="Rakshit" btn="about me"/>
  </>
  )
}

export default App
