import React from 'react';
import NavBar from './NavBar';
import "../styles/newEmployee.css"
import { Link } from 'react-router-dom';

function NewEmployeeIncome()  {
    return (
        <><div>
        <NavBar></NavBar>
        </div><div className="containerV3">
            <form className="containerV4">
                <h1>Ingresos</h1>
                <h3 style={{ fontWeight: "500" }} className="size1">Fecha de ingreso</h3>
                <input type="text" className="inputStyleV2 "></input>
                <h3 style={{ fontWeight: "500" }}  className="size1">Fecha de baja</h3>
                <input type="text" className="inputStyleV2"></input>
                <h3 style={{ fontWeight: "500" }}  className="size1">Motivo de baja</h3>
                <input type="text" className="inputStyleV2"></input>
                <h3 style={{ fontWeight: "500" }} className="size1">Sueldo neto</h3>
                <input type="date"></input>
                <h3 style={{ fontWeight: "500" }} className="size1">Sueldo bruto</h3>
                <input type="text" className="inputStyleV2"></input>
                <div className='checkboxs'>
                <h3 style={{ fontWeight: "500" }} className="size1 checkV1">Alta</h3>
                <input type="checkbox" className="inputStyleV2"></input>
                </div>
                <div className="btnStyle">
                    <Link to="/recordedHours" >
                    <button type="submit" className="btn-v3 sizeBtn">Siguiente</button>
                    </Link>
                </div>
            </form>
        </div></>
    );
};

export default NewEmployeeIncome;



