import React, { Fragment, useState } from 'react';
import { Button, Card, Image, Container, Header, Table, Rating, Form, Dropdown } from 'semantic-ui-react';
//import IUser from '../../app/modules/user';
import IExpenseDto from '../../app/modules/expenseDto';
import IUserDto from '../../app/modules/userDto';
import IExpenseSearch from '../../app/modules/expenseSearch';

interface IProps {
    expenses: IExpenseDto[],
    users: IUserDto[],
    editUserEvent: (expense: IExpenseDto | null) => void,
    searchExpenseEvent: (expense: IExpenseSearch) => void
}

interface IItem {
    key: string,
    value: string,
    text: string,
}

const ExpensesList = ({ expenses, users, searchExpenseEvent, editUserEvent }: IProps) => {

    let usersList: IItem[] = [];

    users.map((p) => {
        usersList.push({ key: p.id.toString(), value: p.id.toString(), text: p.firstName });
    })

    let defaultExpense = {
        registerById: 0,
        expenseDateFrom: "",
        expenseDateTo: "",
    }

    const [expenseSearch, setExpenseSerach] = useState<IExpenseSearch>(defaultExpense);

    const handleInputChanges = (event: any) => {
        const { name, value } = event.target;
        setExpenseSerach({ ...expenseSearch, [name]: value })
    };

    const handleUserChanges = (event: any, result: any) => {
        const { value } = result || event.target;

        let index = users.findIndex(p => p.id == value);
        let selectedUser = users[index];

        expenseSearch.registerById = selectedUser.id;
        setExpenseSerach(expenseSearch);
    }

    return (
        <Fragment>
            <h1>Expenses List</h1>
            <Container>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field inline>
                            <label>From Date:</label>
                            <Form.Input 
                                name="expenseDateFrom" 
                                onChange={handleInputChanges}
                                placeholder="yyyy-mm-dd"
                                autoComplete="off"
                                value={expenseSearch.expenseDateFrom}
                            />
                        </Form.Field>

                        <Form.Field inline>
                            <label>To Date:</label>
                            <Form.Input 
                                name="expenseDateTo" 
                                onChange={handleInputChanges}
                                placeholder="yyyy-mm-dd"
                                autoComplete="off"
                                value={expenseSearch.expenseDateTo}
                            />
                        </Form.Field>

                        <Form.Field inline>
                            <label>User:</label>
                            <Dropdown 
                                placeholder="Select User"
                                fluid
                                selection
                                onChange={handleUserChanges}
                                options={usersList}
                                defaultValue={expenseSearch.registerById}
                            />
                        </Form.Field>

                        <Button onClick={() => searchExpenseEvent(expenseSearch)} floated="right" positive type="submit" content="Search"></Button>
                        <Button onClick={() => editUserEvent(null)} floated="right" type="submit" primary>Add</Button>

                    </Form.Group>

                </Form>
            </Container>
            <br></br>
            <br></br>
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Expense</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Expense Date</Table.HeaderCell>
                        <Table.HeaderCell>Register By</Table.HeaderCell>
                        <Table.HeaderCell>Total</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        expenses.map((expense: IExpenseDto) => (
                            <Table.Row key={expense.id}>
                                <Table.Cell singleLine>{expense.description}</Table.Cell>
                                <Table.Cell singleLine>{expense.expenseType.description}</Table.Cell>
                                <Table.Cell singleLine>{expense.expenseDate}</Table.Cell>
                                <Table.Cell singleLine>
                                    {expense.user.firstName} {expense.user.lastName}
                                </Table.Cell>
                                <Table.Cell textAlign='right'>
                                    {expense.total}
                                </Table.Cell>
                                <Table.Cell>
                                    <a href='#' onClick={() => editUserEvent(expense)}>Edit</a>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </Fragment>
    );
}

export default ExpensesList;