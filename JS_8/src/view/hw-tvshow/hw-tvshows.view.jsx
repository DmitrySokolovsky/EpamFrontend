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
    Form
} from "../../components";

import {
    toggleForm,
    initTvShowData,
    addUserTvShow
} from "../../store/actions";

import "./hw-tvshows.view.css";
import {EntityMovieService} from "../../services/movie-entity.service.js";

class TvShowViewMDB extends React.Component{
    constructor(props){
        super(props);
        this.props.initTvShowData();
        this.state = {
            textValue: '',
            onChange: (newValue)=>{                
                this.setState({
                    textValue: newValue
                });
            }           
        };
    }

    render(){
        return(
            <div className="hw-app__main-container">
                  <div className="hw-header">
                  <header>
                  <div className="hw-header__container">
                  <div className="hw-header__search-container">
                    <div className="hw-header__search-icon">
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
                    <ScrollBar/>                    
                    <div className="hw-app__poster-container">
                    <Form addItem={this.props.addUserTvShow} />
                    {this.props.tvshows
                        .filter((el)=>{
                            return el.name.indexOf(this.state.textValue)!==-1;
                        })
                        .map((item,index)=>{
                            return ( <NavLink to={`/movies/${item.id}`} key={item.id}>
                                <Poster url={item.poster}
                                key = {item.name}
                                data={item}
                                /></NavLink>
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
    return{
        tvshows
    };
};

const mapDispatchToProps = (dispatch) =>({
    initTvShowData: ()=> {
        dispatch(initTvShowData());
    },
    addUserTvShow: (item)=>{
        dispatch(addUserTvShow(item));
    }
});

export const TvShowView = connect(mapStateToProps, mapDispatchToProps)(TvShowViewMDB)