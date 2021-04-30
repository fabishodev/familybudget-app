import IProfile from './profile';
import IUser from './user';

export default interface IUserDto extends IUser{
    profile:IProfile
}