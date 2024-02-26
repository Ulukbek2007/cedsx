import React from 'react'
import koinok from '../assets/koinok.svg'
import insta from '../assets/instagram.svg'
import face from '../assets/facebook.svg'
import twiter from '../assets/twitter.svg'
import cards from '../assets/visa-mastercard.svg'
import { Link } from 'react-router-dom'
const Footer = ({active,activite}) => {
  return (
      <div className='footer'>
            <div className="womaz">
                <div className="imk">
                    <div className="imks">
                        <img src={koinok} alt="" />
                        <p>WOMAZING</p></div>
                    <div className="pts">
                        <p>© Все права защищены</p>
                        <p>Политика конфиденциальности</p>
                        <p>Публичная оферта</p>
                    </div>
                </div>


                <div className="sred">
                    <Link className='links' to={'/'}><p>Главная</p></Link>

                    <div className="ptags">
                        <Link className='links' to={'/shop'}><p>Магазин</p></Link>
                        <div className="pta">
                            <p onClick={(e)=>activite(e.target.innerText)} className={active==='Пальто'?'active':''}   >Пальто</p>
                            <p onClick={(e)=>activite(e.target.innerText)} className={active==='Свитшот'?'active':''}  >Свитшот</p>
                            <p onClick={(e)=>activite(e.target.innerText)} className={active==='Кардиганы'?'active':''}>Кардиганы</p>
                            <p onClick={(e)=>activite(e.target.innerText)} className={active==='Толстовки'?'active':''}>Толстовки</p>
                        </div>
                    </div>
                    <Link className='links' to={'/about'}><p>О бренде</p></Link>
                    <Link  className='links' to={'/contact'}><p>Контакты</p></Link>
                </div>
                <div className="numb">
                    <div className="nim">
                      <p>+7 (495) 823-54-12</p>
                        
                        <p>hello@womazing.com</p>
                    </div>
                    <div className="icon">
                        <img src={insta} alt="" />
                        <img src={face} alt="" />
                        <img src={twiter} alt="" />
                    </div>
                    <div className="iconcard">
                        <img src={cards} alt="" />
                    </div>

                </div>
            </div>
    
    </div>
  )
}

export default Footer


        