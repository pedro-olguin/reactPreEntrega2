import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div key={producto.id}>
      <div className="cartContainer">
        <img
          className="cartImg"
          src={producto.img}
          alt={producto.descripcion}
        />
        <div className="cartText">
          <h4>{producto.titulo}</h4>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          <div>
            <ItemCount
              stock={producto.stock}
              count={count}
              decrement={decrement}
              increment={increment}
            />
          </div>
          <button className="btnAdd" onClick={() => onAdd(producto, count)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
