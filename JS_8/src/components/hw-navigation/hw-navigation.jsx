import React,{Component} from 'react';
import './hw-navigation.css';

import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

import {connect} from "react-redux";
import { toggleForm } from "../../store/actions"; 

class Nav extends Component{
    constructor(props){
        super(props);
        this.classNameItem = "hw-nav__item hw-nav__text";
        this.classHiddenItem = "hw-nav__item--hidden";            
    };

    render(){
        return(
            <div className="hw-nav">
                <div className="hw-nav__container">
                <div className={this.props.hideForm?this.classHiddenItem:this.classNameItem}
                onClick={this.props.toggleForm}>Add movie</div>
                <NavLink to="/about">  
                <div className={this.props.hideAbout?this.classHiddenItem:this.classNameItem}>About</div>
                </NavLink>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleForm: () => dispatch(toggleForm())
});

const mapStateToProps = (state) =>{
    var isOpened= state.form.isFormOpened;
    return{
        isOpened
    };
};

export const Navigation = connect(mapStateToProps,mapDispatchToProps)(Nav);



