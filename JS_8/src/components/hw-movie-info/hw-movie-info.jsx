import React,{Component} from 'react';
import './hw-movie-info.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
import {Navigation} from '../../components';


export class MovieInfo extends Component{
    constructor(props){
        super(props);   
        this.item = {};  
        this.state = {
            item: {}
        }  
    }

componentWillMount(){
    console.log(this.props.match.params.id);
    var itemCard = getValue(this.props.data, this.props.match.params.id);
    console.log(this.props);
    this.setState({ item: itemCard});    
}

    render(){
        return (
            <div className="hw-movie-info hw-movie-info__container">
                <header>
                    <div className="hw-header__container">                
                       <Navigation hideForm={true}/>                                   
                    </div>
                </header>
                <div className="hw-movie-info__description-container">
                    <div className="hw-movie-info__poster-container"
                    style = {{backgroundImage: `url(${this.state.item.poster})`}}
                    ></div>
                    <div className="hw-movie-info__info-container">
                        <h1 className="hw-movie-info__text">{this.state.item.name}</h1>
                        <div className="hw-movie-info__text hw-movie-info__overview-container">
                            {this.state.item.description}
                        </div>
                    </div>
                </div>
                <div className="hw-movie-info__genre-container">
                    <h3 className="hw-movie-info__text">Genres</h3>
                    <div className="hw-movie-info__genres-list">
                        
                    </div>
                </div>
                <div className="hw-movie-info__recomindation-container">
                    <h3 className="hw-movie-info__text">We also recommend</h3>
                    <div className="hw-movie-info__recomindation-list"></div>
                </div>
            </div>
        );
    }
}

function getValue(array, search) {
    var i = array.length;
    while (i--) {
        if (array[i].id == search) {
           return array[i];
        }
    }
  }
  