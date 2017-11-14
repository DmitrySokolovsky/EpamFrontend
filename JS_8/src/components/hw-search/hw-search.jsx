import React,{Component} from 'react';
import './hw-search.css';

export class Search extends Component{
    constructor(props){
        super(props);
        this.state = { textValue: this.props.textValue };
    }
    render(){
        return(
            <div className="hw-search hw-search__container">
                <div className="hw-search__icon">
                <i className="fa fa-search hw-search__text--dark"></i>
                </div>                
                <input type="search" 
                className="hw-search__input hw-search__text"
                placeholder="  Search..."
                onChange={this.onInputChange.bind(this)}/>
            </div>
        );
    }
    onInputChange(event) {
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }
}
