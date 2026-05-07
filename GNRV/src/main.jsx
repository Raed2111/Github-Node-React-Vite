import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AlumnoProvider } from "./context/AlumnoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlumnoProvider>
      <App />
    </AlumnoProvider>
  </BrowserRouter>
);