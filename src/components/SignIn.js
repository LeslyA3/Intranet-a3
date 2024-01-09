import React from "react";
import passImg from "../img/contraseña.png";
import "../styles/sign.css";
import { Link } from "react-router-dom";
import a3 from "../img/usuario.png";
import Home from "./Home";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function SignIn() {
  const navigate = useNavigate()
  const user = useRef(null);
  const password = useRef(null);

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      let userValue = user.current.value
      let passwordValue = password.current.value
      
      const response = await axios.get(
        process.env.REACT_APP_URL_SERVICES + `/a3control/rest/a3controlService/login?id_usuario=${userValue}&pass=${passwordValue}`
      );
      
      
      // Validar el error
      if (response.data.response.opl_error) {
        Swal.fire({
          title: "Ocurrió un error",
          text: response.data.response.opc_msg,
          icon: "error"
        });
        return true
      }

      // Guardar el id del usuario en localStorage
      localStorage.setItem('id_user', user)
      navigate('/recordedHours')
    } catch (e) {
      console.error("Error al realizar la solicitud", e.message);
    }
  };


  /* useEffect(() => {
    

    fetchData();
  }, []);
 */





  return (
    <>
      <div className="container">
        {/* {localStorage.getItem("User") && localStorage.getItem("Password") ? (
          <Home />
        ) : ( */}
        <form style={{ paddingTop: "" }}>
          <div className="input-field">
            <img className="icon" alt="userImg" src={a3} />
            <input type="text" placeholder="Usuario" ref={user} autoComplete="off" required></input>
          </div>
          <p style={{ color: "red", fontSize: "small" }}></p>
          <div className="input-field" style={{ marginTop: "6px" }}>
            <img className="icon" alt="PassImg" src={passImg} />
            <input type="password" placeholder="Contraseña" ref={password}  required></input>
          </div>
          <p style={{ color: "red", fontSize: "small" }}></p>
          <div className="check-field">
            <input style={{ width: "15px", height: "15px" }}></input>
            <p style={{ color: "black" }}>Recuérdame</p>
          </div>
          <button type="submit" className="btn" onClick={fetchData}>
            Iniciar Sesión
          </button>
          <div>
            <Link to="/resetPassword">
              <a className="forgotpass">¿Olvidaste la contraseña?</a>
            </Link>
          </div>
        </form>
        {/* )} */}
      </div>
    </>
  );
}

export default SignIn;
