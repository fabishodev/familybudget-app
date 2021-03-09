import React from 'react';
import {Image, Menu, Container, Dropdown} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={Link} to="/" header>
                    <Image size="mini" src="/logo192.png" />
                    Family Budget
                </Menu.Item>

                <Menu.Item as={Link} to="/" header>
                    Home
                </Menu.Item>

                <Dropdown item simple text="Options">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/profiles">Profiles</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/users">Family</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/expenses">Expenses</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/configuration">Configuration</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>



            </Container>
        </Menu>
        
    );




}

export default Navbar;