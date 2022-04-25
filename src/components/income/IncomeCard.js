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
            <h6> Budget: {income.budgetid} </h6>
              <h6>
                {" "}
                Income Description:{" "}
                <span className="card-incomedescription">{income.description}</span>
              </h6>
              <h6> Income Date: {income.incomeDate}</h6>
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
                <button class="btn" id="edit" type="button">
                  Edit
                </button>
              </Link>
  
              <button
                class="btn"
                id="delete"
                type="button"
                onClick={() => handleDeleteIncome(income.id)}
              >
                Delete Income
              </button>
            </section>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="card-content" id={`income_${income.id}`}>
            <div>
              <h3>
                {" "}
                Income Name:{" "}
                <span className="card-incomename">{income.name}</span>
              </h3>
              <h6> Budget: {income.budgetid} </h6>
              <h6>
                {" "}
                Income Description:{" "}
                <span className="card-incomedescription">{income.description}</span>
              </h6>
              <h6> Income Date: {income.incomeDate}</h6>
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
                <button class="btn" id="edit" type="button">
                  Edit
                </button>
              </Link>
  
              <button
                class="btn"
                id="delete"
                type="button"
                onClick={() => handleDeleteIncome(income.id)}
              >
                Delete Income
              </button>
            </section>
          </div>
        </>
      );
    }
  };