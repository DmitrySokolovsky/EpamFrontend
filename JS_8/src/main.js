import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import {MovieView} from "./view/hw-movie/hw-movie.view.jsx";
import {TvShowView} from "./view/hw-tvshow/hw-tvshows.view.jsx";
import {
    SideBar,
    Search,
    Navigation,
    ScrollBar,
    Poster,
    Form,
    MovieInfo
} from "./components";
import './style.css';
import {EntityMovieService} from "./services/movie-entity.service.js"


class App extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            postersMovieArray:[]
        }        
    };

    componentWillMount(){
        var entityService = new EntityMovieService();
        entityService.getMovieEntities().then((movies)=>{
            this.setState({postersMovieArray: movies});
        });
    }

    render(){
        return(
            <div className="hw-app">
            <Router>
            <div className="hw-app">
                <SideBar/> 
                <Switch>
                <Route exact path="/movies" render={(props)=><MovieView postersMovieArray={this.state.postersMovieArray}{...props}/>}/>
                <Route path="/tvshows" component={TvShowView}/>
                <Route path="/movies/:id" render={(props)=><MovieInfo data={this.state.postersMovieArray}{...props}/>}/>
                <Route path="/tvshows/:id" component={MovieInfo}/>               
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