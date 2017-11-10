import React,{Component} from 'react';
import './hw-form.css';

class Form extends Component{
    constructor (props){
        super(props);
        this.genresArray = [
            "Action", "Adventure", "Thriller", "Comedy", "Fantasy",
            "Drama", "Horror", "Criminal", "War" ,"Documentary" 
        ];
    }


    render(){
        return (
            <div className={(this.props.isFormOpened)?"hw-form hw-form__container":"hw-form__container--closed"}>
                <h1 className="hw-form__text">Add movie</h1>
                <form className="hw-form__movie-description-container">
                <div className="hw-form__input-container">                  
                  <hr/>
                  <div className="hw-form__text-container">
                    <label className="hw-form__text">Title</label>
                    <input type="text" className="hw-form__input-text"/>
                  </div>
                  <div className="hw-form__text-container">
                    <label className="hw-form__text">Overview</label>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                  </div>                 
                </div>
                <div className="hw-form__genre-container">
                  <div className="hw-form__text">Genre</div>
                  <div className="hw-form__genres-list">
                    {this.genresArray.map((item,index)=>{
                        return(
                        <div className="hw-form__genre hw-form__text">
                          <input type="checkbox" className={index}/>
                          {item}
                        </div>)
                    })}
                  </div>
               </div>
               <div className="hw-form__submit-container">
                 <input type="file" className="hw-form__file-input hw-form__text"/>
                 <div className="hw-form__buttons">
                   <button className="hw-form__submit-btn hw-form__text">Add</button>
                   <button className="hw-form__cancel-btn hw-form__text">Cancel</button>
                 </div>
                 </div>
            </form>
            </div>
        );        
    }
}

export default Form;


