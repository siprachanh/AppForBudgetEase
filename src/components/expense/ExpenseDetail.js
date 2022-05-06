import React, { useState, useEffect } from 'react';
import { getExpenseById, deleteExpense } from '../../modules/ExpenseManager';
import './ExpenseDetail.css';
import "./Expense.css";
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
  //define component's sate and get a fn for changing state by calling useState
  const [isLoading, setIsLoading] = useState(true);
  const {expenseId} = useParams();
  const navigate = useNavigate();

  //call useEffect to tell it a fn to call once the HTML of the component is in the DOM
  useEffect(() => {
    //getExpenseById(id) from ExpenseManager and hang on to the data; put it into state
   //useEffect calls this fn to get the expense data from db and update state
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
//fn returns our Jsx/html and shows up in app state along w other components
//the jsx/html is rendered again using our updated expense state
  return (
    <section className="expense">
      <h3 className="expense__name">Name: {expense.name}</h3>
      <div className="expense_budgetId">{expense.budgetId?.name}</div>
      <div className="expense__description">Description: {expense.description}</div>
      <div className="expense__amount">Amount:$ {expense.amount}</div>
      {/* <div className="expense__isPaid">is Paid: {expense.isPaid?.name}</div> */}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove
        </button>
    </section>
  );
};
