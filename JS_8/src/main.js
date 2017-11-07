import React from 'react';
import ReactDom from 'react-dom';
import SideBar from './components/hw-sidebar/hw-sidebar.jsx'
import Header from './components/hw-header/hw-header.jsx';
import ScrollBar from './components/hw-scrollbar/hw-scrollbar.jsx';
import Poster from './components/hw-poster/hw-poster.jsx';
import './style.css';

var data = require('./data.json');

class App extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div id="hw-app">
                <SideBar/>
                <div className="hw-app__main-container">
                <Header/>
                <div className="hw-app__movie-container">
                <ScrollBar/>
                <div className="hw-app__poster-container">
                <Poster/>
                </div>
                </div>                
                </div>
                
            </div>            
        );
    }

}

ReactDom.render(<App/>,document.getElementById('test'));

function getData(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                console.log(xhr.responseText);
            }
            else{
                console.log('LL');
            }
        }
        else{
            console.log('LLL');
        }
    }
}


