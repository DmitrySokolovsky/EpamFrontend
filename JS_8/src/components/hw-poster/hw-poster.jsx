import React, {Component} from 'react';
import './hw-poster.css';


export class Poster extends Component{
    constructor(props){
        super(props);
        this.posterImage = {
            backgroundImage: 'url(' + this.props.data.poster + ')'
        };
    }

    render(){
        return(
            <div className="hw-poster">
                <div className="hw-poster__container"
                style={this.posterImage} >
                    <div className="hw-poster__buttons">
                            <i className="fa fa-info-circle hw-poster__button"></i>
                            <i className="fa fa-times hw-poster__button"></i>
                    </div>                    
                    {this.props.children}                                   
                </div>
            </div>
        );

    }
}

export default Poster;