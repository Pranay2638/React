import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState(false)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow){
      str += "0123456789"
    }
    if(charAllow){
      str += "!@#$%^&*+-/{}[]()|~?"
    }

    for(let i=1; i<=length;i++){
       let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
       setPassword(pass)
    }
  },[length,numAllow,charAllow,setPassword])
  
  const copyToClipboard = useCallback( () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15)
  } , [password])

  useEffect(()=>{passwordGenerator();},[length,numAllow,charAllow,passwordGenerator])

  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}  className='outline-none w-full px-3 py-1' placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyToClipboard} className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0 hover:bg-transparent'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input  type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/> <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllow} id="numberInput" onChange={()=>{setNumAllow((prev) => !prev);}} /> <label>Number{numAllow}</label>
          </div>
          <div className='flex items-center gap-x-1'>
           <input type="checkbox" defaultChecked={charAllow} id="Character Input" onChange={()=>{setCharAllow((prev) => !prev);}} /> <label>Character{numAllow}</label>   
          </div>
        </div>
      </div>

  )
}

export default App
