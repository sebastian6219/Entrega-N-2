import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    const [producto , setProducto] = useState({})
    const [erro , setError] = useState(null)
    const [cargando,  setCargando] = useState(true)
    const {id} = useParams()



    useEffect(()=> {

        setCargando(true)
       
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=> setProducto(json))
        .finally(() => setCargando(false))



    },[id])

    return(

        <>
        {
            cargando ?
            <h3>Cargando......</h3>
            :
            <ItemDetail producto={producto}/>
        }
        </>
    )
}