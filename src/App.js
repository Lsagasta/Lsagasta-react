import "./App.css";
import Header from "./assets/Header";
import ItemCount from "./assets/ItemCount";
import ItemListContainer from "./assets/ItemListContainer";
import Novedades from "./assets/Novedades";

function App() {
  return (
    <div>
      <Header />

      <hr></hr>

      <ItemListContainer greeting="Bienvenido a MIA Tienda de Vinilos" />

      <hr></hr>

      <ItemCount />

      <Novedades />
    </div>
  );
}

export default App;
