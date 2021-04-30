import React, { Fragment } from 'react';
import {Button, Card, Image, Container} from 'semantic-ui-react';
//import IUser from '../../app/modules/user';
import IUserDto from '../../app/modules/userDto';

interface IProps{
    users:IUserDto[],
    editUserEvent: (user: IUserDto|null) => void;
}

const UserList = (props:IProps) =>{
    return(
        <Fragment>

            <h1>Family Members</h1>
            <Container>
                <Button onClick={() => props.editUserEvent(null)} primary>New Family Member</Button>
            </Container>
            <br/>
            <Card.Group>
                {
                    props.users.map((user:IUserDto) => (
                        <Card  key={user.id}>
                                <Card.Content>
                                    <Image
                                    floated='right'
                                    size='mini'
                                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                                    />
                                    <Card.Header>{user.firstName}  {user.lastName}</Card.Header>
                                    <Card.Meta>{user.userName}</Card.Meta>
                                    <Card.Description>
                                    Jenny requested permission to view your contact details
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                    <Button onClick={()=> props.editUserEvent(user)} basic color='green'>
                                        Edit
                                    </Button>
                                    <Button basic color='red'>
                                        View
                                    </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                    ))
                }
            </Card.Group>
        </Fragment> 
    );
}

export default UserList;