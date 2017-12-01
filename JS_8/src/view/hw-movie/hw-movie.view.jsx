import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

import {
    SideBar,
    TextBox,
    Navigation,
    ScrollBar,
    Poster,
    Form,
    AdvancedSearch
} from "../../components";

import { 
    toggleForm,
    initMovieData,
    addUserMovie,
    addMovieToMyLib,
    removeMovieFromMyLib,
    toggleMovieSearch,
    applyMovieSearchConfig
 } from "../../store/actions"; 

import "./hw-movie.view.css";

export class MovieViewMDB extends React.Component{
    constructor(props){
        super(props);
        this.lastScroll = 0;
        this.state = {
            isScrollDown: true,
            textValue: '',
            onChange: (newValue)=>{                
                this.setState({
                    textValue: newValue
                });
            }                        
        };

    }

    scrollingHandler(){        
        var div = document.getElementsByClassName("hw-app__poster-container")[0];
        var currentScroll = div.scrollTop;
        
        if(currentScroll === 0){
            this.setState({isScrollDown: true});
        }

        if(currentScroll>0){
            this.setState({isScrollDown: false});
        }
    }

    addItemToLibrary(item){
        this.props.addToLib(item);
    }

    removeItemFromLibrary(item){
        this.props.removeFromLib(item);
    }

    changingArrow(){
        var div = document.getElementsByClassName("hw-app__poster-container")[0];
        var currentScroll = div.scrollTop;

        if(currentScroll!==0){
            this.setState({isScrollDown: !this.state.isScrollDown});
            div.scrollTo(0,0);
        }
        else{
            div.scrollTo(0, 1000000000);
        }
        
    }

    applyMovieSearchConfig(){
        this.props.applyMovieSearchConfig();
    }

    render(){ 
        return(
            <div className="hw-app__main-container">
                  <AdvancedSearch
                  onClick = {this.applyMovieSearchConfig.bind(this)}
                  isSearchOpen={this.props.isSearchOpen}
                  searchType = 'movie'
                  /> 
                  <div className="hw-header">
                  <header>
                  <div className="hw-header__container">
                  <div className="hw-header__search-container">
                    <div className="hw-header__search-icon"
                    onClick={this.props.toggleSearch.bind(this)}>
                      <i className="fa fa-search hw-search__text--dark"></i>
                      
                    </div>
                    <TextBox onChange={this.state.onChange.bind(this)}
                    placeholder="...Search"/>
                  </div>                  
                    <Navigation/>                                        
                  </div>
                  </header>    
                               
                  </div>
                  
                  <div className="hw-app__movie-container">
                    <ScrollBar isScrollDown = {this.state.isScrollDown}
                    onClick={this.changingArrow.bind(this)}/>                    
                    <div onScroll = {this.scrollingHandler.bind(this)}
                    className="hw-app__poster-container">
                    <Form addItem={this.props.addUserMovie}/>
                    {this.props.movies
                        
                        .filter((el)=>{
                            return el.name.indexOf(this.state.textValue)!==-1;
                        })
                       
                        .map((item,index)=>{
                            return ( 
                                <Poster
                                width='170px'
                                height='247px'
                                key = {item.name}
                                data={item}
                                style={this.posterStyle}
                                addItemToLibrary={this.addItemToLibrary.bind(this)}
                                removeItemFromLibrary={this.removeItemFromLibrary.bind(this)}>
                                <NavLink to={`/movies/${item.id}`} key={item.name+item.id}>
                                <div className="hw-poster__title">{item.name}</div>
                                </NavLink>
                                </Poster>
                            )
                        })}
                    </div>                  
                  </div> 
                                                    
                </div>
                    
        )
    }
}

const mapStateToProps = (state) =>{
    var movies = state.init.movies;
    var isSearchOpen = state.adMovieSearch.isMovieSearchOpen;
    return{
        movies,
        isSearchOpen
    };
};

const mapDispatchToProps = (dispatch) =>({
    addUserMovie: (item)=>{
        dispatch(addUserMovie(item));
    },
    addToLib: (item)=>{
        dispatch(addMovieToMyLib(item));
    },
    removeFromLib: (item) =>{
        dispatch(removeMovieFromMyLib(item));
    },
    initMovies:()=> {
        dispatch(initMovieData());
    },
    toggleSearch: () => {
        dispatch(toggleMovieSearch());
    },
    applyMovieSearchConfig: () => {
        dispatch(applyMovieSearchConfig());
    }
});

export const MovieView = connect(mapStateToProps, mapDispatchToProps)(MovieViewMDB);
