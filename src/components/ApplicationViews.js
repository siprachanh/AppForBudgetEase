import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { IncomeList } from "./income/IncomeList";
import { IncomeDetail } from "./income/IncomeDetail";
import { Dashboard } from "./dashboard/Dashboard";
import {IncomeForm } from "./income/IncomeForm";
import { IncomeFormEdit } from "./income/IncomeFormEdit";


export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
      <Route path="/" element={<PrivateOutlet />} />
      <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
      <Route exact path="/register" element={<Register />} />    
      <Route path="/dashboard" element={<Dashboard/>} /> 

      <Route path="/income" element={<IncomeList/>} /> 
      <Route path="/income" element={<IncomeDetail/>} /> 
      <Route path="/income/:incomeId/edit" element={<IncomeFormEdit/>} />  
      <Route path="/income/create" element={<IncomeForm/>} /> 
      <Route path="/income/:incomeId" element={<IncomeDetail/>} /> 
      </Routes>
    </>
  );
};