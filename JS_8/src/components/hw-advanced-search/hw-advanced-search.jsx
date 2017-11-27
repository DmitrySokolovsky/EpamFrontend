import React,{Component} from 'react';
import {connect} from "react-redux";

import './hw-advanced-search.css';

import {
    GenresList,
    TextBox
} from "../../components";

export class AdvancedSearch extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="hw-ad-search hw-ad-search__container">
                <div className="hw-ad-search__input-container">
                    <div className="hw-ad-search__item">
                        Title
                        <TextBox placeholder="Title"/>
                    </div>
                    
                    <div className="hw-ad-search__item">
                        Overview
                        <TextBox placeholder="Ovewview"/>
                    </div>

                    <div className="hw-ad-search__item">
                        Genres
                        <GenresList/>
                    </div>
                </div> 
                <div className="hw-ad-search__input-container">
                    <div className="hw-ad-search__item">
                        <input type="checkbox" name="" id=""/>
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
                        <button className="hw-ad-search__button">
                            Search
                        </button>
                    </div>
                </div>              
                
            </div>
        );
    }
}