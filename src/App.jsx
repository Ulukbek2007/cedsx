import React, { useEffect, useState } from 'react'
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
  const [active, setActive] = useState('Все')
  const [leng,setLeng]=useState()
  function activite(params) {
    setActive(params)
  }
  const [cart, setCart] = useState([])
  function cartclick(params) {
    const cartbtn = cart.find(item => item.id === params.id)
    if (cartbtn) {
      setCart(cart.map((item) => 
      item.id === params.id ? { ...item, quantity: item.quantity + 1 } : item))
    }
    else{
      setCart([...cart,{...params,quantity:1}])
    }
  }
useEffect(()=>{
  setLeng(cart.length)
})
console.log(leng);
  return (
    <div className='container'>
      <div className="con">
        <Header lang={leng} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop activite={activite} active={active} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail setCart={cartclick} />} />
          <Route path='/korzina' element={<Corzina setlang={setLeng} setCart={setCart} cart={cart} />} />
        </Routes>
      </div>
      <Footer activite={activite} active={active} />
    </div>
  )
}
export default App