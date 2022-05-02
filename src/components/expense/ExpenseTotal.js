import React, { useState, useEffect } from "react";
import { Budget } from "../budget/Budget";
import  {ExpenseList} from "./ExpenseList";
import { getAllExpense} from "../../modules/ExpenseManager"




export const ExpenseTotal = () => {
    const [expense, setExpense] = useState([]);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const amountExpense = expense.reduce((expenseTotal, expense) => expenseTotal + expense.amount, 0)
    //take all expense, add them, and reduce down the expense

 const getTotalExpense = () => {
    getAllExpense().then(allExpense => {
        console.log(allExpense)
        let totalExpense = 0
        allExpense.forEach(singleExpense => {
            totalExpense += parseInt(singleExpense.amount);
        })
        console.log(totalExpense)
        setExpenseTotal(totalExpense)
    })

 }
 useEffect(()=> {
     getTotalExpense()
     }, []);


    //     let balanceExpense = 0;
    //   ExpenseList.forEach(expenseObj => 
    //       balanceExpense += parseInt (expenseObj.amount));
    //  setExpenseTotal(balanceExpense);
    // //   }) = 0; expense < expense.length; expense++) {
    //      balanceExpense += parseInt(expense[expense].amount);
    //  }
    //  setExpenseTotal(balanceExpense);
    // }, [expense]);
    //  // update useE once Exp arr changes; calls useE when it starts
     //let E = 0, for let E ++ 
     //loop through every E and add the amount = parseInt from string

    return (
        <>
    <div className='expense-total'>
        
        <h1> Your expense so far: {expenseTotal} </h1>
        {/* < Budget  taco={expenseTotal}/> */}
        {/* < ExpenseList expense={expense} setExpense={setExpense} /> */}
    </div>
    </>
);
}

//array.reduce() sums a property in arr of obj
   // const { expense } = useContext (AppContext);
    // const expenseTotal = expense.reduce((total, expense) => {
    //     return(total = total + expense.amount);
    // }, 0);
    