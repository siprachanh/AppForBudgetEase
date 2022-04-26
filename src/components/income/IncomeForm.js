import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addIncome } from "../../modules/IncomeManager";
import "./Income.css";

export const IncomeForm = () => {
    const [income, setIncome] = useState({ 
        id: 0,
        userId: 0, 
        budgetId: 0, 
        name: "", 
        description: "", 
        amount: "", 
        timestamp: 0, 
        eventDate: Date.now(),
      });
    //empty object
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const newIncome = { ...income};
    //constrolled component--what is in state
    const handleIncomeNameChange = (e) => {
        newIncome.name = e.target.value;
        setIncome(newIncome);
      };
    const handleIncomeBudgetIdChange = (e) => {
        newIncome.budgetId = e.target.value;
        setIncome(newIncome);
      };
    const handleIncomeDescriptionChange = (e) => {
      newIncome.description = e.target.value;
      setIncome(newIncome);
    };

    const handleIncomeAmountChange = (e) => {
        newIncome.amount = e.target.value;
        setIncome(newIncome);
      };
      const handleIncomeEventDateChange = (e) => {
        newIncome.amount = e.target.value;
        setIncome(newIncome);
      };
      
      const handleClickSaveIncome = (e) => {
        e.preventDefault(); //prevents browser from submitting form until ready
        addIncome(newIncome).then(() => navigate("/income"));
      };

      return (
          <>
           <form className="incomeForm">
        <h3 className="incomeForm__title">Create New Income Form</h3>
        <fieldset>
          <div className="form-group">
            <label htmlFor="BudgetId"> BudgetId:</label>
            <input
              type="text"
              id="budgetId"
              onChange={handleIncomeBudgetIdChange}
              required
              autoFocus
              className="form-control"
              placeholder="Enter Budget Id"
              value={income.budgetId}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name"> Income Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleIncomeNameChange}
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
              onChange={handleIncomeDescriptionChange}
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
            <label htmlFor="amount"> Income Amount:</label>
            <input
              type="text"
              id="amount"
              onChange={handleIncomeAmountChange}
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
            <input
              type="text"
              id="eventDate"
              onChange={handleIncomeEventDateChange}
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
      );
};