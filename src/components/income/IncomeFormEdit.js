import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { updateIncome, getIncomeById } from "../../modules/IncomeManager";
import "./Income.css";
import { formatDate } from "../../helpers/formatDate";

export const IncomeFormEdit = () => {
   
    const [income, setIncome] = useState ({
        id: 0,
        userId: 0,
        budgetId: 0, 
        name: "", 
        description: "", 
        amount: "", 
        timestamp: 0, 
        eventDate: Date.now(), 
      });

      const navigate = useNavigate()
      const [isLoading, setIsLoading] = useState(false)
      const { incomeId } = useParams()

      const handleEditedIncome = (e) => {
          const stateToChange = { ...income };
          stateToChange[e.target.id] = e.target.value;
          setIncome(stateToChange);
      };

      const UpdateIncomeButtonAction = (e) => {
          e.preventDefault()
          setIsLoading(true);

          const editedIncome = {
              id: incomeId, 
              userId: parseInt(sessionStorage.getItem("userId")), 
              budgetId: income.budgetId.name,
              name: income.name,
              description: income.description,
              amount: income.amount,
              timestamp: income.timestamp,
              eventDate: Date.now(),
          };
          //pass editedIncome object to the db
        updateIncome(editedIncome)
        .then(() => navigate ("/income"))
    };
   

      
       
  
      const getIncomeToEdit = () => {
          return getIncomeById(incomeId).then(incomeById => {
              setIncome(incomeById)
          })
      }
      
    //   const handleIncomeNameChange = (e) => {
    //     newIncome.name = e.target.value;
    //     setIncome(newIncome);
    //   };
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
      

      useEffect(() => {
          getIncomeToEdit(incomeId)
          .then((income) =>{
              setIncome(income);
              setIsLoading(false);
          });
      }, []);

 
      return (
          <>
           <form className="editForm--container">
           <h3 className="incomeForm__title">Update Income Form</h3>
        <fieldset>
        <div className="form-group">
          <label htmlFor="budget Id">Edit Income Budget Id</label>
            <input
              type="text"
              id="budgetId"
              onChange={handleEditedIncome}
              required autoFocus className="form-control" 
              placeholder="Enter Budget Id" value={income.budgetId}/>
          </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
          <label htmlFor="name">Edit Income Name</label>
            <input
              type="text"
              id="name"
              onChange={handleEditedIncome}
              required autoFocus className="form-control" 
              placeholder="Enter Income Name" value={income.name}/>
          </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
          <label htmlFor="description">Edit Income Description</label>
            <input
              type="text"
              id="description"
              onChange={handleEditedIncome}
              required autoFocus className="form-control" 
              placeholder="Enter Description" value={income.description}/>
          </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
          <label htmlFor="amount">Edit Income Amount</label>
            <input
              type="text"
              id="amount"
              onChange={handleEditedIncome}
              required autoFocus className="form-control" 
              placeholder="Enter Amount" value={income.amount}/>
          </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
          <label htmlFor="eventDate">Edit Income Event Date</label>
            <input
              type="text"
              id="eventDate"
              onChange={handleEditedIncome}
              required autoFocus className="form-control" 
              placeholder="Enter Event Date" value={income.eventDate}/>
          </div>
        </fieldset>
        <button >Close</button>
        <button onClick={UpdateIncomeButtonAction}>Save Updated Income</button>
        </form>
    </>
      )}
