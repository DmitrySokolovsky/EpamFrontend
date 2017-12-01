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
    initTvShowData,
    addUserTvShow,
    addShowToMyLib,
    removeShowFromMyLib,
    applyShowSearchConfig,
    toggleShowSearch
} from "../../store/actions";

import "./hw-tvshows.view.css";
import {EntityMovieService} from "../../services/movie-entity.service.js";

class TvShowViewMDB extends React.Component{
    constructor(props){
        super(props);
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
        this.props.addToLibShow(item);
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

    applyShowSearchConfig(){
        this.props.applyShowSearchConfig();
    }

    render(){
        return(
            <div className="hw-app__main-container">
                  <AdvancedSearch
                  onClick = {this.applyShowSearchConfig.bind(this)}
                  isSearchOpen={this.props.isSearchOpen}
                  searchType="show"
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
                    <Form addItem={this.props.addUserTvShow} />
                    {this.props.tvshows
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
                                addItemToLibrary={this.addItemToLibrary.bind(this)}
                                removeItemFromLibrary={this.removeItemFromLibrary.bind(this)}>
                                <NavLink to={`/tvshows/${item.id}`} key={item.name+item.id}>
                                <div className="hw-poster__title">{item.name}</div>
                                </NavLink>
                                </Poster>
                            )
                        })}
                    </div>                  
                  </div>                           
                </div>
        );
    }
}

const mapStateToProps = (state) =>{
    var tvshows = state.initTv.tvshows;
    var isSearchOpen = state.adShowSearch.isShowSearchOpen;    
    return{
        tvshows,
        isSearchOpen
    };
};

const mapDispatchToProps = (dispatch) =>({
    addUserTvShow: (item)=>{
        dispatch(addUserTvShow(item));
    },
    addToLibShow: (item) => {
        dispatch(addShowToMyLib(item));
    },
    removeFromLib: (item) => {
        dispatch(removeShowFromMyLib(item));
    },
    applyShowSearchConfig:() => {
        dispatch(applyShowSearchConfig());
    },
    toggleSearch:() => {
        dispatch(toggleShowSearch());
    }
});

export const TvShowView = connect(mapStateToProps, mapDispatchToProps)(TvShowViewMDB)