import "./styles/App.css";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path={"/" && "/Home"}
              element={<ItemListContainer contenido={"Comprá Online!"} />}
            />
            <Route path="/Categoria/Lomos" element=<h1>listado de Lomos</h1> />
            <Route
              path="/Categoria/Hamburguesas"
              element=<h1>listado de Hamburguesas</h1>
            />
            <Route
              path="/Categoria/Pizzas"
              element=<h1>listado de Pizzas</h1>
            />
            <Route path="/Cart" element=<h1> Carrito </h1> />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
