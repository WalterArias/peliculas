import { useState } from "react";
import { FrmAdd } from "./Components/FrmAdd";
import { FrmBuscar } from "./Components/FrmBuscar";
import { Inicio } from "./Components/Inicio";

function App() {
  const [peliculas, setPeliculas] = useState([]);

  return (
    <>
      <div className="container bg bg-light p-2">
        <div className="row bg bg-dark text-white p-2 mb-2">
          <div className="col">
            <h1> MIS PELICULAS PREDILECTAS</h1>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <FrmBuscar />
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="row">
              <Inicio peliculas={peliculas} setPeliculas={setPeliculas} />
            </div>
          </div>
          <div className="col-3">
            <FrmAdd peliculas={peliculas} setPeliculas={setPeliculas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
