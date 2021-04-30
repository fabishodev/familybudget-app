import React,{Fragment, useState, useEffect} from 'react';
import {Grid, Segment, Form, Button, Dropdown} from 'semantic-ui-react';
//import IUser from '../../app/modules/user';
import IUserDto from '../../app/modules/userDto';
import IProfile from '../../app/modules/profile';
import Profiles from '../../app/layouts/Profiles';

interface IProps{
    selectedUser:IUserDto|null,
    profiles:IProfile[],
    cancelEvent: ()=>void,
    saveUserEvent: (user:IUserDto)=>void
}

interface IItem{
    key:string,
    value:string,
    text:string,
}

const UsersForm = ({selectedUser,profiles,cancelEvent,saveUserEvent}:IProps)=>{
    
    let profileList:IItem[]=[]; 

    profiles.map((p)=>{
        profileList.push({ key : p.id.toString(),value: p.id.toString(),text: p.name});
    })

    let defaultUser = {
        id: 0,
        firstName: "",
        lastName: "",
        userName: "",
        password:"",
        profileId: 0,
        profile: {
            id:0,
            name:"",
            description:"",
        }
    }

    let userValue:IUserDto = (selectedUser != null) ?selectedUser:defaultUser;

    const defaultProfileValue=((selectedUser == null)? profileList[0].value : selectedUser.profile.id).toString();

    const [user,setUser] = useState<IUserDto>(userValue);

    const handleProfileChanges = (event:any, result:any)=>{
        const{value} =result || event.target;

        let index = profiles.findIndex(p=> p.id == value);
        let selectedProfile = profiles[index];

        user.profileId = selectedProfile.id;
        user.profile =selectedProfile;

        setUser(user);


    }

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

                    <Dropdown 
                         placeholder="Select Profile"
                         fluid
                         selection
                         onChange={handleProfileChanges}
                         options = {profileList}
                         defaultValue = {defaultProfileValue}
                    /> 

                    

                    <Button onClick={()=> saveUserEvent(user)} floated="right" positive type="submit" content="Save"></Button>
                    <Button onClick={()=> cancelEvent()} floated="right" type="submit" content="Cancel"></Button>

                </Form>
            </Segment>
        </Fragment>
    )
};
export default UsersForm;