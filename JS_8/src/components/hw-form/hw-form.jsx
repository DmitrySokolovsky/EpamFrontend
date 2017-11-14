import React,{Component} from 'react';
import DataService from "../../services";
import './hw-form.css';

export class Form extends Component{
    constructor (props){
        super(props);        
        this.state = {
            genresArray:[],
            title: '',
            overview: '',
        };
    }

    componentWillMount(){
        this.setState({isFormOpened: this.props.isFormOpened});
    }

    onOverviewChange(event){
        let val = event.target.value;
        this.setState({overview: val});
    }

    onTitleChange(event){
        let val = event.target.value;
        this.setState({title: val});
    }
    
    handleSubmit(event){
        event.preventDefault();
        var localStr = localStorage.getItem("movies");
        var moviesArray = JSON.parse(localStr);
        moviesArray.push({title: this.state.title, overview: this.state.overview});
        localStorage.clear();
        localStorage.setItem("movies",JSON.stringify(moviesArray));        
        this.props.onClickCancelForm();
    }

    handleCancel(event){
        event.preventDefault();
        this.props.onClickCancelForm();
    }

   /* componentWillMount(){
        var url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US'        
        DataService.getData(url).then(response=>{
            let arr = JSON.parse(response).genres;
            localStorage.setItem("genres",response);
            this.setState({genresArray: arr});            
        });
    }*/

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
                    <input type="text" className="hw-form__input-text"
                    onChange={this.onTitleChange.bind(this)}/>
                  </div>
                  <div className="hw-form__text-container">
                    <label className="hw-form__text">Overview</label>
                    <textarea name="" id="" cols="30" rows="5"
                    onChange={this.onOverviewChange.bind(this)}></textarea>
                  </div>                 
                </div>
                <div className="hw-form__genre-container">
                  <div className="hw-form__text">Genre</div>
                  <div className="hw-form__genres-list">
                    {this.state.genresArray.map((item,index)=>{
                        return(
                        <div key={item.name} className="hw-form__genre hw-form__text">
                          <input type="checkbox" genreid={item.id} />
                          {item.name}
                        </div>)
                    })}
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




