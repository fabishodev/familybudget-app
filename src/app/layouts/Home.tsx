import React, {Component} from 'react';

export default class Home extends Component{
    render(){
        return(
            <div>
                Home
                Here is the Latest React version: <strong>{React.version}</strong>
            </div>

        );        
    }
}