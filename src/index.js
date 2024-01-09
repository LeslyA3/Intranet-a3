import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ForgotPass from "./components/ForgotPass";
import UserPage from "./components/UserPage";
import RecordedHours from "./components/RecordedHours";
import NewEmployee from "./components/NewEmployee";
import NewEmployeeIncome from "./components/NewEmployeeIncome";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/resetPassword" element={<ForgotPass />} />
        <Route path="/user" element={<UserPage/>}></Route>
        <Route path="/recordedHours" element={<RecordedHours/>}></Route>
        <Route path="/newEmployee" element={<NewEmployee/>}></Route>
        <Route path="/employeeIncome" element={<NewEmployeeIncome/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
