import React, {Component, Fragment, useState, useEffect} from 'react';
import IUser from '../modules/user';
import UsersDashboard from '../../features/users/UsersDashboard';
import {Loader} from 'semantic-ui-react';
import api from '../../api/api';

/*interface IState{
    users:IUser[],
    loaded: boolean,
}*/


const Users = () =>{
    const [selectedUser, setSelectedUSer] = useState<IUser|null>(null);
    const [users,setUsers] = useState<IUser[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [editUser, setEditUser] = useState<boolean>(false);

    useEffect(() => {
        if (loaded == false){
            api.User.list().then((users) =>{
                setUsers(users);
                setLoaded(true);
               
            });
        }
    });

    const handleEditEvent = (user: IUser|null) => {
        //console.log(user);      

        setEditUser(true);
        setSelectedUSer(user);

    };

    const handleCancelEvent = () => {
        setSelectedUSer(null);
      setEditUser(false); 
    };

    const handleSaveEvent = (user:IUser) => {
         //console.log(user);
         if(user.id == 0){
            api.User.create(user).then((userResponse) => {
                users.push(userResponse);

                setUsers(users);
                setSelectedUSer(null);
                setEditUser(false);

            });
        }else{
            api.User.update(user).then((userResponse) =>{
                let index = users.findIndex(u => u.id == user.id);
                users[index] = userResponse;

                setUsers(users);
                setSelectedUSer(null);
                setEditUser(false);

            })
        }      

    };



    if(loaded == false){
        return(
            <Loader active inline="centered" />
        )
    }

    return(
        <Fragment>
           <UsersDashboard
           selectedUser={selectedUser}
                editUser = {editUser} 
                editUserEvent = {handleEditEvent}
                saveUserEvent={handleSaveEvent}
                cancelEvent={handleCancelEvent}
                users={users}
            />
        </Fragment>
    ); 


};
export default Users;

/*
export default class Users2 extends Component
{
    readonly state:IState ={
        users:[],
        loaded: false,
    }

    componentDidMount(){
        api.User.list().then((users) =>{
            this.setState({
                users: users,
                loaded: true
            });
    })

      /*
        let users =[{id:1, firstName: 'Fabricio', lastName: 'Magaña', userName: 'hugo', password: ''}];
    
        this.setState({
            users: users,
            loaded: true
        });*/
   /*    
    }


    render(){
        if(this.state.loaded == false){
            return(
                <Loader active inline="centered" />
            )
        }

        return(
            <Fragment>
               <UsersDashboard users={this.state.users}/>
            </Fragment>
        );        
    } 

}*/