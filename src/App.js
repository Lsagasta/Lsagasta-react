import "./App.css";
import Card from "./assets/Card";
import Header from "./assets/Header";
import ItemCount from "./assets/ItemCount";
import ItemListContainer from "./assets/ItemListContainer";
import Novedades from "./assets/Novedades";

function App() {
  const onAdd = (q) => {
    console.log(`Agregaste 5 discos al carrito ${q} discos`);
  };

  return (
    <div>
      <Header />

      <hr></hr>

      <ItemListContainer greeting="Bienvenido a MIA Tienda de Vinilos" />

      <Novedades />

      <hr></hr>

      <ItemCount initial={1} stock={10} onAdd={onAdd} />

      <hr></hr>

      <Card />
    </div>
  );
}

export default App;
