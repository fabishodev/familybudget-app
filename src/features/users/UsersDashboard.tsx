import React from 'react';
import {Grid} from 'semantic-ui-react';
import { isPropertySignature } from 'typescript';
//import IUser from '../../app/modules/user';
import IUserDto from '../../app/modules/userDto';
import IProfile from '../../app/modules/profile';

import UsersList from './UsersList';
import UsersForm from './UsersForm';

interface IProps{
    selectedUser:IUserDto|null,
    users:IUserDto[],
    profiles:IProfile[],
    editUser:boolean,
    editUserEvent: (user: IUserDto|null) => void,
    cancelEvent: ()=>void,
    saveUserEvent: (user:IUserDto)=>void
}

const UsersDashboard = ({selectedUser,users,profiles,editUser, editUserEvent,cancelEvent, saveUserEvent}:IProps) =>{
    return(
        <Grid>
            <Grid.Column width={16}>                
                {
                     editUser == false &&
                    <UsersList 
                        editUserEvent = {editUserEvent}
                        users={users} />
                }
                {
                    editUser && <UsersForm 
                        selectedUser={selectedUser}
                        profiles={profiles}
                        cancelEvent={cancelEvent}
                        saveUserEvent={saveUserEvent}/>
                }             


            </Grid.Column>
        </Grid>
    );

}

export default UsersDashboard;