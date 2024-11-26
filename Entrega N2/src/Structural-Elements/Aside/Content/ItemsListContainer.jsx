import { useContext, useEffect, useState } from 'react';
import "./itemListContainer.css"
import Item from './Item/Item';


import { useParams } from "react-router-dom"


import { CartContext } from '../../../context/CartContext';



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { contexto } = useContext(CartContext)

    const { categoryName } = useParams()


    useEffect(() => {
        if (categoryName) {
            fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res=>res.json())
            .then(json=>setProductos(json))
            .finally(setCargando(false))
            
        } else{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductos(json))
            .finally(setCargando(false))
        }

    }, [categoryName])

    if (cargando) {

        return (

            <>
            <h2>Cargando.....</h2>
            </>

        )


    }

    return (

        <div className='itemContainer'>

            {productos.map((el) => {

                return (

                    <Item key={el.id} producto={el} />


                )

            })}



        </div>
    )


}

export default ItemListContainer