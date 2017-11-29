import React,{Component} from 'react';
import {connect} from "react-redux";

import './hw-advanced-search.css';

import {
    GenresList,
    TextBox
} from "../../components";

import {
    toggleSearch,
    changeGenre,
    changeAdult,
    changeVote,
    changeTitle,
    changeOverview,
    saveSearchConfig
} from '../../store/actions';

export class AdvancedSearchMDB extends Component{
    constructor(props){
        super(props);
        this.showClass = 'hw-ad-search hw-ad-search__container';
        this.hiddenClass = 'hw-ad-search--hide';
    }

    onOverviewChange(value){
        this.props.changeOverview(value);
    }

    onAduktChecked(){
        if(this.inputAdult.checked){
            this.props.changeAdult("");
        }
        else{
            this.props.changeAdult("1");
        }
    }

    onTitleChange(value){
        this.props.changeTitle(value);
    }
    
    handleGenreChange(item){
        this.props.changeGenre(item);
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
                        <GenresList onChange={this.handleGenreChange.bind(this)}/>
                    </div>
                </div> 
                <div className="hw-ad-search__input-container">
                    <div className="hw-ad-search__item">
                        <input type="checkbox" name="hw-adult" id=""
                        ref={(input)=>{this.inputAdult = input;}}
                        onChange={this.onAduktChecked.bind(this)}/>
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
                        onClick={this.props.toggleSearch.bind(this)}>
                            Search
                        </button>
                    </div>
                </div>              
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    let isSearchOpen = state.adSearch.isSearchOpen;
    let genresSearch = state.adSearch.genresSearch;
    let adultSearch = state.adSearch.adultSearch;
    let voteSearch = state.adSearch.voteSearch;
    let titleSearch = state.adSearch.titleSearch;
    let overviewSearch = state.adSearch.overviewSearch;
    return {
        isSearchOpen,
        genresSearch,
        voteSearch,
        adultSearch,
        titleSearch,
        overviewSearch
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeGenre:(item) => dispatch(changeGenre(item)),
    changeTitle: (title) => dispatch(changeTitle(title)),
    changeOverview: (overview) => dispatch(changeOverview(overview)),
    changeAdult: (value) => dispatch(changeAdult(value)),
    toggleSearch: () => dispatch(toggleSearch())
});

export const AdvancedSearch = connect(mapStateToProps, mapDispatchToProps)(AdvancedSearchMDB);