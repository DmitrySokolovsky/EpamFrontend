import React,{Component} from 'react';
import {connect} from "react-redux";

import './hw-advanced-search.css';

import {
    GenresList,
    TextBox
} from "../../components";

import {
    toggleMovieSearch,
    changeMovieGenre,
    changeMovieAdult,
    changeMovieVote,
    changeMovieTitle,
    changeMovieOverview,
    saveMovieSearchConfig,
    removeMovieGenre
} from '../../store/actions';

export class AdvancedSearchMDB extends Component{
    constructor(props){
        super(props);
        this.showClass = 'hw-ad-search hw-ad-search__container';
        this.hiddenClass = 'hw-ad-search--hide';
    }

    onOverviewChange(value){
        if(this.props.searchType==='movie'){
            this.props.changeMovieOverview(value);
        } else {

        }        
    }

    onAdultChecked(){
        if(this.props.searchType==='movie') {
            if(!this.inputAdult.checked){
                console.log('121132132')
                this.props.changeMovieAdult("");
            }
            else{
                this.props.changeMovieAdult("1");
            }
        }
    }

    onTitleChange(value){
        if(this.props.searchType==='movie'){
            this.props.changeMovieTitle(value);
        } else {

        }
    }
    
    handleGenreChange(item){
        if(this.props.searchType==='movie'){
            this.props.changeMovieGenre(item);
        } else {

        }        
    }

    onRemoveChange(item){
        if(this.props.searchType==='movie'){
            this.props.removeMovieGenre(item); 
        } else {

        }              
    }

    onButtonClick(){       
        if(this.props.searchType==='movie'){
            if(this.props.onClick){
                this.props.onClick();
            }
            this.props.toggleMovieSearch();
        } else {

        }     
    }

    render(){
        return (
            <div className={this.props.isSearchOpen?this.showClass:this.hiddenClass}>
                <div className="hw-ad-search__input-container">
                    <div className="hw-ad-search__item">
                        Title
                        <TextBox placeholder="Title"
                        onChange={this.onTitleChange.bind(this)}/>
                    </div>
                    
                    <div className="hw-ad-search__item">
                        Overview
                        <TextBox placeholder="Ovewview"
                        onChange={this.onOverviewChange.bind(this)}/>
                    </div>

                    <div className="hw-ad-search__item">
                        Genres
                        <GenresList onChange={this.handleGenreChange.bind(this)}
                        onRemoveChange={this.onRemoveChange.bind(this)}/>
                    </div>
                </div> 
                <div className="hw-ad-search__input-container">
                    <div className="hw-ad-search__item">
                        <input type="checkbox" name="hw-adult" id=""
                        ref={(input)=>{this.inputAdult = input;}}
                        onChange={this.onAdultChecked.bind(this)}/>
                        <label htmlFor="">Adult</label>
                    </div>
                    <div className="hw-ad-search__item">
                        Vote Average
                        <div className="hw-prog-bar__outer">
                            <div className="hw-prog-bar__inner"></div>
                        </div>
                    </div>
                    <div className="hw-ad-search__item hw-ad-search__item--margin-top">
                        <input type="checkbox" name="" id=""/>
                        <label htmlFor="">Save config</label>
                    </div>
                    <div className="hw-ad-search__item">
                        <button className="hw-ad-search__button"
                        onClick={this.onButtonClick.bind(this)}>
                            Search
                        </button>
                    </div>
                </div>              
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    let isMovieSearchOpen = state.adMovieSearch.isSearchOpen;
    let genresMovieSearch = state.adMovieSearch.genresSearch;
    let adultMovieSearch = state.adMovieSearch.adultSearch;
    let voteMovieSearch = state.adMovieSearch.voteSearch;
    let titleMovieSearch = state.adMovieSearch.titleSearch;
    let overviewMovieSearch = state.adMovieSearch.overviewSearch;
    return {
        isMovieSearchOpen,
        genresMovieSearch,
        adultMovieSearch,
        voteMovieSearch,
        titleMovieSearch,
        overviewMovieSearch
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeMovieGenre:(item) => dispatch(changeMovieGenre(item)),
    removeMovieGenre: (item) => dispatch(removeMovieGenre(item)),
    changeMovieTitle: (title) => dispatch(changeMovieTitle(title)),
    changeMovieOverview: (overview) => dispatch(changeMovieOverview(overview)),
    changeMovieAdult: (value) => dispatch(changeMovieAdult(value)),
    toggleMovieSearch: () => dispatch(toggleMovieSearch())
});

export const AdvancedSearch = connect(mapStateToProps, mapDispatchToProps)(AdvancedSearchMDB);