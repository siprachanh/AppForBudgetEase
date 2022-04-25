import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { IncomeCard } from "./income/IncomeCard";
import { IncomeDetail } from "./income/IncomeDetail";
import { Dashboard } from "./dashboard/Dashboard";
import {IncomeForm } from "./income/IncomeForm"


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
      <Route path="/income" element={<IncomeForm/>} /> 
      <Route path="/income" element={<IncomeDetail/>} /> 
          
      </Routes>
    </>
  );
};