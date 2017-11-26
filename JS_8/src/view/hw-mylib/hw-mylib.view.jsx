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

import {NoLibraryData} from "./hw-mylib-nodata.view.jsx";

import { 
    toggleForm,
    initMovieData,
    addUserMovie,
    removeMovieFromMyLib
 } from "../../store/actions"; 

import {MovieInfo} from "../../components/hw-movie-info/hw-movie-info.jsx";
import "./hw-mylib.view.css";

export class MyLibraryMDB extends React.Component{
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

    removeItemFromLibrary(item){
        this.props.removeFromLib(item);
    }

    scrollingHandler(){        
        var div = document.getElementsByClassName("hw-app__poster-container")[0];
        var currentScroll = div.scrollTop;
        
        if(currentScroll === 0){
            this.setState({isScrollDown: true});
        }

        if(currentScroll>0){
            console.log(currentScroll);
            this.setState({isScrollDown: false});
        }
        console.log(currentScroll);
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

    render(){ 
        let string = localStorage.getItem("mylib")
        if(string==="[]"){
            return(
                <NoLibraryData/>
            );
        }       
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
                  
                    <Navigation hideForm={true}/>                                        
                  </div>
                  </header>                  
                  </div>
                  
                  <div className="hw-app__movie-container">
                    <ScrollBar isScrollDown = {this.state.isScrollDown}
                    onClick={this.changingArrow.bind(this)}/>                    
                    <div onScroll = {this.scrollingHandler.bind(this)}
                    className="hw-app__poster-container">
                    <Form/>
                    {this.props.mylib
                        .filter((el)=>{
                            return el.name.indexOf(this.state.textValue)!==-1;
                        })
                        .map((item,index)=>{
                            return ( 
                                <Poster
                                key = {item.name}
                                data={item}
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
        );
    }
}

const mapStateToProps = (state) => {
    var mylib = state.addToLib.myLibItems;
    return {
        mylib
    };
}

const mapDispatchToProps = (dispatch) =>({
    removeFromLib: (item) =>{
        dispatch(removeMovieFromMyLib(item));
    }
});

export const MyLibrary = connect(mapStateToProps, mapDispatchToProps)(MyLibraryMDB);
