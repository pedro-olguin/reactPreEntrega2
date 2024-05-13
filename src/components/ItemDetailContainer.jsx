import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { getProductById } from "../mock/asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { producto, setProducto, cargando, setCargando } = useProduct();

  const { productoId } = useParams();

  useEffect(() => {
    if (productoId) {
      getProductById(productoId)
        .then((data) => {
          setProducto(data);
        })
        .finally(() => setCargando(false));
    }
  }, []);

  if (cargando) return <h1 className="cargando">Cargando...</h1>;

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
