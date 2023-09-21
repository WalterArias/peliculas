import React, { useState } from "react";

const Eventos2 = () => {
  /* let nombre = "Walter Arias";  */ // esta definicion no respondera al evento, debe usar hook usestate
  const [nombre, setNombre] = useState("Walter Arias");

  const cambiarNombre = () => {
    setNombre("pedro Perez");
  };
  const cambiarDinamico = (e) => {
    setNombre(e.target.value);
  };
  //render
  return (
    <>
      <h1>EVENTOS 2</h1>
      <hr />
      <p className="bg-info p-3">{nombre}</p>
      <button className="btn btn-success" onClick={cambiarNombre}>
        Cambiar
      </button>
      <br />
      Escribe el Nombre :<input type="text" className="form-control" onKeyUp={cambiarDinamico}></input>
    </>
  );
};

export default Eventos2;
