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
  <section className="section-content">
  <h1><strong>My Income and Expense Total Page </strong> </h1>
     
     <h2><strong> This is my current income total: $ {incomeTotal}  </strong> </h2>

     <h2><strong>  This is my current expense total: $ {expenseTotal}</strong>  </h2>

     <h2> This is my Remaining Budget: $ {incomeTotal - expenseTotal} </h2>
     </section>
   </>
 ); 
}
// when creating state based on previous state, use callback form
