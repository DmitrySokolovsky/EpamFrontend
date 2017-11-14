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
    Search,
    Navigation,
    ScrollBar,
    Poster,
    Form
} from "../../components";
import {MovieInfo} from "../../components/hw-movie-info/hw-movie-info.jsx";
import "../../style.css";
import {EntityMovieService} from "../../services/movie-entity.service.js";

export class MovieView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postersMovieArray:[],
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
    
    onClickCancelForm(){
        this.setState({
            isFormOpened: !this.state.isFormOpened,
        });
    }

    onClickAddMovie(){
        this.setState({
            isFormOpened: !this.state.isFormOpened,
        });
    }

    render(){
        return(
            <div className="hw-app__main-container">
                  <div className="hw-header">
                  <header>
                  <div className="hw-header__container">
                    <Search onChange={this.state.onChange.bind(this)}/>
                    <Navigation onClickAddMovie={this.state.onClickOpenForm.bind(this)}/>                                        
                  </div>
                  </header>                  
                  </div>
                  
                  <div className="hw-app__movie-container">
                    <ScrollBar/>                    
                    <div className="hw-app__poster-container">
                    <Form isFormOpened={this.state.isFormOpened}
                    onClickCancelForm={this.onClickCancelForm.bind(this)}
                    />
                    {this.props.movieArray
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