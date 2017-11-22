import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import {MovieView} from "../../view/hw-movie/hw-movie.view.jsx";
import {TvShowView} from "../../view/hw-tvshow/hw-tvshows.view.jsx";
import {MyLibrary} from "../../view/hw-mylib/hw-mylib.view.jsx";
import {
    SideBar,   
    MovieInfo
} from "../../components";
import './hw-main.css';


export class App extends React.Component{
    constructor(props){
        super(props);   
        this.lastScroll = 0;
        this.state={
            isScrollDown: false
        }        
    };

    componentWillMount(){
        
    }

    

    render(){
        return(
            <div className="hw-app">
            <Router>
            <div className="hw-app">
                <SideBar/> 
                <Switch>
                
                <Route exact path="/movies" render={(props)=>
                <MovieView movieArray={this.state.movieArray} {...props}/>}/>

                <Route path="/tvshows" render={(props)=>
                <TvShowView showsArray={this.state.showsArray}{...props}/>}/>

                <Route path="/movies/:id" render={(props)=>
                <MovieInfo data={this.state.movieArray}{...props}/>}/>

                <Route path="/tvshows/:id" render={(props)=>
                <MovieInfo data={this.state.showsArray}{...props}/>}/>       
                
                <Route path="/mylib" component={MyLibrary}/>
                </Switch>               
                </div>
              </Router>             
            </div> 
        );
    }
}