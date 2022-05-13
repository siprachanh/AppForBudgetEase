import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addExpense, getAllBudgetExpense} from '../../modules/ExpenseManager';
import './Expense.css';

export const ExpenseForm = () => {
	// State will contain both data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState

	const [expense, setExpense] = useState({
    userId: parseInt(sessionStorage.getItem("AppForBudgetEase_user")),
	  budgetExpenseId: 0,
      name: "", 
      description: "", 
      amount: "", 
      isPaid: "", 
      timestamp: Date.now(), 
      eventDate: "",
	});

	const [isLoading, setIsLoading] = useState(false);
    const[budgetExpense, setBudgetExpense] = useState ([]);
    //  builds out a dropdown menu

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
//  load budgetExpense data and setState
useEffect(() => {
    getAllBudgetExpense().then((data) => setBudgetExpense(data))
  }, []);

const handleClickSaveExpense = (event) => {
    event.preventDefault();
    //Prevents the browser from submitting the form

    const budgetExpenseId = expense.budgetExpenseId

    if (budgetExpenseId===0) {
        window.alert("Please select a budget income type")
    } else {
    
    addExpense(newExpense).then(() => navigate("/expense"));
};
}

    return (
        <>
		<form className="expenseForm">
			<h2 className="expenseForm__title"><strong>  Create A New Expense </strong></h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Expense name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} 
                    required autoFocus className="form-control" 
                    placeholder="Enter Expense name" value={expense.name} />
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
					<label htmlFor="location">Assign Expense Budget Type: </label>
					<select value={expense.budgetExpenseId} name="budgetExpenseId" id="budgetExpenseId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select an expense budget type</option>
						{budgetExpense.map(budgetExpense => (
							<option key={budgetExpense.id} value={budgetExpense.id}>
								{budgetExpense.name}
							</option>
						))}
					</select>
				</div>
        </fieldset>
            <fieldset>
				<div className="form-group">
                <label htmlFor="amount">Expense Amount: $ </label>
					<input type="number" id="amount" onChange={handleControlledInputChange} 
                    required autoFocus className="form-control" 
                    placeholder="Expense amount" value={expense.amount} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
                <label htmlFor="dateDue">Expense Due Date:</label>
					<input placeholder="YY-MM-DD" 
                    type="date" id="eventDate"
                     onChange={handleControlledInputChange} 
                    required autoFocus className="form-control" 
                    placeholder="Expense due date" value={expense.eventDate} />
				</div>
			</fieldset>
            {/* <fieldset>
				<div className="form-group">
                <label htmlFor="eventDate">Expense Date Posted:</label>
					<input placeholder="YY-MM-DD" 
                    type="text" id="eventDate"
                     onChange={handleControlledInputChange} 
                    required autoFocus className="form-control" 
                    placeholder="Expense date posted" value={expense.timestamp} />
				</div>
			</fieldset> */}
			<button type="button" className="btn btn-primary"
				onClick={handleClickSaveExpense}>
				Save Expense
          </button>
		</form>
        </>
	)
};

//when one expense is chosen, it would use the value to update with the key name