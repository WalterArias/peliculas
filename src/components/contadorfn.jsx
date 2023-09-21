import React, { useState } from "react";

const Contadorfn = () => {
  // variables : hook state   :
  // los hooks vienen incluidos en react, nos permiten trabajar sin clases
  const [contador, setContador] = useState(0);
  //metodos o funciones
  let aumentar = () => {};
  let disminuir = () => setContador(contador - 1);

  //renderizacion del componente
  return (
    <>
      <div className="col-3">
        {" "}
        <span className="badge bg-secondary">{contador}</span>
      </div>
      <div className="col-6">
        <button type="button" className="btn btn-primary" onClick={aumentar}>
          +
        </button>
        <button type="button" className="btn btn-danger" onClick={disminuir}>
          -
        </button>
      </div>
    </>
  );
};

export default Contadorfn;
