import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Segment, Form, Button, Dropdown } from 'semantic-ui-react';
//import IUser from '../../app/modules/user';
import IExpenseDto from '../../app/modules/expenseDto';
import IUserDto from '../../app/modules/userDto';
import IExpenseType from '../../app/modules/expenseType';

interface IProps {
    selectedExpense: IExpenseDto | null,
    users: IUserDto[],
    expensesTypes: IExpenseType[],
    cancelEvent: () => void,
    saveExpenseEvent: (user: IExpenseDto) => void
}

interface IItem {
    key: string,
    value: string,
    text: string,
}

const ExpensesForm = ({ selectedExpense, users, expensesTypes, cancelEvent, saveExpenseEvent }: IProps) => {

    let usersList: IItem[] = [];
    let expenseTypeList: IItem[] = [];

    users.map((p) => {
        usersList.push({ key: p.id.toString(), value: p.id.toString(), text: p.firstName });
    })

    expensesTypes.map((p) => {
        expenseTypeList.push({ key: p.id.toString(), value: p.id.toString(), text: p.description });
    })

    let defaultExpense = {
        id: 0,
        description: "",
        total: 0,
        registerById: 0,
        expenseTypeId: 0,
        expenseDate: "",
        createdDate: "",
        updatedDate: "",
        user: {
            id: 0,
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            profileId: 0,
        },
        expenseType: {
            id: 0,
            description: "",
        }
    }

    let expenseValue: IExpenseDto = (selectedExpense != null) ? selectedExpense : defaultExpense;

    const defaultUserValue = ((selectedExpense == null) ? usersList[0].value : selectedExpense.user.id).toString();
    const defaultExpenseTypeValue = ((selectedExpense == null) ? expenseTypeList[0].value : selectedExpense.expenseType.id).toString();

    const [expense, setExpense] = useState<IExpenseDto>(expenseValue);
    //const [user, setUser] = useState<IUserDto>(userValue);
    // const [expenseType,setExpenseType] = useState<IExpenseType>(expenseValue);


    const handleUserChanges = (event: any, result: any) => {
        const { value } = result || event.target;

        let index = users.findIndex(p => p.id == value);
        let selectedUser = users[index];

        expense.registerById = selectedUser.id;
        expense.user = selectedUser;

        setExpense(expense);
    }

    const handleTypesChanges = (event: any, result: any) => {
        const { value } = result || event.target;

        let index = expensesTypes.findIndex(p => p.id == value);
        let selectedTypes = expensesTypes[index];

        expense.expenseTypeId = selectedTypes.id;
        expense.expenseType = selectedTypes;

        setExpense(expense);


    }

    const handleInputChanges = (event: any) => {
        const { name, value } = event.target;
        setExpense({ ...expense, [name]: value })
    };

    let label = expense.id == 0 ? "New Expense" : "Edit Expense";




    return (
        <Fragment>
            <h1>{label}</h1>
            <Segment clearing>
                <Form>
                    <label htmlFor="">Expense Date</label>
                    <Form.Input required
                        name="expenseDate" onChange={handleInputChanges}
                        placeholder="yyyy-mm-dd"
                        autoComplete="off"
                        value={expense.expenseDate}
                    />
                    <label htmlFor="">Description</label>
                    <Form.Input required
                        name="description" onChange={handleInputChanges}
                        placeholder="Description"
                        autoComplete="off"
                        value={expense.description}
                    />

                    <label htmlFor="">Expense Type</label>
                    <Dropdown required
                        placeholder="Select Expense Type"
                        fluid
                        selection
                        onChange={handleTypesChanges}
                        options={expenseTypeList}
                        defaultValue={defaultExpense.expenseType.id}
                    />
                    <br></br>

                    <label htmlFor="">Select User</label>
                    <Dropdown required
                        placeholder="Select User"
                        fluid
                        selection
                        onChange={handleUserChanges}
                        options={usersList}
                        defaultValue={defaultExpense.user.id}
                    />

                    <br></br>
                    <label htmlFor="">Total</label>
                    <Form.Input required
                        name="total" onChange={handleInputChanges}
                        placeholder="0.0"
                        autoComplete="off"
                        value={expense.total}
                    />

                    <br></br>

                    <Button onClick={() => saveExpenseEvent(expense)} floated="right" positive type="submit" content="Save"></Button>
                    <Button onClick={() => cancelEvent()} floated="right" type="submit" content="Cancel"></Button>

                </Form>
            </Segment>
        </Fragment>
    )
};
export default ExpensesForm;