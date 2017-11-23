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

    render(){
        return(
            <div className="hw-app">
            <Router>
            <div className="hw-app">
                <SideBar/> 
                <Switch>
                
                <Route exact path="/movies" component={MovieView}/>

                <Route exact path="/tvshows"component={TvShowView}/>

                <Route path="/movies/:id" component={MovieInfo}/>

                <Route path="/tvshows/:id" component={MovieInfo}/>       
                
                <Route path="/mylib" component={MyLibrary}/>
                
                </Switch>               
                </div>
              </Router>             
            </div> 
        );
    }
}