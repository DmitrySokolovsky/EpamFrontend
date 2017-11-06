import React,{Component} from 'react';
import Search from '../hw-search/hw-search.jsx';
import Navigation from '../hw-navigation/hw-navigation.jsx';
import './hw-header.css';

export default class Header extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return (
            <div className="hw-header">
                <header>
                <div className="hw-header__container">
                <Search/>
                <Navigation/>
                </div>
                </header>
            </div>
        );
    }
}