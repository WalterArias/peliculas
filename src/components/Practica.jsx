import React, { useState } from "react";

const Practica = () => {
  let fecha = new Date();
  let year = fecha.getFullYear();

  //render
  return (
    <>
      hello
      {year}
    </>
  );
};

export default Practica;
