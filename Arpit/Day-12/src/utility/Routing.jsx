import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home  from '../Component/home'
import Portfolio from '../Component/Portfolio'

const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
  </Routes>
  )
}

export default Routing
