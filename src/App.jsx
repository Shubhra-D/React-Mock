import { useState } from 'react'
import { Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Books from '../src/pages/Books'
import BookDetail from '../src/pages/BookDetail'
import Login from './pages/Login'

function App() {
  

  return (
    <>
     <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<Books/>}/>
       <Route path='/login' element={<Login/>}/>
      <Route path='/books/:id' element={<BookDetail/>}/>
     </Routes>
    </>
  )
}

export default App
