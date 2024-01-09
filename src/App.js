import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import logo from "./img/a3.png";
import support from "./img/soporte.png";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <>
      <section style={{ display: "flex", height: "89vh", flexWrap: "wrap"}}>
        <div
          style={{
            flex: "1 1 50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <nav className="nav1">
            <img src={logo} alt="logo"></img>
            <p>“Especialistas en Transformación Digital y</p>
            <p>Automatización de Procesos de Negocio”.</p>
          </nav>
        </div>
        <div
          style={{
            flex: "1 1 50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {<SignIn></SignIn>}
        </div>
      </section>
      <FooterPage></FooterPage>
    </>
  );
}

export default App;
