import React,{Component} from 'react';
import {GenresService} from "../../services/genres.service.js";
import {TextBox} from "../../components";
import './hw-form.css';

export class Form extends Component{
    constructor (props){
        super(props); 
        this.service = new GenresService();      
        this.state = {
            genresArray:[],
            name: '',
            description: '',
            poster: "../src/default_poster.png",
            genre_ids: []
        };
    }

    componentWillMount(){
        this.setState({isFormOpened: this.props.isFormOpened});
        
        this.setState({genresArray: this.service.getGenresFromLocal()})
    }

    onOverviewChange(value){
        let val = value;
        this.setState({description: val});
    }

    onTitleChange(value){
        let val = value;
        this.setState({name: val});
    }
    
    handleSubmit(event){
        event.preventDefault(); 
        let item = {
            id: Math.random(1000),
            name: this.state.name,
            description: this.state.description,
            genre_ids: this.state.genre_ids,
            poster: this.state.poster
        }
        console.log(item);
        this.props.onClickAddMovie(item);
        this.props.onClickCloseForm();
    }

    handleCancel(event){
        event.preventDefault();
        this.props.onClickCloseForm();
    }   

    handleGenreChange(event){
        this.state.genre_ids.push(event.target.name);
    }

    render(){
        return (
            <div className={(this.props.isFormOpened)?"hw-form hw-form__container":"hw-form__container--closed"}>
                <h1 className="hw-form__text">Add movie</h1>
                <form onSubmit={this.handleSubmit.bind(this)}
                className="hw-form__movie-description-container">
                <div className="hw-form__input-container">                  
                  <hr/>
                  <div className="hw-form__text-container">
                    <label className="hw-form__text">Title</label>
                    <TextBox onChange={this.onTitleChange.bind(this)}
                    placeholder="Title"/>
                  </div>
                  <div className="hw-form__text-container">
                    <label className="hw-form__text">Overview</label>
                    <TextBox onChange={this.onOverviewChange.bind(this)}
                    placeholder = "Overview"/>
                  </div>                 
                </div>
                <div className="hw-form__genre-container">
                  <div className="hw-form__text">Genre</div>
                  <div className="hw-form__genres-list"
                  onChange = {this.handleGenreChange.bind(this)}
                  > 
                  {
                      this.state.genresArray.map((item)=>{
                          return (
                              <div key={item.name}>
                                  <input type="checkbox" name={item.id}/>
                                  <label htmlFor={item.id}>{item.name}</label>
                              </div>
                          );
                      })
                  }                
                  </div>
               </div>
               <div className="hw-form__submit-container">
                 <div className="hw-form__drop-files">
                    <h2 className="hw-form__text">Upload file</h2>
                 </div>
                 <div className="hw-form__droped"></div>
                 <div className="hw-form__buttons">
                   <button type="submit" className="hw-form__submit-btn hw-form__text"
                   >Add</button>
                   <button className="hw-form__cancel-btn hw-form__text"
                   onClick={this.handleCancel.bind(this)}>Cancel</button>
                 </div>
                 </div>
            </form>
            </div>
        );        
    }
}




