import React from 'react';
import {Grid} from 'semantic-ui-react';
import { isPropertySignature } from 'typescript';
import IUser from '../../app/modules/user';

import UsersList from './UsersList';
import UsersForm from './UsersForm';

interface IProps{
    selectedUser:IUser|null,
    users:IUser[],
    editUser:boolean,
    editUserEvent: (user: IUser|null) => void,
    cancelEvent: ()=>void,
    saveUserEvent: (user:IUser)=>void
}

const UsersDashboard = ({selectedUser,users,editUser, editUserEvent,cancelEvent, saveUserEvent}:IProps) =>{
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
                        cancelEvent={cancelEvent}
                        saveUserEvent={saveUserEvent}/>
                }             


            </Grid.Column>
        </Grid>
    );

}

export default UsersDashboard;