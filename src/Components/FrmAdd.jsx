export const FrmAdd = ({ peliculas, setPeliculas }) => {
  const getDatosFormulario = (e) => {
    e.preventDefault();
    let nuevaPelicula = {
      id: new Date().getTime(),
      nombre: e.target.nombre.value,
      descripcion: e.target.descripcion.value,
      calificacion: e.target.calificacion.value,
    };

    guardarLocal(nuevaPelicula);
  };

  const guardarLocal = (nuevaPelicula) => {
    let elementos = JSON.parse(localStorage.getItem("peliculas"));
    //agregamos al localstorage
    if (Array.isArray(elementos)) {
      elementos.push(nuevaPelicula); //verifica que sea  un arreglo y agrega un elemento al final
    } else {
      elementos = [nuevaPelicula]; //crea el arreglo local por primera vez
    }
    setPeliculas(elementos);
    localStorage.setItem("peliculas", JSON.stringify(elementos));
  };

  return (
    <form className="p-2" onSubmit={getDatosFormulario}>
      <h4>Agregar Pelicula</h4>
      <div className="mb-3">
        <input type="text" name="nombre" className="form-control" />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          name="descripcion"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <select name="calificacion" className="form-select">
          <option>Calificacion de la Pelicula</option>
          <option value="1">Una estrella</option>
          <option value="2">Dos Estrellas</option>
          <option value="3">Tres Estrellas</option>
          <option value="4">Cuatro estrella</option>
          <option value="5">Cinco Estrellas</option>
        </select>
      </div>
      <div className="mb-3">
        <button className="btn btn-success">Enviar</button>
      </div>
    </form>
  );
};
