import React, {Component} from 'react';
import './hw-poster.css';
import { connect } from 'react-redux';
import {addToMyLib} from '../../store/actions';

export class PosterMDB extends Component{
    constructor(props){
        super(props);
        this.selectedClass = 'hw-poster__buttons hw-poster__container--border';
        this.notSelectedClass = 'hw-poster__buttons';
        this.item = this.props.data;
        this.posterImage = {
            backgroundImage: 'url(' + this.props.data.poster + ')'
        };

    }

    addItemToLibtary(event){
        this.props.addToLib(this.props.data);
    }

    render(){
        return(
            <div className="hw-poster">
                <div className="hw-poster__container"
                style={this.posterImage} >
                    <div className={(this.item.isInLibrary)?this.selectedClass:this.notSelectedClass}>
                            <i className="fa fa-info-circle hw-poster__button"></i>
                            <i className="fa fa-check hw-poster__button hw-poster__button--green-hover"
                            onClick={this.addItemToLibtary.bind(this)}></i>
                    </div>                    
                    {this.props.children}                                   
                </div>
            </div>
        );

    }
}
const mapStateToProps = (state) =>{
    var movies = state.init.movies;
    var shows = state.initTv.tvshows;
    return{
        movies,
        shows
    };
};

const mapDispatchToProps = (dispatch) =>({
    addToLib: (item)=>{
        dispatch(addToMyLib(item));
    }
});

export const Poster = connect(mapStateToProps, mapDispatchToProps)(PosterMDB);