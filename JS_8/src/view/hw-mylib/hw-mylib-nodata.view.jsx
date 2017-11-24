import React from 'react';
import ReactDom from 'react-dom';
import "./hw-mylib-nodata.css";

var sad = require('../../sad.png');

export class NoLibraryData extends React.Component{
    constructor(props){
        super(props);
        console.log(sad);
    }

    render(){
        return (
            <div className="hw-nodata hw-nodata__container">
                <h1 className="hw-nodata__text">There is no data in your library</h1>
                <img src={sad} alt="sad"/>
            </div>
        );
    }
}