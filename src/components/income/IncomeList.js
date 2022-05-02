import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { IncomeCard } from "./IncomeCard.js"
import { deleteIncome, getAllIncome } from "../../modules/IncomeManager";
import "./Income.css";
import { formatDate } from "../../helpers/formatDate";

export const IncomeList = (handleEdit) => {
    const [income, setIncome] = useState([]);
  
    const navigate = useNavigate()
    const getIncome = () => {
        return getAllIncome()
        .then(incomeFromAPI => {
            setIncome(incomeFromAPI)
       })}
       const handleDeleteIncome = id => {
        deleteIncome(id)
        .then(() => getAllIncome().then(setIncome));
    };

    useEffect(() => {
        getIncome();
    }, []);

    return (
        <>
        <h2 className="income-header"> This is My Income Page</h2>
        <div>
            <Link to={`/income/create`}>
            <button type="button"
            className="btn"
            onClick={() => {navigate("/income/create")}}>
           <h4 className="button"> [ Click Here to Add New Income ] </h4>
            </button>
            </Link>

           </div>
               <div className="incomeContainer-cards">
              {income.map((income, index) => 
              <IncomeCard 
              index = {index}
              key={income.id} 
              income={income}
              handleEdit={handleEdit}
              handleDeleteIncome= {handleDeleteIncome} />
              )}
               </div>
            </>
           );
              };
