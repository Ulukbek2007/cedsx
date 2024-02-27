import axios from 'axios'
import React, { useState } from 'react'
import close from '../assets/close.svg'
import deleteIcon from '../assets/delete.svg'
const Corzina = ({ cart, setCart }) => {
  const [count, setCount] = useState(1)
  const plus = (id) => {
    setCount(counts => ({
      ...counts,
      [id]: (counts[id] || 0) + 1
    }));
  };
  const minus = (id) => {
    setCount(counts => ({
      ...counts,
      [id]: Math.max((counts[id] || 0) - 1, 1)
    }));
  };
  const removeCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    setCount(prevCounts => {
      const { [id]: removedItem, ...restCounts } = prevCounts;
      return restCounts;
    });
  };
  const calculateTovar = () => {
    let total = 0;
    for (const item of cart) {
      const obtovar = count[item.id] || 1;
      if (isNaN(obtovar)) {
        obtovar=1
      }
      total += item.price * obtovar;
    }
    return total;
  };
  return (
    <div >{cart.length===0?<h1 style={{paddingLeft:'40px'}}>Ваша корзина пусто</h1>:<div> {cart.map((el) => (
      <div key={el.id} style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
        <button style={{padding:'10px',background:'transparent',display:'flex',alignItems:'center',justifyContent:'center'}} onClick={() => removeCart(el.id)}><img src={close} alt="" /></button>
        <img width={130} height={190} src={el.img} alt="" />
        <h2>{el.name}</h2>
        <h3>{el.price}$</h3>
        <button style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid',background:'transparent' }} onClick={() => minus(el.id)}>{count[el.id] <= 1 ? <img onClick={() => removeCart(el.id)} src={deleteIcon} alt="" /> : '-'}</button>
        <h3 style={{ width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid' }}>{ count[el.id]}</h3>
        <button style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid',background:'transparent' }} onClick={() => plus(el.id)}>+</button>
        <h3>{isNaN(count[el.id])?  el.price:count[el.id]*el.price}$</h3>
      </div>
    ))}
    <div style={{paddingLeft:'500px',gap:'50px',paddingTop:'20px',paddingBottom:"20px"}}>
      <button className="btnsq">Итого:{calculateTovar()}$</button>
      <button className="btnsq">Оформить заказ</button>
    </div></div>}     
    </div>
  )
}

export default Corzina