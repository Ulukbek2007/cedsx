import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import loading from '../assets/loading.svg'
const url = 'https://659d6043633f9aee79094a3d.mockapi.io/short/cards'
const Shop = ({ active, activite }) => {
    const [product, setData] = useState(null)
    async function showProduct() {
        const { data } = await axios.get(url)
        console.log(data);
        setData(data)
    }
    useEffect(() => {
        showProduct()
    }, [])
    if (product == null) {
        let clas = 'loading'
        return <img className={clas} src={loading} alt="" />
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>

            <div className="elements">
                <button onClick={(e) => activite(e.target.innerText)} className={active === 'Все' ? 'active' : ''} >Все</button>
                <button onClick={(e) => activite(e.target.innerText)} className={active === 'Пальто' ? 'active' : ''}   >Пальто</button>
                <button onClick={(e) => activite(e.target.innerText)} className={active === 'Свитшот' ? 'active' : ''}  >Свитшот</button>
                <button onClick={(e) => activite(e.target.innerText)} className={active === 'Кардиганы' ? 'active' : ''} >Кардиганы</button>
                <button onClick={(e) => activite(e.target.innerText)} className={active === 'Толстовки' ? 'active' : ''} >Толстовки</button>
            </div>
            <p>Показано {product.length} из {product.length}</p>
            <div className='cards'>
                {product.filter(el => el.nameproduct.includes(active === 'Все' ? 'Все' : active)).map((el) => (
                    <div key={el.id}>
                        <Link className='col' to={`/detail/${el.id}`}>
                            <img height={480} width={350} src={`${el.img}`} alt="" />
                            <h5 >{el.name}</h5>
                            <p >Цена: {el.price}$</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop
