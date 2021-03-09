import React, {Component, Fragment} from 'react';
import {Container} from 'semantic-ui-react';

import Home from './layouts/Home';
import Users from './layouts/Users';
import Profiles from './layouts/Profiles';
import Expenses from './layouts/Expenses';
import Navbar from './layouts/Navbar';
import Configuration from './layouts/Configuration';

import {BrowserRouter, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'


export default class App extends Component{

    render(){
        return(       
            <Fragment>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Container style={{ marginTop: '7em'}}>
                        <Switch>

                            <Route exact path="/">
                                <Home/>
                            </Route>

                            <Route path="/users">
                                <Users/>
                            </Route>

                            <Route path="/profiles">
                                <Profiles/>
                            </Route>

                            <Route path="/expenses">
                                <Expenses/>
                            </Route>

                            <Route path="/configuration">
                                <Configuration/>
                            </Route>

                        </Switch>

                    </Container>                
                </BrowserRouter>
            </Fragment>
        );
    }
}