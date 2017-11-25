import React, {Component} from 'react';
import './hw-poster.css';

export class Poster extends Component{
    constructor(props){
        super(props);
        this.selectedClass = 'hw-poster__container hw-poster__container--border';
        this.notSelectedClass = 'hw-poster__container';
        this.addButtonClass = 'fa fa-check hw-poster__button hw-poster__button--green-hover';
        this.removeButtonClass = 'fa fa-times hw-poster__button hw-poster__button--red-hover'
        this.posterImage = {
            backgroundImage: 'url(' + this.props.data.poster + ')'
        };

    }

    addItemToLibtary(){
        console.log(this.props.data);
        if(this.props.addItemToLibrary){
            this.props.addItemToLibrary(this.props.data);
        }
    }

    render(){
        console.log(this.props.data);
        return(
            <div className="hw-poster">
                <div className={(this.props.data.isInLibrary)?this.selectedClass:this.notSelectedClass}
                style={this.posterImage} >
                    <div className="hw-poster__buttons">
                            <i className="fa fa-info-circle hw-poster__button"></i>
                            <i className={(this.props.data.isInLibrary)?this.removeButtonClass:this.addButtonClass}
                            onClick={this.addItemToLibtary.bind(this)}></i>
                    </div>                    
                    {this.props.children}                                   
                </div>
            </div>
        );

    }
}
