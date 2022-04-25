import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { IncomeCard } from "./income/IncomeCard";


export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
      <Route path="/" element={<PrivateOutlet />} />
      <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
      <Route path="/register" element={<Register />} />     
      <Route path="/income/create" element={<IncomeCard/>} /> 
          
      </Routes>
    </>
  );
};