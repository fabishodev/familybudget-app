import IExpense from './expense';
import IUser from './user';
import IExpenseType from './expenseType';

export default interface IExpenseDto extends IExpense{
    user:IUser,
    expenseType:IExpenseType
}