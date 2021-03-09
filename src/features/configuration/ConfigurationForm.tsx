import React,{Fragment} from 'react';
import {Grid, Segment, Form, Button} from 'semantic-ui-react';

const ConfigurationForm = () => {
    return(
        <Fragment>
            <h1>System Configuration</h1>
            <Segment clearing>
                <Form>
                    <Form.Group grouped>
                        <label>Notifications</label>
                        <Form.Field label='Send an email notification when a user register expense' control='input' type='checkbox' />
                        <Form.Field label='Send an SMS notification when a user register expense' control='input' type='checkbox' />
                    </Form.Group>
                    
                    <Form.Group grouped>
                        <label>User Register</label>
                        <Form.Field label='Allow auto-register user' control='input' type='checkbox' />
                        <Form.Field label='Confirm registration via email' control='input' type='checkbox' />
                    </Form.Group>

                    <Form.Field>
                        <label>System errors</label>                       
                    </Form.Field>                   
                    <Form.Field label='Email to notify system errors' control='textarea' rows='3' />

                    <Form.Field>
                        <label>Mobile Phone number to notify system errors</label>
                        <input placeholder='' />
                    </Form.Field>

                    <Button floated="right" positive type="submit" content="Save"></Button>
                    <Button floated="right" type="submit" content="Cancel"></Button>
                </Form>
            </Segment>
        </Fragment>

    );
}

export default ConfigurationForm;