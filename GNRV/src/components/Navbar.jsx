import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/Acerca">Acerca de mí</Link> |{" "}
      <Link to="/Contacto">Contacto</Link> |{" "}
      <Link to="/Tablas">Tablas</Link>
    </nav>
  );
}

export default Navbar;