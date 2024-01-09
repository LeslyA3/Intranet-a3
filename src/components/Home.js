import React, { useEffect } from "react";
import "../styles/home.css";
import NavBar from "./NavBar";
import axios from "axios";
import { useState } from "react";
import "../styles/listRecordedHours.css"

function Home() {
  const [report, setReport] = useState(null);

  const getAllReports = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_URL_SERVICES +
          "/a3control/rest/a3controlService/reporteHoras"
      );

      //Elegir el primer valor por default en la lista
      if (response.status === 200) {
        console.log(response);
        setReport(response.data.response.tt_reporte.tt_reporte);
      } else {
        console.error("Actividad no encontrada", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error.message);
    }
  };

  useEffect(() => {
    getAllReports();
  }, []);
  return (
    <>
      <>
        <>
          <div>
            <NavBar></NavBar>
          </div>
        </>
        <div >Lista de horas</div>
      </>

<div className="tabl">
{report && report.map((report,index) =>(
<table  key={index} className="tables">
  <tr>
    <th>N# registro</th>
    <th>ID Empleado</th>
    <th>Fecha de registro</th>
    <th>Fecha de actividad</th>
    <th>Actividad</th>
    <th>Proyecto</th>
    <th>Horas</th>
    <th>Descripción</th>
    <th>Detalles</th>
  </tr>
  <tr>
  <td>{report.id_reporteHoras}</td>
    <td>{report.id_empleado}</td>
    <td>{report.fecha_registro}</td>
    <td>{report.fecha_actividad}</td>
    <td>{report.id_actividad}</td>
    <td>{report.id_proyecto}</td>
    <td>{report.horas}</td>
    <td>{report.descripcion}</td>
    <td>{report.Detalle}</td>
  </tr>
 {/*  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr> */}
  
</table>
 ))}
 </div>
    </>
  );
}

export default Home;
