import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { IncomeList } from "./income/IncomeList";
import { IncomeDetail } from "./income/IncomeDetail";
import {IncomeForm } from "./income/IncomeForm";
import { IncomeFormEdit } from "./income/IncomeFormEdit";
import { ExpenseList } from "./expense/ExpenseList";
import { ExpenseDetail } from "./expense/ExpenseDetail";
import { ExpenseForm } from "./expense/ExpenseForm";
import { ExpenseFormEdit } from "./expense/ExpenseFormEdit";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Budget } from './budget/Budget';
import { IncomeTotal } from "./income/IncomeTotal";
import { ExpenseTotal } from "./expense/ExpenseTotal";



export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
  
      <Routes>
      <Route path="/" element={<PrivateOutlet />} />
      <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
      <Route exact path="/register" element={<Register />} />    
      <Route path="/budget" element={<Budget/>} /> 

     
      <Route path="/income" element={<IncomeList/>} /> 
     
      <Route path="/income/:incomeId/edit" element={<IncomeFormEdit/>} />  
      <Route path="/income/create" element={<IncomeForm/>} /> 
      <Route path="/income/:incomeId" element={<IncomeDetail/>} /> 
      

      <Route path="/expense" element={<ExpenseList/>} /> 
      <Route path="/expense/:expenseId" element={<ExpenseDetail/>} /> 
      <Route path="/expense/create" element={<ExpenseForm/>} /> 

      <Route path="/expense/:expenseId/edit" element={<ExpenseFormEdit/>} /> 
      {/* <Route path="/expense/create" element={<ExpenseTotal/>} />  */}
      </Routes>
 
  );
};
//   <AppProvider>   </AppProvider>
// import { Remaining} from './budget/RemainingBudget';
//import { AppProvider } from "../context/AppContext";
// {/* <Route path="/budget" element={<Remaining/>} />  */}
// {/* <Route path="/income" element={<IncomeDetail/>} />  */}
//link AppContext to app by wrapping the components we want to pass the state to with the AppProvider