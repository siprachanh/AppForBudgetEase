import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateExpense, getExpenseById} from '../../modules/ExpenseManager';
import './Expense.css';

export const ExpenseFormEdit = () => {
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
      const {expenseId} = useParams();
      const navigate = useNavigate();
      const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state. the input fields, are controlled by what's in state, represent what's in state*/
		const newExpense = { ...expense }
		let selectedVal = event.target.value
        //this becomes the field of the value we're editing
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newExpense[event.target.id] = selectedVal
        //key is that the input and ids match the properties on ln 11-14
        //so that I can connect them together
		// update state
		setExpense(newExpense)
	}

    const handleFieldChange = evt => {
        const stateToChange = { ...expense };
        stateToChange[evt.target.id] = evt.target.value;
        setExpense(stateToChange);
      };

      //set e.t.i to evaluate; then set to state to change
      const updateExistingExpense = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedExpense = {
            budgetId: expense.budgetId.name,
            name: expense.name, 
            description: expense.description, 
            amount: expense.amount, 
            isPaid: expense.isPaid, 
            timestamp: 0, 
            eventDate: Date.now(),
        }
    //pass the edited object to the database
  updateExpense(editedExpense)
  .then(() => navigate("/expense")
  )
}
useEffect(() => {
    getExpenseById(expenseId)
      .then(expense => {
        setExpense(expense);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={expense.name}
            />
            <label htmlFor="name">Expense name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="description"
              value={expense.description}
            />
            <label htmlFor="breed">Expense Description</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="amount"
              value={expense.amount}
            />
            <label htmlFor="amount">Expense Amount</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="due date"
              value={expense.eventDate}
            />
            <label htmlFor="due date">Expense Due Date</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingExpense}
              className="btn btn-primary"
            >Save Changes</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
