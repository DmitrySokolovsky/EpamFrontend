import React, { Component } from 'react';
import './hw-notfound.css';

export class NotFound extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="hw-notfound hw-notfound__container">
                <h1>Sorry, page not found =(</h1>
            </div>
        );
    }
}