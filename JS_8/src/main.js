import React from 'react';
import ReactDom from 'react-dom';
import SideBar from './components/hw-sidebar/hw-sidebar.jsx'
import Header from './components/hw-header/hw-header.jsx';
import './style.css';

class App extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div id="test">
                <SideBar/>
                <Header/>
            </div>            
        );
    }

}

ReactDom.render(<App/>,document.getElementById('test'));


