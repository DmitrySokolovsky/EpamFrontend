import React,{Component} from 'react';
import '../../css/font-awesome.min.css'
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
import './hw-sidebar.css';

//fa fa-window-close-o
class SideBar extends Component{
    constructor(props){
        super(props);       
        this.state = {isOpened: true};
        this.closeIcon = 'fa fa-window-close-o fa-2x fa--padding';
        this.logoClass = 'hw-side-bar__text hw-side-bar__text--big';
        this.hideClass = 'hw-side-bar__hide';
    }

    toggleState(){
        this.setState({isOpened: !this.state.isOpened});
    }

    render(){
        return(
            <div className="hw-side-bar hw-side-bar__container">
                <div className="hw-side-bar__menu-logo" onClick={this.toggleState.bind(this)}>
                <i className={(this.state.isOpened) ?"fa fa-bars fa--padding" :"fa fa-bars fa-2x"}></i>
                <i className={(this.state.isOpened) ? this.closeIcon :this.hideClass}></i>
                <p className={(this.state.isOpened) ? this.logoClass :this.hideClass}>Logo</p>
                </div>
                <div className="hw-side-bar__menu-container">
                <div className="hw-side-bar__vertical-container">
                
                <div className="hw-side-bar__menu-item">
                <NavLink to="/movies" activeClassName="active-link">
                <i className={(this.state.isOpened)?'fa fa-film fa--padding':'fa fa-film'}></i><p className={(this.state.isOpened) ?"hw-side-bar__text" :this.hideClass}>Movies</p>
                </NavLink>
                </div>
               
                <div className="hw-side-bar__menu-item">  
                <NavLink to="/tvshows" activeClassName="active-link">             
                <i className={(this.state.isOpened)?'fa fa-television fa--padding':'fa fa-television'}></i><p className={(this.state.isOpened) ?"hw-side-bar__text" :this.hideClass}>TV Shows</p>                
                </NavLink>
                </div>

                <div className="hw-side-bar__menu-item">
                <i className={(this.state.isOpened)?'fa fa-book fa--padding':'fa fa-book'}></i><p className={(this.state.isOpened) ?"hw-side-bar__text" :this.hideClass}>My Library</p>
                </div>

                <div className="hw-side-bar__menu-item">
                <i className={(this.state.isOpened)?'fa fa-user-circle fa--padding':'fa fa-user-circle'}></i><p className={(this.state.isOpened) ?"hw-side-bar__text" :this.hideClass}>Support</p>
                </div>  

                </div>
                </div>
        </div>);
    }
}

export default SideBar;