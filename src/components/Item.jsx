import React from "react";
import useCount from "../hooks/useCount";
import ItemCount from "../components/ItemCount";
import "../styles/Item.css";

const Item = ({ item }) => {
  const { count, decrement, increment } = useCount(0);

  const onAdd = (nombredelItem, cantidadDeItem) => {
    console.log("Nombre del Producto: ", nombredelItem);
    console.log("Cantidad de Productos: ", cantidadDeItem);
  };

  return (
    <div>
      <div className="cartContainer">
        <img className="cartImg" src={item.img} alt={item.descripcion} />
        <div className="cartText">
          <h4>{item.titulo}</h4>
          <p>{item.descripcion}</p>
          <p>${item.precio}</p>
          <div>
            <ItemCount
              stock={item.stock}
              count={count}
              decrement={decrement}
              increment={increment}
            />
          </div>
          <button className="btnAdd" onClick={onAdd(item, count)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
