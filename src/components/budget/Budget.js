import React, { useState,useEffect, useNavigate, useContext } from "react";
import { IncomeTotal } from "../income/IncomeTotal";
import { ExpenseTotal } from "../expense/ExpenseTotal";
import { getAllIncome } from "../../modules/IncomeManager";
import { getAllExpense } from "../../modules/ExpenseManager";
import { PieChart } from 'react-minimal-pie-chart';



export const Budget = ()=> {
// const classes = useStyles();
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
let expense="expense"

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

const dataMock= [
  { title: 'Expense Total', value: expenseTotal, color: '#6c757d' },
  { title: 'Income Total', value: incomeTotal, color: '#198754' },
  { title: 'Balance', value: incomeTotal - expenseTotal, color: '#0da5fd' },
]


// use chart library to render graphic rep of amount of incomeTotal, expenseTotal and remaining balance.
 return (
  <>
  <div className="card-main">
  <h1><strong>  Welcome to My AppForBudgetEase Income and Expense Total Page </strong> </h1>
  <PieChart
  data={dataMock}
  style={{height: "425px"}}
  label={({dataEntry})=> dataEntry.title }
  labelStyle={(index)=> ({
    fill: dataMock[index].color,
    fontSize: "8px", 
    fontFamily: "sans-serif",
  })}

  labelPosition={110}

/>
    </div>
       
    <div className="card bg-success">
     <h2> This is my current income total:<strong> $ {incomeTotal} </strong>  </h2>
     
     </div>
    
    
     <div className="card bg-secondary">
     <h2> This is my current expense total:<strong>  $ {expenseTotal}</strong>  </h2>
   
     </div>
     
     <div className="card bg-primary ">
     <h2>   This is my remaining balance:<strong>  $ {incomeTotal - expenseTotal} </strong></h2>
    
     </div>
    
   </>
 ); 
}
// when creating state based on previous state, use callback form
