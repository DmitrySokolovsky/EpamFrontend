import React,{Component} from 'react';
import {connect} from "react-redux";

import './hw-advanced-search.css';

import {
    GenresList,
    TextBox,
    ProgressBar
} from "../../components";

import {
    toggleMovieSearch,
    changeMovieGenre,
    changeMovieAdult,
    changeMovieVote,
    changeMovieTitle,
    changeMovieOverview,
    saveMovieSearchConfig,
    removeMovieGenre,
    initMovieData,

    toggleShowSearch,
    changeShowGenre,
    changeShowAdult,
    changeShowVote,
    changeShowTitle,
    changeShowOverview,
    saveShowSearchConfig,
    removeShowGenre,
    initTvShowData
} from '../../store/actions';

export class AdvancedSearchMDB extends Component{
    constructor(props){
        super(props);
        this.showClass = 'hw-ad-search hw-ad-search__container';
        this.hiddenClass = 'hw-ad-search--hide';
        this.state = {
            isConfigSaved: false
        };
        this.progressBarInnerStyleConfig = {
            width: '10%',
            backgroundColor: 'red'
        }

        this.progressBarOuterStyleConfig = {
            height: '25px',
            width: '135px',
            backgroundColor: 'yellow'
        }
    }

    componentDidMount(){
        if(this.props.searchType==='movie'){
            let config = sessionStorage.getItem('movieSearchConfig');
            if(config){
                this.configSaved.checked = true;
                this.setState({isConfigSaved: true});   
            }
            else{
                this.setState({isConfigSaved: false});   
                this.configSaved.checked = false;
            }
        }

        if(this.props.searchType==='show'){
            let config = sessionStorage.getItem('showSearchConfig');
            if(config){
                this.setState({isConfigSaved: true});   
            }
            else{
                this.setState({isConfigSaved: false});   
            }
        }        
    }

    onOverviewChange(value){
        if(this.props.searchType==='movie'){
            this.props.changeMovieOverview(value);
        } else {
            this.props.changeShowOverview(value);
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
        }else{
            if(!this.inputAdult.checked){
                console.log('121132132')
                this.props.changeShowAdult("");
            }
            else{
                this.props.changeShowAdult("1");
            }
        }
    }

    onTitleChange(value){
        if(this.props.searchType==='movie'){
            this.props.changeMovieTitle(value);
        } else {
            this.props.changeShowTitle(value);
        }
    }
    
    handleGenreChange(item){
        if(this.props.searchType==='movie'){
            this.props.changeMovieGenre(item);
        } else {
            this.props.changeShowGenre(item);
        }        
    }

    onRemoveChange(item){
        if(this.props.searchType==='movie'){
            this.props.removeMovieGenre(item); 
        } else {
            this.props.removeShowGenre(item);
        }              
    }

    onButtonClick(){       
        if(this.props.searchType==='movie'){
            if(this.props.onClick){
                this.props.onClick();
            }
            this.props.toggleMovieSearch();
        } else {
            if(this.props.onClick){
                this.props.onClick();
            }
            this.props.toggleShowSearch();
        }     
    }

    onClickReset(){
        if(this.props.searchType==='movie'){
            this.props.initMovieData();
            this.props.toggleMovieSearch();
        }
        else {
            this.props.initTvShowData();
            this.props.toggleShowSearch();
        }
    }

    onCheckSaveConfig(){
        console.log(this.configSaved.checked);
        if(this.props.searchType==='movie'){
            if(this.configSaved.checked){
                this.props.saveMovieSearchConfig();  
                this.setState({isConfigSaved: true});              
            }
        }
        if(this.props.searchType==='show'){
            if(this.configSaved.checked){
                this.props.saveShowSearchConfig(); 
                this.setState({isConfigSaved: true});                
            }
        }
    }

    onRemoveConfigClick(){
        if(this.props.searchType==='movie'){
            sessionStorage.removeItem('movieSearchConfig');
            this.setState({isConfigSaved: false});
            this.configSaved.checked = false;            
        }
        if(this.props.searchType==='show'){
            sessionStorage.removeItem('showSearchConfig');
            this.setState({isConfigSaved: false});
            this.configSaved.checked = false;            
        }
    }

    onRangeChange(value){
        if(this.props.searchType==='movie'){
            this.props.changeMovieVote(value);
        };
        if(this.props.searchType==='show'){
            this.props.changeShowVote(value);
        };
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
                       <ProgressBar styleConfigInner={this.progressBarInnerStyleConfig}
                       styleConfigOuter={this.progressBarOuterStyleConfig}
                       onRangeChange={this.onRangeChange.bind(this)}/>
                    </div>
                    <div className="hw-ad-search__item hw-ad-search__item--margin-top">
                        <input type="checkbox" name="" id=""
                        ref={input=> this.configSaved = input}
                        onChange={this.onCheckSaveConfig.bind(this)}/>
                        <label htmlFor="">Save config</label>                        
                        <button className="hw-ad-search__button hw-ad-search__button--thin hw-ad-search__button--small-font"
                        onClick={this.onRemoveConfigClick.bind(this)}
                        disabled={!this.state.isConfigSaved}>
                            Remove saved config
                        </button>                    
                    </div>
                    <div className="hw-ad-search__item">
                        <button className="hw-ad-search__button"
                        onClick={this.onButtonClick.bind(this)}>
                            Search
                        </button>
                    </div>
                    <div className="hw-ad-search__item">
                        <button className="hw-ad-search__button hw-ad-search__button--thin"
                        onClick={this.onClickReset.bind(this)}>
                            Reset
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
    toggleMovieSearch: () => dispatch(toggleMovieSearch()),
    initMovieData: () => dispatch(initMovieData()),
    saveMovieSearchConfig: ()=> dispatch(saveMovieSearchConfig()),
    changeMovieVote: (value) => dispatch(changeMovieVote(value)),
    
    changeShowGenre:(item) => dispatch(changeShowGenre(item)),
    removeShowGenre: (item) => dispatch(removeShowGenre(item)),
    changeShowTitle: (title) => dispatch(changeShowTitle(title)),
    changeShowOverview: (overview) => dispatch(changeShowOverview(overview)),
    changeShowAdult: (value) => dispatch(changeShowAdult(value)),
    toggleShowSearch: () => dispatch(toggleShowSearch()),
    initTvShowData: () => dispatch(initTvShowData()),
    saveShowSearchConfig: () => dispatch(saveShowSearchConfig()),
    changeShowVote: (value) => dispatch(changeShowVote(value))
});

export const AdvancedSearch = connect(mapStateToProps, mapDispatchToProps)(AdvancedSearchMDB);