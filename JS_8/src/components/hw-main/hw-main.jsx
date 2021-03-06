import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { MovieView } from '../../view/hw-movie/hw-movie.view.jsx';
import { TvShowView } from '../../view/hw-tvshow/hw-tvshows.view.jsx';
import { MyLibrary } from '../../view/hw-mylib/hw-mylib.view.jsx';
import { NotFound } from '../../view/hw-notfound/hw-notfound.view.jsx';
import { About } from '../../view/hw-about/hw-about.view.jsx';
import { StartPage } from '../../view/hw-startpage/hw-startpage.view.jsx';

import {
    SideBar,   
    ItemInfo
} from '../../components';
import {
    initMovieData, 
    initTvShowData,
    initMyLibData
} from '../../store/actions';
import './hw-main.css';

export class AppMDB extends React.Component{
    constructor(props){
        super(props);   
        // init all data
        this.props.initMovies();
        this.props.initTvShows();
        this.props.initMyLibData();
        this.lastScroll = 0;
        this.state={
            isScrollDown: false
        }        
    };   

    render(){
        return(
            <div className="hw-app">
            <Router>
            <div className="hw-app">
                <SideBar/> 
                <Switch>
                
                <Route exact path="/movies" component={MovieView}/>

                <Route exact path="/tvshows"component={TvShowView}/>

                <Route path="/movies/:id" render={(props)=><ItemInfo data={this.props.movies}{...props}/>}/>

                <Route path="/tvshows/:id" render={(props)=><ItemInfo data={this.props.shows}{...props}/>}/>       
                
                <Route path="/mylib" component={MyLibrary}/>

                <Route path="/about" component={About}/>

                <Route path="/" component={StartPage}/>

                <Route path="*" component={NotFound}/>

                </Switch>               
                </div>
              </Router>             
            </div> 
        );
    }
}

const mapStateToProps = (store) => {
    let movies = store.init.movies;
    let shows = store.initTv.tvshows;
    return {
        movies,
        shows
    }
};

const mapDispatchToProps = (dispatch) => ({
    initMovies:()=> {
        dispatch(initMovieData());
    },
    initTvShows:() => {
        dispatch(initTvShowData());
    },
    initMyLibData:() => {
        dispatch(initMyLibData());
    }
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppMDB);