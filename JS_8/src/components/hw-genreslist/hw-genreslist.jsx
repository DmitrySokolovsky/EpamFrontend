import React, { Component } from "react";
import {connect} from "react-redux";
import "./hw-genreslist.css";
import { initGenresData } from '../../store/actions';

export class GenresListMDB extends Component {
  constructor(props) {
    super(props);
    this.props.initGenres();
    this.state = {
      genresCheck: []
    }
  }

  handleGenreChange(event) {
    if (this.props.onChange&&this.props.onRemoveChange) {
      if(event.target.checked) this.props.onChange(event.target.name);
      else this.props.onRemoveChange(event.target.name);
    }
  }

  render() {
    return (
      <div
        className="hw-genres-list hw-genres-list__container"
        onChange={this.handleGenreChange.bind(this)}>        
        {this.props.genres.map(item => {
          return (
            <div key={item.name}>
              <input type="checkbox" name={item.id}/>
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    var genres = state.genres.genres;
    return {
        genres
    };
};

const mapDispatchToProps = (dispatch) => ({
    initGenres: () => {
        dispatch(initGenresData());
    } 
});

export const GenresList = connect(mapStateToProps, mapDispatchToProps)(GenresListMDB);