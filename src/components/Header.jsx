import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import koinok from '../assets/koinok.svg'
import phone from '../assets/phone.svg'
import korz from '../assets/korz.svg'
const Header = () => {
const [activ,setActive]=useState('')
function active(params) {
    setActive(params)
}
    return (
        <div className='head'>
            <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo">
                    <img src={koinok} alt="" />
                    <h2>WOMAZING</h2>
                </div>
                <Link className='links' to='/'><p className={activ==="Главная"?'active':''} onClick={(e)=>active(e.target.innerText)} style={{fontWeight:'600'}}>Главная</p> </Link>
                <Link className='links' to='/shop'><p  className={activ==="Магазин"?'active':''}onClick={(e)=>active(e.target.innerText)} style={{fontWeight:'600'}}>Магазин</p> </Link>
                <Link className='links' to='About'><p  className={activ==="О бренде"?'active':''}onClick={(e)=>active(e.target.innerText)} style={{fontWeight:'600'}}>О бренде</p> </Link>
                <Link className='links' to='/contact'><p className={activ==="Контакты"?'active':''} onClick={(e)=>active(e.target.innerText)} style={{fontWeight:'600'}}>Контакты </p></Link>
                <div className="phone">
                    <img src={phone} alt="" />
                    <p>+7 (495) 823-54-12</p>
                    <Link style={{ textDecoration: 'none' }} to={'/korzina'}><img src={korz} alt="" /></Link>

                </div>
            </ul>
        </div>
    )
}

export default Header