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
  { title: 'expenseTotal', value: expenseTotal, color: '#78acdc' },
  { title: 'incomeTotal', value: incomeTotal, color: '#510bff' },
  { title: 'balance', value: incomeTotal - expenseTotal, color: '#9fa5b9' },
]
// use chart library to render graphic rep of amount of incomeTotal, expenseTotal and remaining balance.
 return (
  <>
  <div className="card-main">
  <h1><strong>  Welcome to My AppForBudgetEase Income and Expense Total Page </strong> </h1>
  <PieChart
  data={dataMock}
  style={{height: "400px"}}
  label={({dataEntry})=> dataEntry.value }
  labelStyle={(index)=> ({
    fill: dataMock[index].color,
    fontSize: "10px", 
    fontFamily: "sans-serif",
  })}

  labelPosition={112}

/>
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
