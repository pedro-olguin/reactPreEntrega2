import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";
import useProducts from "../hooks/useProducts";
import useProduct from "../hooks/useProduct";

function ItemListContainer({ contenido }) {
  const { productos, cargando } = useProducts();
  const { producto, cargando: cargandoProducto } = useProduct(4);

  if (cargando) return <h1 className="cargando">Cargando...</h1>;

  console.log({ producto, cargandoProducto });
  return (
    <div>
      <h1>{contenido}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
