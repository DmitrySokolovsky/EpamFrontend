import React,{Component} from 'react';
import './hw-movie-info.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
import Navigation from '../hw-navigation/hw-navigation.jsx';
import DataService from '../../data-service.js';

class MovieInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:{}           
       };
    }

    componentWillMount(){
        var id = this.props.match.params.id;
        var itemFilm = this.props.data.filter((item)=>{
            return item.id == id;
        });
        this.setState({item: itemFilm[0]});
       this.poster = {
            backgroundImage: 'url(' + this.state.item.poster_path + ')'
        }; 
        this.setState({posterStyle: this.poster});
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
                    style={{backgroundImage: 'url(' + this.state.item.poster_path + ')'}}
                    ></div>
                    <div className="hw-movie-info__info-container">
                        <h1 className="hw-movie-info__text">{(this.state.item.name)?this.state.item.name:this.state.item.title}</h1>
                        <div className="hw-movie-info__text hw-movie-info__overview-container">
                        {this.state.item.overview}
                        </div>
                    </div>
                </div>
                <div className="hw-movie-info__genre-container">
                    <h3 className="hw-movie-info__text">Genres</h3>
                    <div className="hw-movie-info__genres-list">
                        {(this.state.item.genres)?this.state.item.genres:"TV SHOW"}
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

export default MovieInfo;