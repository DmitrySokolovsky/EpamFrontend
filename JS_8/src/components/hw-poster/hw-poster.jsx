import React, {Component} from 'react';
import './hw-poster.css';


class Poster extends Component{
    constructor(props){
        super(props);
        this.posterImage = {
            backgroundImage: 'url(' + this.props.url + ')'
        }
    }

    render(){
        return(
            <div className="hw-poster">
                <div className="hw-poster__container"
                style={this.posterImage} >               
                </div>
            </div>
        );

    }
}

export default Poster;