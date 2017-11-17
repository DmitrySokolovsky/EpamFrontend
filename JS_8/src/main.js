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


                /*<Router>
                <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/topics">Topics</NavLink></li>
                </ul>
                <Switch>
                <Route exact path="/" children={()=><h2>Home</h2>}/>
                <Route path="/about" children={()=><h2>About</h2>} />
                <Route path="/topics" children={()=><h2>topics</h2>} />
                </Switch>
                </div>
                </Router>*/

               /* <div className={(this.state.isFormOpened)?"hw-app__poster-container hw-app__poster-container--small":"hw-app__poster-container"}>
                    {this.state.tvShowArray
                        .filter((el)=>{
                            return el.original_name.indexOf(this.state.textValue)!==-1;
                        })
                        .map((item,index)=>{
                            return (<Poster url={item.poster_path}
                                key = {item.original_name}
                                data={item}
                                />)
                        })}
                    </div>}*/