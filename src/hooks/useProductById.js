import { useEffect, useState } from "react";
import { getProductById } from "../mock/asyncMock";

export default function useProductById(productoId) {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  console.log({ productoId });

  useEffect(() => {
    getProductById(productoId)
      .then((producto) => {
        console.log({ producto });
        setProducto(producto);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [productoId]);

  return {
    producto,
    cargando,
  };
}
