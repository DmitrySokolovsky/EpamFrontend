import React,{Component} from 'react';
import './hw-navigation.css';

class Navigation extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div className="hw-nav">
                <div className="hw-nav__container">
                <div className="hw-nav__item hw-nav__item--first hw-nav__text">Add movie</div>
                <div className="hw-nav__item hw-nav__text">About</div>
                <div className="hw-nav__item hw-nav__text">Pricing</div>
                <div className="hw-nav__item hw-nav__item--last hw-nav__text">Blog</div>
                </div>
            </div>
        );
    }
}

export default Navigation;


