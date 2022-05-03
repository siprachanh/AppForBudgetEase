import React from "react";
import "./Expense.css";
import { formatMDY } from "../../helpers/formatDate";
import {Link } from "react-router-dom"

//Expense gets called by its parent
export const ExpenseCard = ({index, expense, handleDeleteExpense}) => {
  const theDate = formatMDY(expense.timestamp);
  if (index === 0) { 
  return (
      <>
        <div className="first-card" id={'expense_${expense.id}'}>
        <div className="first-card-font" id="first-event-font">

          <h3>Expense Name: <span className="card-expensename">
            {expense.name}
          </span></h3>
          <h6> Expense Description: {expense.description}</h6>
          <h6> Expense Amount: $
                <span className="card-expenseamount">{expense.amount}</span>
              </h6>
          <h6> Expense Due Date: {expense.eventDate}</h6>
          <h6>Date Expense Posted: 
              
                <span className="expensecreated-date">{theDate}</span>
             
              </h6>
        </div>
         <Link to={`/expense/${expense.id}`}>
          <button>Details</button>
          </Link>
          <Link to={`/expense/${expense.id}/edit`}>
           <button>Edit</button>
          </Link>
        <button type="button" onClick={() => handleDeleteExpense(expense.id)}>
          Remove</button>
      </div>
      </>
);
} else {
  return (
    <>
      <div className="card">
      <div className="card-content" id={`expense_${expense.id}`}>
        <h4>Expense Name: <span className="card-expensename">
          {expense.name}
        </span></h4>
        <h4>Expense Description: {expense.description}</h4>
        <h6> Expense Amount: $
                <span className="card-expenseamount">{expense.amount}</span>
              </h6>
        <h6> Expense Due Date: {expense.eventDate}</h6>
              <h6>Date Expense Posted: 
                <span className="expensecreated-date"> {theDate}</span>
              </h6>
      </div>
       <Link to={`/expense/${expense.id}`}>
        <button>Details</button>
        </Link>
        <Link to={`/expense/${expense.id}/edit`}>
         <button>Edit</button>
        </Link>
      <button type="button" onClick={() => handleDeleteExpense(expense.id)}>
        Remove</button>
    </div>
    </>
);
}
}
