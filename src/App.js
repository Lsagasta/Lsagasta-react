import "./App.css";

import Header from "./assets/Header";
import ItemCount from "./assets/ItemCount";
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

      <ItemCount initial={1} stock={10} onAdd={onAdd} />

      <hr></hr>
    </div>
  );
}

export default App;
