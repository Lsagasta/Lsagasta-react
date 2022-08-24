import "./App.css";

function App() {
  let imagen = "img/kcXp9cg0.jpg";
  let titulo = "McNuggets 6 unidades";
  let calorias = "238 kcal";
  let descripcion =
    "Seis piezas del mejor pollo rebozado sólo para vos. Comelas como quieras: con salsas o solas; todas son igual de deliciosas!";

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <img src={imagen} alt={titulo} className="img-fluid"></img>
        </div>
        <div className="col-md-4 ">
          <h1>{titulo}</h1>
          <h5>{calorias}</h5>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
