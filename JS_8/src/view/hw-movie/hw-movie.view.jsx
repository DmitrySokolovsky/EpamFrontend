import React from 'react';
import ReactDom from 'react-dom';
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
import {MovieInfo} from "../../components/hw-movie-info/hw-movie-info.jsx";
import "./hw-movie.view.css";
import {LocalSaver} from "../../services/local-saver.service.js";

export class MovieView extends React.Component{
    constructor(props){
        super(props);
        this.service = new LocalSaver();
        this.state = {
            movieArray:this.props.movieArray,
            textValue: '',
            isFormOpened: false,
            onChange: (newValue)=>{                
                this.setState({
                    textValue: newValue
                });
            },
            onClickOpenForm: ()=>{
                console.log('click from app' + this.state.isFormOpened);                
                this.setState({
                    isFormOpened: !this.state.isFormOpened
                });
            }            
        };
    }
    
    onClickCloseForm(){
        this.setState({
            isFormOpened: !this.state.isFormOpened,
        });
    }

    onClickAddMovie(item){
       let movies = this.service.getMoviesfromLocal();
       movies.push(item);
       this.service.setLocal(movies,"movies");
       this.setState({movieArray: movies});
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
                  
                    <Navigation onClickAddMovie={this.state.onClickOpenForm.bind(this)}/>                                        
                  </div>
                  </header>                  
                  </div>
                  
                  <div className="hw-app__movie-container">
                    <ScrollBar/>                    
                    <div className="hw-app__poster-container">
                    <Form isFormOpened={this.state.isFormOpened}
                    onClickCloseForm={this.onClickCloseForm.bind(this)}
                    onClickAddMovie={this.onClickAddMovie.bind(this)}
                    />
                    {this.props.movieArray
                        .filter((el)=>{
                            return el.name.indexOf(this.state.textValue)!==-1;
                        })
                        .map((item,index)=>{
                            return ( <NavLink to={`/movies/${item.id}`} key={item.name}>
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