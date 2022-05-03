import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addIncome } from "../../modules/IncomeManager";
import "./Income.css";

export const IncomeForm = () => {
  // state will contain both data as well as isLoading flag
  // define the initial state of the form inputs with useState

    const [income, setIncome] = useState({ 
        userId: parseInt(sessionStorage.getItem("AppForBudgetEase_user")), 
        budgetId: 0, 
        name: "", 
        description: "", 
        amount: "", 
        timestamp: Date.now(), 
        eventDate: "",
      });
    //empty object
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const newIncome = { ...income};
    // navi gives ability to change URL
    //constrolled component--what is in state
    const handleControlledInputChange = (e) => {
        let selectedVal = e.target.value;
        if (e.target.id.includes("Id")) {
          selectedVal = parseInt(selectedVal)
      }
      newIncome[e.target.id] = selectedVal
        setIncome(newIncome)
      };
    // const handleIncomeBudgetIdChange = (e) => {
    //     newIncome.budgetId = e.target.value;
    //     setIncome(newIncome);
    //   };
    // const handleIncomeDescriptionChange = (e) => {
    //   newIncome.description = e.target.value;
    //   setIncome(newIncome);
    // };

    // const handleIncomeAmountChange = (e) => {
    //     newIncome.amount = e.target.value;
    //     setIncome(newIncome);
    //   };
    //   const handleIncomeEventDateChange = (e) => {
    //     newIncome.amount = e.target.value;
    //     setIncome(newIncome);
    //   };
      
      const handleClickSaveIncome = (e) => {
        e.preventDefault(); //prevents browser from submitting form until ready
        addIncome(newIncome).then(() => navigate("/income"));
      };

      return (
          <>
           <form className="incomeForm">
        <h3 className="incomeForm__title">[ Create New Income Form ]</h3>
        {/* <fieldset> */}
          {/* <div className="form-group">
            <label htmlFor="BudgetId"> BudgetId:</label>
            <input
              type="text"
              id="budgetId"
              onChange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
              placeholder="Enter Budget Id"
              value={income.budgetId}
            />
          </div>
        </fieldset> */}
        <fieldset>
          <div className="form-group">
            <label htmlFor="name"> Income Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
              placeholder="Enter Income name"
              value={income.name}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="description"> Income Description:</label>
            <input
              type="text"
              id="description"
              onChange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
              placeholder="Enter Income description"
              value={income.description}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="amount"> Income Amount: $ </label>
            <input
              type="number"
              id="amount"
              onChange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
              placeholder="Enter Income amount"
              value={income.amount}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="eventDate"> Income Event Date:</label>
            <input placeholder="DD-MM-YY"
              type="date"
              id="eventDate"
              onChange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
              placeholder="Enter event date"
              value={income.eventDate}
            />
          </div>
        </fieldset>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClickSaveIncome}
        >
          Save Income
        </button>
        </form>
          </>
      )
};