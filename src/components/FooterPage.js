import React from 'react';
import { Link } from 'react-router-dom';
import support from "../img/soporte.png"
import "../styles/footer.css"

function FooterPage() {
    return (
        <div>
            <footer>
          <p
            className="pcopy"
            style={{ textAlign: "center", fontSize: "small" }}
          >
            &copy; 2023 Todos los derechos reservados. A3 SERVICIOS DE
            TECNOLOGIA SA DE C.V.
          </p>
         {/*  <div className="support">
         <img alt='supportImg' src={support} style={{paddingRight:"10px"}}></img> 
          <Link to="#"><a className='decoration'>Asistencia técnica</a></Link>
          </div> */}
        </footer>
        </div>
    );
}

export default FooterPage;