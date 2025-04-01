import { useEffect } from "react";

export const Inicio = ({ peliculas, setPeliculas }) => {
  const leerLS = () => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));
    setPeliculas(peliculas);
    return peliculas;
  };

  const borrarPelicula = (id) => {
    //leer la base de datos local actual y la transformamos en arrary (Iterable)
    let bdLocal = leerLS();
    //creamos un nuevo array filtrando por id
    let bdNueva = bdLocal.filter((peliculas) => peliculas.id !== parseInt(id));
    //actualizamos el estdo del componente principal APP

    setPeliculas(bdNueva);
    //Guardamos en la base de datos local
    localStorage.setItem("peliculas", JSON.stringify(bdNueva));
  };
  //
  const editar = (e) => {
    e.preventDefault();
    console.log("click en editar");
  };
  useEffect(() => {
    leerLS();
  }, []);
  return (
    <>
      {peliculas.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          No hay peliculas en la base de datos
        </div>
      ) : (
        <>
          {peliculas.map((pelicula) => {
            return (
              <div className="col-sm-4" key={pelicula.id}>
                <div className="card m-1">
                  <div className="card-body">
                    <h5 className="card-title bg bg-secondary p-1 text-white">
                      {pelicula.nombre}
                    </h5>
                    <p className="card-text">{pelicula.descripcion}</p>
                    <span className="badge text-bg-info">
                      Calificacion:
                      {pelicula.calificacion}
                    </span>
                    <hr />
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        borrarPelicula(pelicula.id);
                      }}
                    >
                      Borrar
                    </button>
                    <button className="btn btn-primary m-1" onClick={editar}>
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
