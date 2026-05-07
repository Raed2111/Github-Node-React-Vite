import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno] = useState({
    nombre: "Juan Pérez",
    carrera: "Ingeniería en Sistemas",
    grupo: "5-1",
    semestre: "5to"
  });

  return (
    <AlumnoContext.Provider value={{ alumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumnoContext() {
  return useContext(AlumnoContext);
}