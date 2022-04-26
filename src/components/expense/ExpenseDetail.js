import React, { useState, useEffect } from 'react';
import { getExpenseById, deleteExpense } from '../../modules/ExpenseManager';
import './ExpenseDetail.css';
import { useParams, useNavigate } from "react-router-dom";


export const ExpenseDetail = () => {
  const [expense, setExpense] = useState({ 
      budgetId: 0,
      name: "", 
      description: "", 
      amount: "", 
      isPaid: "", 
      timestamp: "", 
      eventDate: ""});
  //empty object
  const [isLoading, setIsLoading] = useState(true);
  const {expenseId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getExpenseById(id) from ExpenseManager and hang on to the data; put it into state
    console.log("useEffect", expenseId)
    getExpenseById(expenseId)
      .then(expense => {
       setExpense(expense);
   
    // pass/use the entire object rather than the deconstructed value to get card detail to display 
    setIsLoading(false);
  });
     
  }, [expenseId]);

  const handleDelete = () => {
    //invoke the delete function in ExpenseManger and re-direct to the Expense list.
    setIsLoading(true);
    deleteExpense(expenseId).then(() =>
      navigate("/expense")
    );
  };

  return (
    <section className="expense">
      <h3 className="expense__name">Name {expense.name}</h3>
      <div className="expense_budgetId">{expense.budgetId?.name}</div>
      <div className="expense__description">Description: {expense.description}</div>
      <div className="expense__amount">Amount: {expense.amount}</div>
      <div className="expense__isPaid">is Paid: {expense.isPaid?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove
        </button>
    </section>
  );
};
