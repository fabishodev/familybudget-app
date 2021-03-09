import axios,{AxiosResponse} from 'axios';
import IUser from '../app/modules/user';

axios.defaults.baseURL = 'https://localhost:5001/api/';

const responseBody = (response:AxiosResponse) => response.data;

const request = {
    get: (url:string) => axios.get(url).then(responseBody),
    post: (url:string,body:{}) => axios.post(url,body).then(responseBody),
    put: (url:string,body:{}) => axios.put(url,body).then(responseBody),
}

const User = {
    list: () => request.get('user'),
    create: (user:IUser) => request.post('user', user),
    update: (user:IUser) => request.put('user', user),
}

export default{
    User
}