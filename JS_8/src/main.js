import React from 'react';
import ReactDom from 'react-dom';
import SideBar from './components/hw-sidebar/hw-sidebar.jsx'
import Search from './components/hw-search/hw-search.jsx';
import Navigation from './components/hw-navigation/hw-navigation.jsx';
import ScrollBar from './components/hw-scrollbar/hw-scrollbar.jsx';
import Poster from './components/hw-poster/hw-poster.jsx';
import Form from './components/hw-form/hw-form.jsx';
import './style.css';
import DataService from './data-service.js';

var data = require('./data.json');
var dat=DataService.getData;
console.log(dat);


class App extends React.Component{
    constructor(props){
        super(props);
        this.postersUrlArray = data.movies;
        
        this.state = {
            textValue: '',
            isFormOpened: true,
            onChange: (newValue)=>{                
                this.setState({
                    textValue: newValue
                });
            },
            onClickAddMovie: ()=>{
                console.log('click from app' + this.state.isFormOpened);                
                this.setState({
                    isFormOpened: !this.state.isFormOpened
                });
            }
            
        };
        console.log(this.state.isFormOpened);
    };

    onClickAddMovie(){
        
        
    }

    render(){
        return(
            <div id="hw-app">
                <SideBar/>
                <div className="hw-app__main-container">
                  <div className="hw-header">
                  <header>
                  <div className="hw-header__container">
                    <Search onChange={this.state.onChange.bind(this)}/>
                    <Navigation onClickAddMovie={this.state.onClickAddMovie.bind(this)}/>                                        
                  </div>
                  </header>
                  <Form isFormOpened={this.state.isFormOpened}/>
                  </div>
                  <div className="hw-app__movie-container">
                    <ScrollBar/>
                    <div className="hw-app__poster-container">
                    {this.postersUrlArray
                        .filter((el)=>{
                            return el.title.indexOf(this.state.textValue)!==-1;
                        })
                        .map((item,index)=>{
                            return (<Poster url={item.poster_path}
                                key = {item.title}
                                />)
                    })}
                    </div>
                  </div>                
                </div>
            </div>            
        );
    }

}

ReactDom.render(<App/>,document.getElementById('test'));



