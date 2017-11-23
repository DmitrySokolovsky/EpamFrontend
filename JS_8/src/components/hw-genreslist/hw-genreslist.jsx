import React, { Component } from "react";
import {connect} from "react-redux";
import "./hw-genreslist.css";
import { initGenresData } from '../../store/actions';

export class GenresListMDB extends Component {
  constructor(props) {
    super(props);
    this.props.initGenres();
    this.genres = [];
  }

  handleGenreChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.name);
    }
    //this.state.genre_ids.push(event.target.name);
  }

  render() {
    return (
      <div
        className="hw-form__genres-list"
        onChange={this.handleGenreChange.bind(this)}>        
        {this.props.genres.map(item => {
          return (
            <div key={item.name}>
              <input type="checkbox" name={item.id} />
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