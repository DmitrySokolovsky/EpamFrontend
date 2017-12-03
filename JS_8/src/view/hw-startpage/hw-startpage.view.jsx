import React, { Component } from 'react';

import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

import './hw-startpage.css';

export class StartPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="hw-startpage hw-startpage__container">
                <h1 className="hw-startpage__text--xxl">Hi, dear user!!!</h1>
                <div className="hw-startpage__text-container">
                    <p className="hw-startpage__text--big">We're glad to see on this resourece.
                    This is movie database site.</p>
                    <ul className="hw-startpage__list">
                        <p className="hw-startpage__text--medium">Main features: </p>
                        
                        <li className="hw-startpage__list-item">
                            Movie <NavLink to="/movies">list</NavLink>
                        </li>
                        <li className="hw-startpage__list-item">
                            TvShow <NavLink to="/tvshows">list</NavLink>
                        </li>
                        <li className="hw-startpage__list-item">
                            You can use <NavLink to="/mylib">library</NavLink> to write in your movies/shows for further watching
                        </li>
                        <li className="hw-startpage__list-item">
                            There are two kinds of search in lists
                        </li>
                        <li className="hw-startpage__list-item">
                            You also can add your own show/ movie through form
                        </li>
                        <li className="hw-startpage__list-item">
                            If you want to read about this app - go <NavLink to="/about">here</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}