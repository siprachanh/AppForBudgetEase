import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addExpense} from '../../modules/ExpenseManager';
import './Expense.css';

export const ExpenseForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState

	const [expense, setExpense] = useState({
	  budgetId: 0,
      name: "", 
      description: "", 
      amount: "", 
      isPaid: "", 
      timestamp: "", 
      eventDate: ""
	});

	const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const newExpense = { ...expense }
 //navigate gives ability to change URL
 //when a field changes, update state. The return will re-render and display based on the values in state

 const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    /spread oper creates a copy, make changes, and then set state. the input fields, are controlled by what's in state, represent what's in state*/
    
    let selectedVal = event.target.value
    
    //this becomes the field of the value we're editing
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
    }
  
    //Set the property to the new value using object bracket notation. */
    newExpense[event.target.id] = selectedVal
    //key is that the input and ids match the properties on lns 11-17
    //so that I can connect them together
    // update state
    setExpense(newExpense)
}

const handleClickSaveExpense = (event) => {
    event.preventDefault();
    //Prevents the browser from submitting the form
    addExpense(newExpense).then(() => navigate("/expense"));
};
    return (
        <>
		<form className="expenseForm">
			<h2 className="expenseForm__title">Create A New Expense</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Expense name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} 
                    required autoFocus className="form-control" 
                    placeholder="Expense name" value={expense.name} />
				</div>
			</fieldset>

			<fieldset>
				<div className="form-group">
					<label htmlFor="description">Expense Description:</label>
					<input type="text" id="description" onChange={handleControlledInputChange} 
                    required autoFocus className="form-control" 
                    placeholder="Expense description" value={expense.description} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
                <label htmlFor="amount">Expense Amount:</label>
					<input type="text" id="amount" onChange={handleControlledInputChange} 
                    required autoFocus className="form-control" 
                    placeholder="Expense amount" value={expense.amount} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
                <label htmlFor="eventDate">Expense Due Date:</label>
					<input type="text" id="eventDate" onChange={handleControlledInputChange} 
                    required autoFocus className="form-control" 
                    placeholder="Expense due date" value={expense.eventDate} />
				</div>
			</fieldset>
			<button type="button" className="btn btn-primary"
				onClick={handleClickSaveExpense}>
				Save Expense
          </button>
		</form>
        </>
	)
};

//when one expense is chosen, it would use the value to update with the key name