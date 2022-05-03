import React, { useState, useEffect } from 'react';
import { getIncomeById, deleteIncome } from '../../modules/IncomeManager';
import './IncomeDetail.css';
import './Income.css';
import { useParams, useNavigate } from "react-router-dom";


export const IncomeDetail = () => {
  const [income, setIncome] = useState({ 
      budgetId: 0, 
      name: "", 
      description: "", 
      amount: "", 
      timestamp: "", 
      eventDate: "" 
    });
  //empty object
  // define component's state and get a fn for changeing state by calling useStaate
  const [isLoading, setIsLoading] = useState(true);
  const {incomeId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // call useEff to tell it a fn to call and get income data from db and update state once the html of comp is in the DOM
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
      <h3 className="income__name">Name: {income.name}</h3>
      <div className="income_description">Description: {income.description}</div>
      <div className="income_amount">Amount:$ {income.amount}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
         Remove
        </button>
    </section>
  );
};

