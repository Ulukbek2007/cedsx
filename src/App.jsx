import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Corzina from './pages/Corzina'
const App = () => {
const [active,setActive]=useState('Все')
function activite(params) {
  setActive(params)
}
  return (
    <div className='container'>
      <div className="con">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop activite={activite} active={active} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/korzina' element={<Corzina />}/>
      </Routes>
      
      </div>
      <Footer activite={activite} active={active}/>
    </div>
  )
}

export default App