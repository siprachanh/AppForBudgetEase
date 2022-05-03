import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { IncomeCard } from "./IncomeCard.js"
import { deleteIncome, getAllIncome } from "../../modules/IncomeManager";
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
        <h1 className="income-header"> Welcome to My Income Page</h1>
        <section className="section-content">
 
            <button type="button"
            className="btn"
            onClick={() => {navigate("/income/create")}}>
            [ Click Here to Add New Income ] 
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