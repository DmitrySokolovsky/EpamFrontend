import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import SideBar from './components/hw-sidebar/hw-sidebar.jsx'
import Search from './components/hw-search/hw-search.jsx';
import Navigation from './components/hw-navigation/hw-navigation.jsx';
import ScrollBar from './components/hw-scrollbar/hw-scrollbar.jsx';
import Poster from './components/hw-poster/hw-poster.jsx';
import Form from './components/hw-form/hw-form.jsx';
import './style.css';
import DataService from './data-service.js';



class App extends React.Component{
    constructor(props){
        super(props);        
        this.state = {
            postersArray:[],
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
        console.log(this.state.isFormOpened);
    };

    componentWillMount(){
        DataService.getData().then(response=>{
            //console.log(response);
            var arr = JSON.parse(response).results;
            var a = arr.map((item)=>{
                item.poster_path = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
                return item;
            });
            
            if(!localStorage.movies){
                localStorage.setItem('movies', JSON.stringify(a));
            }
            this.setState({postersArray: JSON.parse(localStorage.getItem('movies'))});
        });
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
            <div className="hw-app">
            <Router>
            <div className="hw-app">
                <SideBar/>
                <Route exact path="/" children={()=>
                <div className="hw-app__main-container">
                  <div className="hw-header">
                  <header>
                  <div className="hw-header__container">
                    <Search onChange={this.state.onChange.bind(this)}/>
                    <Navigation onClickAddMovie={this.state.onClickOpenForm.bind(this)}/>                                        
                  </div>
                  </header>
                  <Form isFormOpened={this.state.isFormOpened}
                  onClickCancelForm={this.onClickCancelForm.bind(this)}
                  />
                  </div>
                  <div className="hw-app__movie-container">
                    <ScrollBar isFormOpened={this.state.isFormOpened}/>
                    <div className={(this.state.isFormOpened)?"hw-app__poster-container hw-app__poster-container--small":"hw-app__poster-container"}>
                    {this.state.postersArray
                        .filter((el)=>{
                            return el.title.indexOf(this.state.textValue)!==-1;
                        })
                        .map((item,index)=>{
                            return (<Poster url={item.poster_path}
                                key = {item.title}
                                data={item}
                                />)
                        })}
                    </div>
                  </div>                
                </div>}/>

                
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
