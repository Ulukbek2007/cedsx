import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const url = 'https://659d6043633f9aee79094a3d.mockapi.io/short/cards/'
const url1 = 'https://659d6043633f9aee79094a3d.mockapi.io/short/cards/'

const Detail = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [learns, setLearns] = useState('')
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
                            <h2 style={{ fontWeight: '400' }}>{impimg.price}</h2>
                            <p style={{ maxWidth: '281px', width: '281px', maxHeight: '95px', height: '95px', border: 'none' }}  >{impimg.description.slice(0, 200)}</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <button >Добавить корзину</button>


            <button style={{padding:'10px'}} onClick={back}>back</button>

        </div>
    )
}

export default Detail
