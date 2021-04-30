import React, { Component, Fragment, useState, useEffect } from 'react';
import IExpenseDto from '../modules/expenseDto';
import IUserDto from '../modules/userDto';
import ExpensesDashboard from '../../features/expenses/ExpensesDashboard';
import { Loader } from 'semantic-ui-react';
import api from '../../api/api';
import axios from 'axios';
import IExpenseType from '../modules/expenseType';
import IExpenseSearch from '../modules/expenseSearch';
import { isNonNullChain } from 'typescript';

const Expenses = () => {
    const [selectedExpense, setSelectedExpense] = useState<IExpenseDto | null>(null);
    const [expenses, setExpenses] = useState<IExpenseDto[]>([]);
    const [users, setUsers] = useState<IUserDto[]>([]);
    const [expensesTypes, setExpensesTypes] = useState<IExpenseType[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [editExpense, setEditExpense] = useState<boolean>(false);



    useEffect(() => {
        if (loaded == false) {

            const requestExpenses = api.axios.get('expense');
            const requestUser = api.axios.get('user');
            const requestExpensesTypes = api.axios.get('expense/types');

            api.axios.all([requestExpenses, requestUser, requestExpensesTypes]).then(axios.spread((...response) => {
                const expenses = response[0].data;
                const users = response[1].data;
                const expensesTypes = response[2].data;

                setExpenses(expenses);
                setUsers(users);
                setExpensesTypes(expensesTypes);
                setLoaded(true);

            }));
        }
    });

    const handleEditEvent = (expense: IExpenseDto | null) => {
        //console.log(user);       
        setEditExpense(true);
        setSelectedExpense(expense);
    };

    const handleCancelEvent = () => {
        setSelectedExpense(null);
        setEditExpense(false);
    };

    const handleSaveEvent = (expense: IExpenseDto) => {
        console.log(expense);
        if (expense.id == 0) {
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            expense.createdDate = today.toISOString();
            expense.updatedDate = "0001-01-01";
            api.Expense.create(expense).then((expenseResponse) => {
                expenses.push(expenseResponse);

                setExpenses(expenses);
                setSelectedExpense(null);
                setEditExpense(false);

            });
        } else {
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            expense.updatedDate = today.toISOString();;
            api.Expense.update(expense).then((expenseResponse) => {
                let index = expenses.findIndex(u => u.id == expense.id);
                expenses[index] = expenseResponse;

                setExpenses(expenses);
                setSelectedExpense(null);
                setEditExpense(false);
            })
        }

    };

    const handleSearchEvent = (expense: IExpenseSearch) => {
        console.log(expense);
        //if(expense.registerById != 0 && expense.expenseDateFrom != "" && expense.expenseDateTo != ""){
            api.Expense.search(expense).then((expenseResponse) => {
                console.log(expenseResponse);
                setExpenses(expenseResponse);
                setSelectedExpense(null);
                setEditExpense(false);
            })
        //}
        
        return false;
    };

    if (loaded == false) {
        return (
            <Loader active inline="centered" />
        )
    }

    return (
        <Fragment>
            <ExpensesDashboard
                selectedExpense={selectedExpense}
                editExpense={editExpense}
                editExpenseEvent={handleEditEvent}
                saveExpenseEvent={handleSaveEvent}
                cancelEvent={handleCancelEvent}
                searchExpenseEvent={handleSearchEvent}
                expenses={expenses}
                users={users}
                expensesTypes={expensesTypes}
            />
        </Fragment>
    );


};
export default Expenses;

// export default class Expenses extends Component{
//     render(){
//         return(
//             <div>
//                 Expenses
//             </div>

//         );        
//     }
// }