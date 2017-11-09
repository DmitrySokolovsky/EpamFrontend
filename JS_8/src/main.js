import React from 'react';
import ReactDom from 'react-dom';
import SideBar from './components/hw-sidebar/hw-sidebar.jsx'
import Search from './components/hw-search/hw-search.jsx';
import Navigation from './components/hw-navigation/hw-navigation.jsx';
import ScrollBar from './components/hw-scrollbar/hw-scrollbar.jsx';
import Poster from './components/hw-poster/hw-poster.jsx';
import './style.css';

var data = require('./data.json');
console.log(data.movies);

class App extends React.Component{
    constructor(props){
        super(props);
        this.postersUrlArray = data.movies;
        
        this.state = {
            textValue: '',
            onChange: (newValue)=>{                
                this.setState({
                    textValue: newValue
                });
            }
        };
    };

    render(){
        return(
            <div id="hw-app">
                <SideBar/>
                <div className="hw-app__main-container">
                  <div className="hw-header">
                  <header>
                  <div className="hw-header__container">
                    <Search onChange={this.state.onChange.bind(this)}/>
                    <Navigation />
                    
                  </div>
                  </header>
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



