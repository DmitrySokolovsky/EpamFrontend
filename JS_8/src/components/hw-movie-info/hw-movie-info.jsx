import React,{Component} from 'react';
import {connect} from "react-redux";
import './hw-movie-info.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
import {
    Navigation,
    GenresList
} from '../../components';
import {findGenres} from '../../services/genresFilter.service.js';


export class MovieInfoMDB extends Component{
    constructor(props){
        super(props);   
        this.item = {};  
        this.state = {
            item: {},
            itemStringGenres: []
        }  
    }

componentWillMount(){
    var itemCard = getValue(this.props.data, this.props.match.params.id);
    this.setState({ item: itemCard});
}

componentDidMount(){    
    let genreCollection = this.props.genres;
    let itemGenres = this.state.item.genre_ids;
    var currentGenresNames = findGenres(genreCollection, itemGenres);
    
    this.setState({itemStringGenres: currentGenresNames})       
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
                    <ul>
                       {this.state.itemStringGenres.map((item)=>{
                           return <li className="hw-movie-info__text"
                           key={item}>{item}</li>
                       })}
                    </ul>
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

const mapStateToProps = (state) => {
    var genres = state.genres.genres;
    return {
        genres
    };
};

export const MovieInfo = connect(mapStateToProps)(MovieInfoMDB);

function getValue(array, search) {
    var i = array.length;
    while (i--) {
        if (array[i].id == search) {
           return array[i];
        }
    }
  }
  