
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget';



import "./navbar.css"


function Navbar() {

    const [categorias, setCategorias] = useState([])
    const [cargando , setCargando] = useState(true)


    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.custom-navbar');

       
        if (window.scrollY > 32) {
          navbar.classList.add('navbar-fixed');
        } else {
          navbar.classList.remove('navbar-fixed');
        }
      });



    useEffect(() => {

        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategorias(json))

    }, [])




    return (

        <nav className="custom-navbar">
            <div className="navbar-container">



                <div className="navbar-menu" id="navbarMenu">
                    <div className="navbar-links">
                        <Link key="home" to={`/`} className="nav-item" aria-current="page">Inicio</Link>

                        {
                            categorias.length > 0 && categorias.map(e =>
                                <Link key={e} to={`/categoria/${e}`} className="nav-item" aria-current="page">{e}</Link>
                            )
                        }

                        <Link rel="stylesheet" className="nav-item" to={`/cart`} key="carrito">
                            <CartWidget/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )

}


export default Navbar