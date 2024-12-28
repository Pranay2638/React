import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authService from './appwrite/Auth' 
import {login,logout} from './store/authSlice'
import  Header  from './components/header/Header'
import  Footer  from './components/footer/Footer.jsx'

function App() {
 const [loading, setLoading] = useState(true)
 const dispatch = useDispatch() 

 useEffect(() => {
      authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=> setLoading(false))
 },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-slate-400'>
      <div className='w-full block'>
        <Header />
        <main>
          Todo:{}
        </main>
        <Footer />
      </div>
    </div> 
  ) : null
}

export default App
