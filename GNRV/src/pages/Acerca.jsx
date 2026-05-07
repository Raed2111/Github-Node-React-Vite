import { useAlumnoContext } from "../context/AlumnoContext";

function Acerca() {
  const { alumno } = useAlumnoContext();

  return (
    <div>
      <h1>Acerca de mí</h1>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Carrera:</strong> {alumno.carrera}</p>
      <p><strong>Grupo:</strong> {alumno.grupo}</p>
      <p><strong>Semestre:</strong> {alumno.semestre}</p>
    </div>
  );
}

export default Acerca;