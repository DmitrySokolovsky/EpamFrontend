import React,{Component} from 'react';
import './hw-navigation.css';

export class Navigation extends Component{
    constructor(props){
        super(props);
        this.classNameItem = "hw-nav__item hw-nav__text";
        this.classHiddenItem = "hw-nav__item--hidden";            
    };

    handleClick(){
        if(this.props.onClickAddMovie){
            this.props.onClickAddMovie();
        }
    }

    render(){
        return(
            <div className="hw-nav">
                <div className="hw-nav__container">
                <div className={this.props.hideForm?this.classHiddenItem:this.classNameItem}
                onClick={this.handleClick.bind(this)}>Add movie</div>
                <div className={this.props.hideAbout?this.classHiddenItem:this.classNameItem}>About</div>
                <div className={this.props.hidePricing?this.classHiddenItem:this.classNameItem}>Pricing</div>
                <div className={this.props.hideBlog?this.classHiddenItem:this.classNameItem}>Blog</div>
                </div>
            </div>
        );
    }
}



