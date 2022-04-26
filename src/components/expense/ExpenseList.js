import React, {useState, useEffect} from 'react';
import { ExpenseCard} from "./ExpenseCard";
import {getAllExpense, getExpenseById, deleteExpense} from "../../modules/ExpenseManager";
import { useNavigate } from 'react-router-dom';

export const ExpenseList = () => {
    //the initial state is an empty array
    const [expense, setExpense] = useState([]);
    //useNav navigates to url; then look at route to determine which componenet to dispay
    
    const navigate = useNavigate();
    const getExpense = () => {
         getAllExpense()
        .then(expenseFromAPI => {
            setExpense(expenseFromAPI)
        });
    };
//use the setExpense fn to update expense state 
//fn useEffect tells React to call the getExpense fn to fetch data from API 
//2 components of useE: fn and dependency arr


const handleDeleteExpense = id => {
    deleteExpense(id)
    .then(() => getAllExpense().then(setExpense));
};
//invoke setEx in ExList with auto return

useEffect(() => {
    getExpense();
},
[]);


return (
    <>
    <section className="section-content">
        <button type="button"
        className="btn"
        onClick={() => {navigate("/expense/create")}}>
  [ Click Here to Add New Expense ]
    </button>
</section>
    <div className="container-cards">
        {expense.map(expense => <ExpenseCard 
        key={expense.id} 
        expense={expense}
        handleDeleteExpense= {handleDeleteExpense}/> )}
    </div>
    </>

);
};

//the key prop is unique to each child in llist; React keepts track of re-rendering only the data that has changed
//component loads; sees ALL the const to initialize; then sees the return; after the returns it sees the useEffect