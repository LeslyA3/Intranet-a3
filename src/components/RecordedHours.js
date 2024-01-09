import React from "react";
import Navbar from "./NavBar";
import "../styles/recordedHours.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function RecordedHours() {
  const [activity, setActivity] = useState([]);
  const [projects, setProjects] = useState([]);

  // Variables from form
  const [projectSelected, setProjectSelected] = useState([]);
  const [activitySelected, setActivitySelected] = useState([]);
  const date = useRef(null);
  const hours = useRef(null);
  const description = useRef(null);
  const detail = useRef(null);

  const getAllActivities = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_URL_SERVICES +
          "/a3control/rest/a3controlService/actividad"
      );

      //Elegir el primer valor por default en la lista
      if (response.status === 200) {
        let options = response.data.response.tt_actividad.tt_actividad;
        setActivity(options);
        setActivitySelected(options[0].id_actividad);
      } else {
        console.error("Actividad no encontrada", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error.message);
    }
  };

  const getAllProyects = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_URL_SERVICES +
          "/a3control/rest/a3controlService/proyectosActivos"
      );
      if (response.status === 200) {
        let options = response.data.response.tt_proyecto.tt_proyecto;
        setProjects(options);
        setProjectSelected(options[0].id_proyecto);
      } else {
        console.error("Proyecto no encontrado", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error.message);
    }
  };

  const captureType = (e, type) => {
    
    if (type === "project") setProjectSelected(e.target.value);

    if (type === "activity") setActivitySelected(e.target.value);
  };

  const saveData = async (e) => {
    e.preventDefault();

    const dateAux = date.current.value.split('-').reverse().join('/');
    const hoursAux = hours.current.value;
    const descriptionAux = description.current.value;
    const detailAux = detail.current.value;

    const body = {
      request: {
        id_empleado: 1, // id del usuario que inicia sesion
        fecha_actividad: dateAux,
        id_actividad: activitySelected,
        id_proyecto: projectSelected,
        horas: hoursAux,
        descripcion: descriptionAux,
        detalle: detailAux,
      },
    };

    try {
      const response = await axios.post(
        process.env.REACT_APP_URL_SERVICES + "/a3control/rest/a3controlService/reporteHoras",
        body
      );
      console.log(response)

      if (response.status === 200) {
        console.log("response success")
      } else {
        console.error("Proyecto no encontrado", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error.message);
    }
  };

  useEffect(() => {
    getAllActivities();
    getAllProyects();
  }, []);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="containerV3">
        <form className="containerV4">
          <h1>Reporte de horas</h1>
          <h3 style={{ fontWeight: "500" }}>Fecha de actividad</h3>
          <input type="date" className="inputStyleV2" ref={date}></input>
          <h3 style={{ fontWeight: "500" }}>Actividad</h3>
          <select
            className="options"
            onChange={(e) => {
              captureType(e, "activity");
            }}
          >
            {activity &&
              activity.map((activity, index) => (
                <option value={activity.id_actividad} key={index}>
                  {activity.actividad}
                </option>
              ))}
          </select>
          <h3 style={{ fontWeight: "500" }}>Proyecto</h3>
          <select
            className="options"
            onChange={(e) => {
              captureType(e, "project");
            }}
          >
            {projects &&
              projects.map((project, index) => (
                <option value={project.id_proyecto} key={index}>
                  {project.proyecto}
                </option>
              ))}
          </select>
          <h3 style={{ fontWeight: "500" }}>Horas</h3>
          <input type="number" ref={hours}></input>
          <h3 style={{ fontWeight: "500" }}>Descripción</h3>
          <textarea
            className="inputStyleV2"
            rows="4"
            cols="50"
            ref={description}
          ></textarea>
          <h3 style={{ fontWeight: "500" }}>Detalle</h3>
          <textarea
            className="inputStyleV2"
            rows="4"
            cols="50"
            ref={detail}
          ></textarea>
          <div className="btnStyle">
            <button type="submit" className="btn-v3 sizeBtn" onClick={saveData}>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RecordedHours;
