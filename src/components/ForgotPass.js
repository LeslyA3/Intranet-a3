import React from "react";
import NavBar from "./NavBar";
import "../styles/forgotPass.css";
import { Link } from "react-router-dom";
import FooterPage from "./FooterPage";


function ForgotPage() {
  return (
    <>
      <div>
       
      </div>
     <div style={{display: "flex",height: "79vh",justifyContent: "center", paddingTop: "80px"}}>
      <div className="container transf">
        <form>
            <h1 className="etiqueta">Recupera tu cuenta</h1>
            <p className="label"> Introduce el correo electrónico para buscar tu cuenta.</p>
          <div className="input-field">
            <input type="text" placeholder="Correo electrónico"></input>
          </div>
          <div className="btns">
          <Link to="/">
          <button type="submit" className="btn-v2 size cancel">
            Cancelar
          </button>
          </Link>
          <Link to="#">
          <button type="submit" className="btn-v3 size">
            Buscar
          </button>
          </Link>
          </div>
        </form>
      </div>
      </div>
      <FooterPage></FooterPage>
    </>
  );
}

export default ForgotPage;
