import React,{Component} from 'react';
import './hw-textbox.css';

export class TextBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="hw-textbox hw-textbox__container">                                
                <input type="search" 
                className="hw-textbox__input hw-textbox__text"
                placeholder={this.props.placeholder}
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
