import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { IncomeCard } from "./IncomeCard.js"
import { deleteIncome, getAllIncome, getAllBudgetIncome } from "../../modules/IncomeManager";
import "./Income.css";
import { formatDate } from "../../helpers/formatDate";

export const IncomeList = () => {
    const [income, setIncome] = useState([]);
  
    const navigate = useNavigate()
    const getIncome = () => {
         getAllIncome()
        .then(incomeFromAPI => {
            setIncome(incomeFromAPI)
       });
    }
       const handleDeleteIncome = id => {
        deleteIncome(id)
        .then(() => getAllIncome().then(setIncome));
    };

    useEffect(() => {
        getIncome();
    }, []);

    return (
        <>
        <h1 className="income-header"><strong> Welcome to My Income Page</strong></h1>
        <section className="section-content">
 
            <button type="button"
            className="btn"
            onClick={() => {navigate("/income/create")}}>
            <strong>[ Click Here to Add New Income ] </strong>
            </button>
            </section>
               <div className="incomeContainer-cards">
              {income.map((income, index) => 
              <IncomeCard 
              index = {index}
              key={income.id} 
              income={income}
              handleDeleteIncome= {handleDeleteIncome} />
              )}
               </div>
            </>
           );
              };