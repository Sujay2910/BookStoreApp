import React from 'react'
import Home from './Home/Home'
import Courses from './Course/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'

import { Route, Routes } from 'react-router-dom'

const App=()=>{
  return(
    <>
     {/* <Home/>
      <Course/>*/ }
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/Course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </>
  )
}


export default App
