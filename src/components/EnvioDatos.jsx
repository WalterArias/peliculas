import React from "react";
const EnvioDatos = (props) => {
  //enviando datos entre componentes usando el objeto js props
  return (
    <>
      <h1>otro componente el de los datos</h1>
      <hr />
      {props.nombre}
    </>
  );
};

export default EnvioDatos;
