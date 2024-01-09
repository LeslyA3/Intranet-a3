import React from "react";
import logo from "../img/a3.png";
import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import conf from "../img/config.png";


function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
      <nav className="color">
      <div >
        <a href="/home" alt="logo">
          <img className="logo" src={logo} alt="logo" />
        </a>
       
      <a style={{padding:"3vw"}} href="/home" alt="home" className="enlace">
      Inicio
      </a>

        <Link to="/recordedHours" className="enlace">
          <a >Reportar horas</a>
        </Link>
        <Link to="/newEmployee" className="enlace">
          <a >Agregar empleado</a>
        </Link>
        <a href="" onClick={handleClick} className="enlace">
          Salir
        </a>
     
      </div>
    </nav> 
   
  );
}

export default NavBar;
