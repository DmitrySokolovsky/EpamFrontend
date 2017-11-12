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
                    <div className="hw-poster__title">
                    {(this.props.data.title)?this.props.data.title:this.props.data.name}
                    </div>               
                </div>
            </div>
        );

    }
}

export default Poster;