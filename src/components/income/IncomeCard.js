import React from "react";
import "./Income.css";
import { formatMDY } from "../../helpers/formatDate";
import { Link } from "react-router-dom";

//  income gets called by its parent
export const IncomeCard = ({ index, income, handleDeleteIncome }) => {
  const theDate = formatMDY(income.timestamp);
    // if (index === 0) {
    //   return (
    //     <>
    //       <div className="first-card" id={`income_${income.id}`}>
    //         <div className="first-card-font" id="first-event-font">

    //         <h3>Income Name: <span className="card-incomename">
    //         {income.name}
    //       </span></h3>
    //            <h6> Income Description:
    //              <span className="card-incomedescription">
    //            {income.description}</span></h6>
    //            <h6> Income Amount: $
    //             <span className="card-incomeamount">{income.amount}</span>
    //           </h6>
    //           <h6> Income Date: {income.eventDate}</h6>
    //           <h6> Date Income Posted:
    //             <span className="incomecreated-date">{theDate}
    //         </span></h6>
    //         </div>
    //         <Link to={`/income/${income.id}`}>
    //                 <button> Details </button>
    //             </Link>
    //           <Link to={`/income/${income.id}/edit`}>
    //             <button>Edit</button>              
    //           </Link>
    //           <button
    //             className="btn"
    //             id="delete"
    //             type="button"
    //             onClick={() => handleDeleteIncome(income.id)}>
    //             Delete 
    //           </button>
    //       </div>
    //     </>
    //   );
    // } else {
      return (
        <>
         <div className="card">
          <div className="card-content" id={`income_${income.id}`}>
            <div>
              <h2>
                Income Name:<span className="card-incomename">{income.name}</span>
              </h2>
              {/* <fieldset> */}
        {/* <div className="form-group"> */}
					{/* <h2>
           <label htmlFor="budgetIncomeId">Assign Income Budget Type: </label>
					<select value={income.budgetIncomeId} name="budgetIncomeId" id="budgetIncomeId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select an income budget type</option>
						{budgetIncome.map(budgetIncome => (
							<option key={budgetIncome.id} value={budgetIncome.id}>
								{budgetIncome.name}
							</option>
						))}
					</select>
          </h2> */}
				{/* </div> */}
        {/* </fieldset> */}

              <h4>Income Description:
                <span className="card-incomedescription">{income.description}</span>
              </h4>
              {/* <h4>Income Budget Type:
                <span className="card-budgetIncomeId">{budgetIncome.id}</span>
              </h4> */}
              <h6>Income Amount: $
                <span className="card-incomeamount">{income.amount}</span>
              </h6>
              
              <h6> Income Due Date: {income.eventDate}</h6>
              <h6> Date Income Posted:
                <span className="incomecreated-date">{theDate}
              </span>
              </h6>
            </div>
                <Link to={`/income/${income.id}`}>
                    <button> Details </button>
                </Link>
              <Link to={`/income/${income.id}/edit`}>
                <button>
                  Edit
                </button>
              </Link>
  
              <Link to={"#"}>
                <button
                // className="btn"
                id="delete"
                type="button"
                onClick={() => handleDeleteIncome(income.id)}
              >
                
                Delete 
                </button>
              </Link>
          </div>
          </div>
        </>
      );
    }
  // };