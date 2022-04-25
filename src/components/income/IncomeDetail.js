import React, { useState, useEffect } from 'react';
import { getIncomeById } from '../../modules/IncomeManager';
import './IncomeDetail.css';
import { useParams, useNavigate } from "react-router-dom";
import { deleteIncome} from '../../modules/IncomeManager';

export const IncomeDetail = () => {
  const [income, setIncome] = useState({ 
      id: 0,
      userId: 0, 
      budgetId: 0, 
      name: "", 
      description: "", 
      amount: "", 
      timestamp: 0, 
      eventDate: "" 
    });
  //empty object
  const [isLoading, setIsLoading] = useState(true);
  const {incomeId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getIncomeById(id) from IncomeManager and hang on to the data; put it into state
    console.log("useEffect", incomeId)
    getIncomeById(incomeId)
      .then(income => {
       setIncome(income);
    
    // pass/use the entire income rather than the deconstructed value to get income card detail to display 
    setIsLoading(false);
  });
     
  }, [incomeId]);

  const handleDelete = () => {
    //invoke the delete function in IncomeManger and re-direct to the income list.
    setIsLoading(true);
    deleteIncome(incomeId).then(() =>
      navigate("/income")
    );
  };

  return (
    <section className="income">
      <h3 className="income__name">{income.name}</h3>
      <div className="income_description">{income.description}</div>
     
      <div className="income_amount">Amount: {income.amount?.value}</div>
      <div className="income_timeinput">Time: {income.timestamp?.value}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
         DELETE
        </button>
    </section>
  );
};

