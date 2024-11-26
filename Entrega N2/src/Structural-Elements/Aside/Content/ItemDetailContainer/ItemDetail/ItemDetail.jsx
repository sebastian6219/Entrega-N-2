

import React, { useContext } from "react";
import "./itemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";
import { CartContext } from "../../../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleComprar = (count) => {
    agregarAlCarrito({ ...producto, cantidad: count });

    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      text: `${producto.title} - Cantidad: ${count}`,
      confirmButtonColor: "#E91E63",
      background: "white",
      timer: 2000,
    });
  };

  const { id, image, title, description, category, price } = producto;

  return (
    <div className="detalle-container">
      <div className="detalle-imagen">
        <img src={image} alt={`Imagen de ${title}`}className="prod-img"/>
      </div>
      <div className="detalle-info-contain">
        <div className="detalle-info">
          <h2 className="prod-title">{title}</h2>
          <h4 className="prod-category">{category}</h4>
        </div>
        <div className="cart-butom-item">
          <p className="prod-price">Precio: ${price}</p>
          <ItemCount fn={handleComprar}/>
        </div>
      </div>
    </div>
   
  );
};

export default ItemDetail;
