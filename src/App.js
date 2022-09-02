import "./App.css";
import Header from "./assets/Header";
import ItemListContainer from "./assets/ItemListContainer";
import Novedades from "./assets/Novedades";

function App() {
  return (
    <div>
      <Header />

      <hr></hr>

      <ItemListContainer greeting="Bienvenido a MIA Tienda de Vinilos" />

      <hr></hr>

      <Novedades />
    </div>
  );
}

export default App;
