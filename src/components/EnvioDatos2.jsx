import React from "react";
const EnvioDatos2 = ({ nombre, edad }) => {
  //enviando datos entre componentes usando destructuring
  return (
    <>
      <h1>otro componente el de los datos</h1>
      <hr />
      el nombre es: {nombre}
      <br />
      la edad es : {edad}
    </>
  );
};

export default EnvioDatos2;
