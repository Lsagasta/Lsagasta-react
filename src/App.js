import "./App.css";

import Header from "./assets/Header";
import ItemCount from "./assets/ItemCount";
import ItemDetailContainer from "./assets/ItemDetailContainer";
import ItemListContainer from "./assets/ItemListContainer";
import Novedades from "./assets/Novedades";

function App() {
  const onAdd = (q) => {
    console.log(`Agregaste  ${q} discos al carrito  `);
  };

  return (
    <div>
      <Header />

      <Novedades />

      <ItemListContainer />

      <hr></hr>
      <ItemDetailContainer />

      <ItemCount initial={1} stock={10} onAdd={onAdd} />

      <hr></hr>
    </div>
  );
}

export default App;
