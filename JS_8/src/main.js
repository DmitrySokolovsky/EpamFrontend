import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import {MovieView} from "./view/hw-movie/hw-movie.view.jsx";
import {MoviesLoader} from "./services/movies-loader.service.js";
import {GenresService} from "./services/genres.service.js"
import {TvShowView} from "./view/hw-tvshow/hw-tvshows.view.jsx";
import {
    SideBar,   
    MovieInfo
} from "./components";
import './style.css';

import {initMovies} from "./store/actions"

import appStore from './store';
import { Provider } from 'react-redux';

class App extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            movieArray:[],
            showsArray:[]
        }        
    };

    componentWillMount(){
        this.props.initMovies();
        /*var moviesLoader = new MoviesLoader();
        var genres = localStorage.getItem("genres");
         var genresService = new GenresService();
        if(!genres){
            genresService.saveGenresLocal();
        }
               
        this.setState({movieArray: moviesLoader.viewMovies()});   */     
    }

    render(){
        return(
            <div className="hw-app">
            <Router>
            <div className="hw-app">
                <SideBar/> 
                <Switch>
                <Route exact path="/movies" render={(props)=><MovieView movieArray={this.props.values}{...props}/>}/>
                <Route path="/tvshows" render={(props)=><TvShowView showsArray={this.state.showsArray}{...props}/>}/>
                <Route path="/movies/:id" render={(props)=><MovieInfo data={this.state.movieArray}{...props}/>}/>
                <Route path="/tvshows/:id" render={(props)=><MovieInfo data={this.state.showsArray}{...props}/>}/>               
                </Switch>               
                </div>
              </Router>             
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    const values = state.movies.values;
    const moviesState = state.movies.state;

    return { values, state: moviesState };
}

const mapDispatchToProps = (dispatch) => ({
    initMovies: (movies) => dispatch(initMovies(movies))
});

connect(mapStateToProps, mapDispatchToProps)(App);

ReactDom.render(
    <Provider store={appStore}>
    <App/>
    </Provider>
    ,document.getElementById('test'));


               