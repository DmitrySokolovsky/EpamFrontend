import React,{Component} from 'react';
import './hw-movie-info.css';
import Navigation from '../hw-navigation/hw-navigation.jsx';

class MovieInfo extends Component{
    constructor(props){
        super(props);
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
                    <div className="hw-movie-info__poster-container"></div>
                    <div className="hw-movie-info__overview-container">
                        <h1 className="hw-movie-info__text"></h1>
                        <p className="hw-movie-info__text"></p>
                    </div>
                </div>
                <div className="hw-movie-info__genre-container">
                    <h3 className="hw-movie-info__text">Genres</h3>
                    <div className="hw-movie-info__genres-list"></div>
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