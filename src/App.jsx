import React from 'react'
import {  Outlet } from 'react-router-dom'
import Navbar from './Component/Layout/Navbar'
import Footer from './Component/Layout/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
