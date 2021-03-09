import React,{Fragment, useState, useEffect} from 'react';
import {Grid, Segment, Form, Button} from 'semantic-ui-react';
import IUser from '../../app/modules/user';

interface IProps{
    selectedUser:IUser|null,
    cancelEvent: ()=>void,
    saveUserEvent: (user:IUser)=>void
}

const UsersForm = ({selectedUser,cancelEvent,saveUserEvent}:IProps)=>{
    let defaultUser = {
        id: 0,
        firstName: "",
        lastName: "",
        userName: "",
        password:"",
    }

    let userValue:IUser = (selectedUser != null) ?selectedUser:defaultUser;

    const [user,setUser] = useState<IUser>(userValue);

    const handleInputChanges = (event:any) =>{
        const {name, value} = event.target;
        setUser({...user, [name]:value})

    };

    let label = user.id == 0 ?  "New Family Member" : "Edit Family Member";

    return(
        <Fragment>
            <h1>{label}</h1>
            <Segment clearing>
                <Form>
                    <Form.Input
                        name="firstName" onChange={handleInputChanges}
                        placeholder="First Name"
                        autocomplete="off"
                        value={user.firstName}
                    />

                    <Form.Input
                        name="lastName" onChange={handleInputChanges}
                        placeholder="Last Name"
                        autocomplete="off"
                        value={user.lastName}
                    />

                     <Form.Input
                        name="userName" onChange={handleInputChanges}
                        placeholder="User Name"
                        autocomplete="off"
                        value={user.userName}
                    />

                    <Button onClick={()=> saveUserEvent(user)} floated="right" positive type="submit" content="Save"></Button>
                    <Button onClick={()=> cancelEvent()} floated="right" type="submit" content="Cancel"></Button>

                </Form>
            </Segment>
        </Fragment>
    )
};
export default UsersForm;