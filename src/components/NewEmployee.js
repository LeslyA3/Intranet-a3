import React from 'react';
import NavBar from './NavBar';
import "../styles/newEmployee.css"
import { Link } from 'react-router-dom';


function NewEmployee() {
    return (
        <><div>
            <NavBar></NavBar>
        </div><div className="containerV3">
                <form className="containerV4">
                    <h1>Nuevo empleado</h1>
                    <h3 style={{ fontWeight: "500" }} className="size1">Nombre</h3>
                    <input type="text" className="inputStyleV2 "></input>
                    <h3 style={{ fontWeight: "500" }}  className="size1">Apellido paterno</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }}  className="size1">Apellido materno</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">Fecha de nacimiento</h3>
                    <input type="date"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">Telefono</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">email</h3>
                    <input type="email" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">RFC</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">CURP</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">NSS</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">Dirección</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">Zona</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">Departamento</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">Puesto</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1">Email personal</h3>
                    <input type="text" className="inputStyleV2"></input>
                    <div className='checkboxs'>
                    <h3 style={{ fontWeight: "500" }} className="size1 checkV1">Activo</h3>
                    <input type="checkbox" className="inputStyleV2"></input>
                    <h3 style={{ fontWeight: "500" }} className="size1 checkV1">Alta</h3>
                    <input type="checkbox" className="inputStyleV2"></input>
                    </div>
                  
                
                    <div className="btnStyle">
                        <Link to="/employeeIncome" >
                        <button type="submit" className="btn-v3 sizeBtn">Siguiente</button>
                        </Link>
                    </div>
                </form>
            </div></>
    );
}

export default NewEmployee;