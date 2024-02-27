import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const url = 'https://659d6043633f9aee79094a3d.mockapi.io/short/cards/'
const Detail = ({ setCart }) => {
    const params = useParams()
    const navigate = useNavigate()
    const [impimg, setImpimg] = useState(null)
    async function detailImg(imgimp) {
        const { data } = await axios.get(url + imgimp)
        setImpimg(data)
    }
    useEffect(() => {
        detailImg(params.id)
    }, [])
    if (impimg === null) {
        return <h1>Loading...</h1>
    }
    const back = () => {
        navigate(-1)
    }
    return (
        <div className='chec'>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '1140px' }}>
                    <h2>{impimg.name}</h2>
                    <div style={{ display: 'flex', gap: '50px' }}>
                        <img width={400} height={500} src={impimg.img} alt="" />
                        <div style={{ flexDirection: 'column', display: 'flex', textAlign: 'start' }}>
                            <h2 style={{ fontWeight: '400' }}>{impimg.price}$</h2>
                            <p style={{ maxWidth: '281px', width: '281px', maxHeight: '95px', height: '95px', border: 'none' }}  >{impimg.description.slice(0, 200)}</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div style={{width:'400px',paddingTop:'20px',paddingBottom:'20px',gap:'30px',display:'flex',justifyContent:'space-between'}}>
                <button style={{width:'55%',padding: '10px' ,border:'none',color:'white',fontWeight:'200',fontSize:'18px',background:'#6E9C9F'}} onClick={() => setCart(impimg)} >Добавить корзину</button>
                <button style={{ padding: '10px',width:'35%' ,border:'none',color:'white',fontWeight:'200',fontSize:'18px',background:'#6E9C9F'}} onClick={back}>back</button></div>
        </div>
    )
}

export default Detail
