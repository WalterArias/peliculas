import React from "react";

const Eventos = () => {
  const mostrarMensaje = (e) => {
    console.log(e); // usamos el parametro de todo evento en js para obtener las propiedades
    console.log("sobre la imagen");
  };

  // render
  return (
    <>
      <h1>CONTROL DE EVENTOS</h1>
      <hr />
      <img className="rounded-5" src="./images/logoSena.png" alt="imagen" width={100} onMouseOver={mostrarMensaje} />
    </>
  );
};

export default Eventos;
