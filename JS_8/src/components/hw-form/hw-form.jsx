import React,{Component} from 'react';
import {connect} from "react-redux";

import {GenresService} from "../../services/genres.service.js";
import {TextBox} from "../../components";
import './hw-form.css';

import {
    closeForm,
    addUserMovie
} from "../../store/actions"; 



class FormMovie extends Component{
    constructor (props){
        super(props); 
        this.validationForm = this.validationForm.bind(this);
        this.service = new GenresService();      
        this.state = {
            genresArray:[],
            name: '',
            description: '',
            poster: "../src/default_poster.png",
            genre_ids: []
        };
    }

    validationForm(){
        if(this.state.name && this.state.description != 0){
            return false;
        }
        return true;
    }

   /* componentWillMount(){
        let genresService = new GenresService();
        genresService.saveGenresLocal();
        this.setState({genresArray: genresService.getGenresFromLocal()});
    }*/

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
            id: Math.round(Math.random()*1000),
            name: this.state.name,
            description: this.state.description,
            genre_ids: this.state.genre_ids,
            poster: this.state.poster
        }   
       
        if(this.props.addItem){
            this.props.addItem(item); 
            this.props.closeForm;
        }
    }

    handleGenreChange(event){
        this.state.genre_ids.push(event.target.name);
    }

    render(){
        return (
            <div className={(this.props.isOpened)?"hw-form hw-form__container":"hw-form__container--closed"}>
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
                   <button type="submit" className="hw-form__button hw-form__button--green hw-form__text"
                   disabled = {this.validationForm()}
                   >Add</button>
                   <button className="hw-form__button hw-form__button--red hw-form__text"
                   onClick={this.props.closeForm}>Cancel</button>
                 </div>
                 </div>
            </form>
            </div>
        );        
    }
}

const mapStateToProps = (state) =>{
    var isOpened = state.form.isFormOpen;
    return{
        isOpened
    };
};

const mapDispatchToProps = (dispatch) =>({
    closeForm: (event)=> {
        dispatch(closeForm())
        event.preventDefault();
    }    
})

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormMovie);



