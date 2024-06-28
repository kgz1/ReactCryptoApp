import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import './App.css'
import HomePage from '../components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import News from '../components/News'

function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/news'} element={<News/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
