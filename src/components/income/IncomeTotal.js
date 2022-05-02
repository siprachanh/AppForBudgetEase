import React, { useState, useEffect } from "react";
import {IncomeList} from "./IncomeList";
import { getAllIncome } from "../../modules/IncomeManager";

export const IncomeTotal = ()=> {
    const [income, setIncome] = useState([]);
    const [incomeTotal, setIncomeTotal] = useState(0);
    const amountIncome = income.reduce((incomeTotal, income) => incomeTotal + income.amount, 0)
//fetch and display all the income

    const getTotalIncome = () => {
        getAllIncome().then(allIncome => {
            console.log(allIncome)
            let totalIncome = 0 
            allIncome.forEach(singleIncome => {
                totalIncome += parseInt(singleIncome.amount);
            })
            console.log(totalIncome)
            setIncomeTotal(totalIncome)
        })
    }

    useEffect(() => {
        getTotalIncome()
       
        }, []);

        // let balanceIncome = 0;
        // IncomeList.forEach(income=>
        //     balanceIncome += parseInt(income.amount));
        // setIncomeTotal(balanceIncome);
        // for (let income = 0; income < income.length; income++) {
           
        // 
    //   
//only updates useEffect once income arr changes; only calls useEffect when income it first start
//let income = 0, for (let i=), i++
//loop through every income and add the amount= parseInt
//set total  i to balance

    return (
        <>
        <h1> This is your income total: {incomeTotal} </h1>
        {/* <div className='income-total'>
            <IncomeTotal incomeTotal={incomeTotal} />
            <IncomeList income = {income} setIncome={setIncome} /> */}
        
        {/* </div> */}
        </>
    );
    }
