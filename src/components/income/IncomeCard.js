import React from "react";
import "./Income.css";
import { formatMDY } from "../../helpers/formatDate";
import { Link } from "react-router-dom";

export const IncomeCard = ({ index, income, handleDeleteIncome }) => {
    if (index === 0) {
      return (
        <>
          <div className="first-card" id={`income_${income.id}`}>
            <div className="first-card-font" id="first-event-font">
            <h3>Income Name: <span className="card-incomename">
            {income.name}
          </span></h3>
            <h6> Budget: {income.budgetId} </h6>
              <h6>
                {" "}
                Income Description:{" "}
                <span className="card-incomedescription">{income.description}</span>
              </h6>
              <h6> Income Date: {income.eventDate}</h6>
              <h6>
                <span className="incomecreated-date">{`Posted: ${formatMDY(
                  income.timestamp
                )}`}</span>
              </h6>
            </div>
            <section className="card--modifiers">
            <Link to={`/income/${income.id}`}>
                    <button> Details </button>
                </Link>
              <Link to={`/income/${income.id}/edit`}>
                <button className="btn" id="edit" type="button">
                  Edit
                </button>
              </Link>
  
              <button
                className="btn"
                id="delete"
                type="button"
                onClick={() => handleDeleteIncome(income.id)}
              >
                Delete 
              </button>
            </section>
          </div>
        </>
      );
    } else {
      return (
        <>
         <div className="card">
          <div className="card-content" id={`income_${income.id}`}>
            <div>
              <h3>
                {" "}
                Income Name:{" "}
                <span className="card-incomename">{income.name}</span>
              </h3>
              <h6> Budget: {income.budgetId} </h6>
              <h6>
                {" "}
                Income Description:{" "}
                <span className="card-incomedescription">{income.description}</span>
              </h6>
              <h6>
                {" "}
                Income Amount:{" "}
                <span className="card-incomeamount">{income.amount}</span>
              </h6>
              
              <h6> Income Date: {income.eventDate}</h6>
              <h6>
                <span className="incomecreated-date">{`Posted: ${formatMDY(
                  income.timestamp
                )}`}</span>
              </h6>
            </div>
            <section className="card--modifiers">
                <Link to={`/income/${income.id}`}>
                    <button> Details </button>
                </Link>
              <Link to={`/income/${income.id}/edit`}>
                <button className="btn" id="edit" type="button">
                  Edit
                </button>
              </Link>
  
              <button
                className="btn"
                id="delete"
                type="button"
                onClick={() => handleDeleteIncome(income.id)}
              >
                Delete 
              </button>
            </section>
          </div>
          </div>
        </>
      );
    }
  };