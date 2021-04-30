import axios,{AxiosResponse} from 'axios';
//import IUser from '../app/modules/user';
import IUserDto from '../app/modules/userDto';
import IProfile from '../app/modules/profile';
import IExpenseDto from '../app/modules/expenseDto';
import IExpenseSearch from '../app/modules/expenseSearch';

axios.defaults.baseURL = 'https://localhost:5001/api/';

const responseBody = (response:AxiosResponse) => response.data;

const request = {
    get: (url:string) => axios.get(url).then(responseBody),
    post: (url:string,body:{}) => axios.post(url,body).then(responseBody),
    put: (url:string,body:{}) => axios.put(url,body).then(responseBody),
}

const User = {
    list: () => request.get('user'),
    create: (user:IUserDto) => request.post('user', user),
    update: (user:IUserDto) => request.put('user', user),
}

const Profile = {
    list: () => request.get('profile'),
    create: (user:IUserDto) => request.post('profile', user),
    update: (user:IUserDto) => request.put('profile', user),
}

const Expense = {
    list: () => request.get('expense'),
    create: (expense:IExpenseDto) => request.post('expense', expense),
    update: (expense:IExpenseDto) => request.put('expense', expense),
    search: (expense:IExpenseSearch) => request.post('expense/search', expense),
}

export default{
    User,
    Profile,
    Expense,
    axios,
}