import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateExpense, getExpenseById, getAllBudgetExpense} from '../../modules/ExpenseManager';
import './Expense.css';

export const ExpenseFormEdit = () => {
    const [expense, setExpense] = useState({
        budgetExpenseId: 0,
        name: "", 
        description: "", 
        amount: "", 
        isPaid: "", 
        // timestamp: Date.now(), 
        eventDate: ""
      });
  
      const [isLoading, setIsLoading] = useState(false);
      const [budgetExpense, setBudgetExpense] = useState([]);

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
		/* 
		Set the property to the new value
		using object bracket notation. */
		newExpense[event.target.id] = selectedVal
        //key is that the input and ids match the properties on ln 11-14
        //so that I can connect them together
		// update state
		setExpense(newExpense)
	}

  // load expenseBudget data and setState
  useEffect(() => {
    getAllBudgetExpense().then((data) => setBudgetExpense(data))
  }, []);

    const handleFieldChange = evt => {
        const stateToChange = { ...expense };
        stateToChange[evt.target.id] = evt.target.value;
        setExpense(stateToChange);
      };

      //set e.t.i to evaluate; then set to state to change
      const updateExistingExpense = evt => {
        evt.preventDefault()
        setIsLoading(true);
//take set state and add in expense.prop value
        const editedExpense = {
            id: expenseId,
            budgetExpenseId: expense.budgetExpenseId.name,
            name: expense.name, 
            description: expense.description, 
            amount: expense.amount, 
            isPaid: expense.isPaid, 
            // timestamp: expense.timestamp, 
            // eventDate: Date.now(),
    
        }
    //pass the edited object to the database
  updateExpense(editedExpense)
  .then(() => navigate("/expense")
  )
}
//  the fn passed to useEffect calls API to get the expensed based on exp id 
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
              placeholder="Enter Expense Name"
              value={expense.name}
            />
            <label htmlFor="name">Edit Expense name</label>
      </div>
            <div className="form-group">
					<label htmlFor="budgetExpense"> Type of Expense Budget: </label>
					<select value={expense.budgetExpenseId} name="budgetExpenseId" id="budgetExpenseId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a type</option>
						{budgetExpense.map(b => (
							<option key={b.id} value={b.id}>
								{b.name}
							</option>
						))}
					</select>
				</div>

            <div className="formgrid">
             <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="description"
              value={expense.description}
            />
            <label htmlFor="description">Edit Expense Description</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="amount"
              value={expense.amount}
            />
            <label htmlFor="amount">Edit Expense Amount</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="due date"
              value={expense.eventDate}
            />
            <label htmlFor="duedate">Expense Due Date</label>
					{/* <input 
              type="date" id="date posted"
                     onChange={handleFieldChange} 
                    required autoFocus className="form-control" 
                    value={expense.timestamp} />
               <label htmlFor="expense posted">Expense Date Posted:</label> */}
          </div>
          
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingExpense}
              className="btn btn-primary"
            >Save Updated Expense</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
