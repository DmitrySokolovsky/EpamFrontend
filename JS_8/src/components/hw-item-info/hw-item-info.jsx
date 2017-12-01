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
    GenresList,
    Poster,
    ProgressBar
} from '../../components';
import {findGenres} from '../../services/genresFilter.service.js';
import {getSimilarMovies, getSimilarShows} from '../../store/actions';

export class ItemInfoMDB extends Component{
    constructor(props){
        super(props);   
        this.item = {};  
        this.state = {
            item: {},
            itemStringGenres: []
        }  
        this.progressBarInnerStyleConfig = {};
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
    console.log(this.state.item.type);   
    this.progressBarInnerStyleConfig = {
        width: '10%',
        backgroundColor: 'red'
    }

    this.progressBarInnerStyleConfig = {
        width: this.state.item.vote*10+'%'
    };

    if(this.state.item.type==='movie') this.props.getSimilarMovies(this.state.item.id);
    if(this.state.item.type==='tvshow') this.props.getSimilarShows(this.state.item.id);
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
                        Vote average: {this.state.item.vote}
                        <ProgressBar
                        styleConfigInner={this.progressBarInnerStyleConfig}/>                  
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
                    <div className="hw-movie-info__recomindation-list">
                        { this.state.item.type==='movie'?
                            this.props.similarMovies.map((item,index)=>{
                            return ( 
                                <Poster
                                width='110px'
                                height='170px'
                                key = {item.name}
                                data={item}
                                >                                
                                <div className="hw-poster__title">{item.name}</div>                               
                                </Poster>
                            )
                        }):
                          this.props.similarShows.map((item,index)=>{
                            return ( 
                                <Poster
                                width='110px'
                                height='170px'
                                key = {item.name}
                                data={item}
                                >                                
                                <div className="hw-poster__title">{item.name}</div>                               
                                </Poster>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    var genres = state.genres.genres;
    var similarMovies = state.init.similarMovies;
    var similarShows = state.initTv.similarShows;
    return {
        genres,
        similarMovies,
        similarShows
    };
};
//dispath state to props
const mapDispatchToProps = (dispatch) => ({
    getSimilarMovies: (value) => { 
        dispatch(getSimilarMovies(value)); 
    },
    getSimilarShows: (value) => {
        dispatch(getSimilarShows(value));
    }
});
export const ItemInfo = connect(mapStateToProps,mapDispatchToProps)(ItemInfoMDB);

function getValue(array, search) {
    var i = array.length;
    while (i--) {
        if (array[i].id == search) {
           return array[i];
        }
    }
  }
  