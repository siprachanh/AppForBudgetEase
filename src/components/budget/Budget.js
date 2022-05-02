import React, { useState,useEffect, useNavigate, useContext } from "react";
// import { GlobalContext } from '../context/GlobalState';
import { IncomeTotal } from "../income/IncomeTotal";
import { ExpenseTotal } from "../expense/ExpenseTotal";
import { getAllIncome } from "../../modules/IncomeManager";
import { getAllExpense } from "../../modules/ExpenseManager";
// import {  GlobalProvider} from '../context/GlobalState';
// import {uuid} from "uuid/v4";


export const Budget = ()=> {

  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);


const getTotalExpense = () => {
  getAllExpense().then(allExpense => {
      console.log(allExpense)
      let totalExpense = 0
      allExpense.forEach(expenseObj => {
          totalExpense += parseInt(expenseObj.amount);
      })
      console.log(totalExpense)
      setExpenseTotal(totalExpense)
  })
  

}
const getTotalIncome = () => {
  getAllIncome().then(allIncome => {
      console.log(allIncome)
      let totalIncome= 0
      allIncome.forEach(incomeObj => {
          totalIncome += parseInt(incomeObj.amount);
      })
      console.log(totalIncome)
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
  <h1>  My Income and Expense Total Page </h1>
     
     <h2>This is my income total: $ {incomeTotal}  </h2>

     <h2> This is my expense total: $ {expenseTotal} </h2>
   
   </>
 ); 
}
