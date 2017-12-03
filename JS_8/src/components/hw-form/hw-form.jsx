import React,{Component} from 'react';
import {connect} from 'react-redux';

import {GenresService} from '../../services/genres.service.js';
import {
    TextBox,
    GenresList
} from '../../components';
import './hw-form.css';

import {
    closeForm,
    addUserMovie
} from '../../store/actions'; 

let defaultPoster = require('../../assets/img/default_poster.png');

class FormMovie extends Component{
    constructor (props){
        super(props); 
        this.validationForm = this.validationForm.bind(this);
        this.dataArray = [];
        this.genre_ids = [];
        this.state = {
            name: '',
            description: '',
            poster: './assets/img/default_poster.png',
            genre_ids: []
        };
    }

    //dropdown logic
    componentDidMount(){
        console.log(this.dropped);
        this.dropzone.ondrop = (e)=>{
            e.preventDefault();
            var file = e.dataTransfer.files[0];
            console.log(this.dropped);
            loadInView(file, this.dropped);
       }

       this.dropzone.ondragover = function(){
           return false;
       }

       this.dropzone.ondragleave = function(){
           return false;
       }
    }

    validationForm(){
        if(this.state.name && this.state.description != 0){
            return false;
        }
        return true;
    }

    onOverviewChange(value){
        let val = value;
        this.setState({description: val});
    }

    onTitleChange(value){
        let val = value;
        this.setState({name: val});
    }
    
    //sets constructed item to list
    handleSubmit(event){
        event.preventDefault(); 
        let item = {
            id: Math.round(Math.random()*1000),
            name: this.state.name,
            description: this.state.description,
            genre_ids: this.genre_ids,
            poster: this.state.poster,
            adult: '',
            vote: 1
        }   
       
        if(this.props.addItem){
            this.props.addItem(item); 
            this.props.closeForm;
        }
    }

    handleGenreChange(item){
        this.genre_ids.push(item);
        this.setState({genre_ids: this.state.genre_ids.push(item)});
        console.log(this.genre_ids);
    }

    // removes chosen genre from adding item genre list 
    onRemoveGenreChange(item){
        this.genre_ids = this.genre_ids.filter((i)=>{
            i.id !== item.id;
        });
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
                    <p className={this.state.name==""?"hw-form__validation":"hw-form__container--closed"}>Enter Title</p>
                  </div>
                  <div className="hw-form__text-container">
                    <label className="hw-form__text">Overview</label>
                    <TextBox onChange={this.onOverviewChange.bind(this)}
                    placeholder = "Overview"/>
                    <p className={this.state.description==""?"hw-form__validation":"hw-form__container--closed"}>Enter Describtion</p>
                  </div>                 
                </div>
                <div className="hw-form__genre-container">
                  <div className="hw-form__text">Genre</div>
                  <GenresList onChange={this.handleGenreChange.bind(this)}
                  onRemoveChange={this.onRemoveGenreChange.bind(this)}/>
                  <p className={this.genre_ids.length==0?"hw-form__validation":"hw-form__container--closed"}>Enter genres</p>
               </div>
               <div className="hw-form__submit-container">
                 <div className="hw-form__drop-files" draggable="true"
                 ref={div=>{this.dropzone=div}}>
                    
                 </div>
                 <div className="hw-form__droped">
                    <img src="" alt="" className="hw-form__dropped-image"
                    ref={img=>{this.dropped=img}}/>
                 </div>
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


function loadInView(file,elem){
    var fileReader = new FileReader();
    fileReader.onloadend = ()=>{            
        elem.src = fileReader.result;        
    }
    fileReader.readAsDataURL(file);
}

    


