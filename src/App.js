import "./App.css";

import Header from "./assets/Header";
import ItemCount from "./assets/ItemCount";
import ItemDetailContainer from "./assets/ItemDetailContainer";
import ItemListContainer from "./assets/ItemListContainer";
import Novedades from "./assets/Novedades";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const onAdd = (q) => {
    console.log(`Agregaste  ${q} discos al carrito  `);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Novedades />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />;
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          ;
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          ;
        </Routes>
      </BrowserRouter>

      {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}

      <hr></hr>
    </div>
  );
}

export default App;
