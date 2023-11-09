import React from "react";

const RenderCondicional = () => {
  let ciudades = ["Cali", "Medellin", "Bogota", "Pereira"];
  ciudades = [];

  //metodo de renderizado del componente
  return (
    <>
      <h1>COMPONENTE RENDER</h1>
      <hr />
      {/*  {si la longitud del arreglo ciudades es mayor a 0 o no es nulo} */}
      {ciudades.length > 0 || ciudades != null ? (
        <ul>
          {ciudades.map((ciudad, index) => {
            return <li key={index}>{ciudad}</li>;
          })}
        </ul>
      ) : (
        /*   {de lo contrario} */
        <>
          <div className="alert alert-danger" role="alert">
            No hay Informacion para mostrar !
          </div>
          <h1>
            <span className="badge bg-secondary">Error no hay datos !</span>
          </h1>
        </>
      )}
    </>
  );
};

export default RenderCondicional;
