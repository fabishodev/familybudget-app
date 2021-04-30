import React from 'react';
import { Grid } from 'semantic-ui-react';
import { isPropertySignature } from 'typescript';
//import IUser from '../../app/modules/user';
import IExpenseDto from '../../app/modules/expenseDto';
import IUserDto from '../../app/modules/userDto';
import IExpenseType from '../../app/modules/expenseType';
import ExpensesList from './ExpensesList';
import ExpensesForm from './ExpensesForm';
import IExpenseSearch from '../../app/modules/expenseSearch';


interface IProps {
    selectedExpense:IExpenseDto|null,
    expenses:IExpenseDto[],
    users:IUserDto[],
    expensesTypes:IExpenseType[],
    editExpense:boolean,
    editExpenseEvent: (expense: IExpenseDto|null) => void,
    cancelEvent: ()=>void,
    saveExpenseEvent: (expense:IExpenseDto)=>void,
    searchExpenseEvent: (expense:IExpenseSearch)=>void,
}

const ExpensesDashboard = ({selectedExpense, expenses, users, expensesTypes, editExpense, editExpenseEvent, saveExpenseEvent, cancelEvent, searchExpenseEvent }: IProps) => {
    return (
        <Grid>
            <Grid.Column width={16}>
                {
                    editExpense == false &&
                    <ExpensesList
                        editUserEvent = {editExpenseEvent}
                        users={users}
                        expenses={expenses}
                        searchExpenseEvent={searchExpenseEvent}  />
                }
                {
                    editExpense && 
                    <ExpensesForm
                        selectedExpense={selectedExpense}
                        users={users}
                        expensesTypes={expensesTypes}  
                        cancelEvent={cancelEvent}                      
                        saveExpenseEvent={saveExpenseEvent} />
                }                
            </Grid.Column>
        </Grid>
    );

}

export default ExpensesDashboard;