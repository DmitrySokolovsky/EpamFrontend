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
    toggleSearch
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

   componentWillMount(){
       var arr = [1,2,3];
       var brr = 
       console.log(brr);
   }

    render(){ 
        return(
            <div className="hw-app__main-container">
                  <AdvancedSearch/> 
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
                        .filter((el)=>{
                            if(!this.props.searchState.genresSearch[0]){
                                return true;
                            }
                            let stateArrGen = this.props.searchState.genresSearch.map((v)=> {return +v});
                            
                            let x = [];
                            //return !el.genre_ids.indexOf([+this.props.searchState.genresSearch[0],+this.props.searchState.genresSearch[1]]);  
                            for(let i =0;i<stateArrGen.length;i++){
                               if(el.genre_ids.indexOf(stateArrGen[i]) !==-1) x.push('1');
                               else x.push('');
                            }
                            for(let j = 0; j<x.length;j++){
                                if(x[j] == '') return false;
                            }
                            return true;
                        })
                        .map((item,index)=>{
                            return ( 
                                <Poster
                                key = {item.name}
                                data={item}
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
    var searchState = state.adSearch;
    return{
        movies,
        searchState
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
        dispatch(toggleSearch());
    }
});

export const MovieView = connect(mapStateToProps, mapDispatchToProps)(MovieViewMDB);
