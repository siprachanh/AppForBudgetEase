import React, { useState,useEffect, useNavigate, useContext } from "react";
// import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
// import { useStyles } from "./BudgetStyles";
// react hook

import { IncomeTotal } from "../income/IncomeTotal";
import { ExpenseTotal } from "../expense/ExpenseTotal";
import { getAllIncome } from "../../modules/IncomeManager";
import { getAllExpense } from "../../modules/ExpenseManager";



export const Budget = ()=> {
// const classes = useStyles();
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);


const getTotalExpense = () => {
  getAllExpense().then(allExpense => {

      let totalExpense = 0
      allExpense.forEach(expenseObj => {
          totalExpense += parseInt(expenseObj.amount);
      })

      setExpenseTotal(totalExpense)
  })
  

}
const getTotalIncome = () => {
  getAllIncome().then(allIncome => {

      let totalIncome= 0
      allIncome.forEach(incomeObj => {
          totalIncome += parseInt(incomeObj.amount);
      })
 
      setIncomeTotal(totalIncome)
  })
}
  useEffect(()=> {
    getTotalExpense()
   }, []);


  useEffect(()=> {
    getTotalIncome()
  }, []);


  
 return (
  <>
  <div className="card-main">
  <h1><strong>  Welcome to My Income and Expense Total Page </strong> </h1>
     
    </div>
       
    <div className="card">
     <h2><strong> This is my current income total: $ {incomeTotal}  </strong> </h2>
     
     </div>
    
    
     <div className="card">
     <h2><strong>  This is my current expense total: $ {expenseTotal}</strong>  </h2>
   
     </div>
     
     <div className="card">
     <h2> <strong>   This is my remaining balance: $ {incomeTotal - expenseTotal} </strong></h2>
    
     </div>
    
   </>
 ); 
}
// when creating state based on previous state, use callback form
