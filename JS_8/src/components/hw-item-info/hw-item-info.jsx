import React,{Component} from 'react';
import {connect} from "react-redux";
import './hw-item-info.css';
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


export class ItemInfoMDB extends Component{
    constructor(props){
        super(props);   
        this.item = {};  
        this.state = {
            item: {},
            itemStringGenres: []
        }  
    }

componentWillMount(){
    let cardStr = sessionStorage.getItem('currentCard');
    if(!cardStr){
        var itemCard = getValue(this.props.data, this.props.match.params.id);
        let itemCardStr = JSON.stringify(itemCard);
        sessionStorage.setItem('currentCard', itemCardStr);
        this.setState({ item: itemCard});
    }
    else{
        let card = JSON.parse(cardStr);
        this.setState({ item: card});
    }
   
}

componentWillUnmount(){
    sessionStorage.removeItem('currentCard');
    sessionStorage.removeItem('currentGenresList');
}

componentDidMount(){    
    let genreCollection = this.props.genres;
    let itemGenres = this.state.item.genre_ids;
    var currentGenresNames = findGenres(genreCollection, itemGenres);  
    let genresStr = sessionStorage.getItem('currentGenresList');
    if(!genresStr) {
        let currenGenresStr = JSON.stringify(currentGenresNames);
        sessionStorage.setItem('currentGenresList', currenGenresStr);
        this.setState({itemStringGenres: currentGenresNames});
    }
    else{
        let currentGenresList = JSON.parse(genresStr);
        this.setState({itemStringGenres: currentGenresList});
    }    
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

export const ItemInfo = connect(mapStateToProps)(ItemInfoMDB);

function getValue(array, search) {
    var i = array.length;
    while (i--) {
        if (array[i].id == search) {
           return array[i];
        }
    }
  }
  