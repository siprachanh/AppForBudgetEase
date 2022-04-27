import React from "react";
import "./Expense.css";
import {Link } from "react-router-dom"

export const ExpenseCard = ({expense, handleDeleteExpense}) => {
    return (
        <div className="card">
        <div className="card-content">

          <h3>Name: <span className="card-expensename">
            {expense.name}
          </span></h3>
          <p>Description: {expense.description}</p>
        </div>
         <Link to={`/expense/${expense.id}`}>
          <button>Details</button>
          </Link>
          <Link to={`/expense/${expense.id}/edit`}>
           <button>Edit</button>
          </Link>
        <button type="button" onClick={() => handleDeleteExpense(expense.id)}>Remove</button>
      </div>
);
}
