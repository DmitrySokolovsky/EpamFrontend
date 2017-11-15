import React, {Component} from 'react';
import './hw-poster.css';


export class Poster extends Component{
    constructor(props){
        super(props);
        this.posterImage = {
            backgroundImage: 'url(' + this.props.data.poster + ')'
        }
    }

    render(){
        return(
            <div className="hw-poster">
                <div className="hw-poster__container"
                style={this.posterImage} >
                    <div className="hw-poster__title">
                    {this.props.data.name}
                    </div>               
                </div>
            </div>
        );

    }
}

export default Poster;