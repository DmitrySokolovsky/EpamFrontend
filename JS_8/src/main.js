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

class App extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            movieArray:[],
            showsArray:[]
        }        
    };

    componentWillMount(){
        var moviesLoader = new MoviesLoader();
        var genres = localStorage.getItem("genres");
         var genresService = new GenresService();
        if(!genres){
            genresService.saveGenresLocal();
        }
               
        this.setState({movieArray: moviesLoader.viewMovies()});        
    }

    render(){
        return(
            <div className="hw-app">
            <Router>
            <div className="hw-app">
                <SideBar/> 
                <Switch>
                <Route exact path="/movies" render={(props)=><MovieView movieArray={this.state.movieArray}{...props}/>}/>
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

ReactDom.render(<App/>,document.getElementById('test'));


               