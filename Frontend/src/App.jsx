import React from 'react'
import Home from './Home/Home'
import Courses from './Course/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import { Toaster } from 'react-hot-toast';

import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'

const App=()=>{
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return(
    <>
     {/* <Home/>
      <Course/>*/ }
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/Course' element={authUser?<Courses/>:<Navigate to="/signup"></Navigate>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
       <Toaster />
    </>
  )
}


export default App
