import React,{Component} from 'react';
import './hw-scrollbar.css';


export class ScrollBar extends Component{
    constructor(props){
        super(props);
        this.arrowDown = "fa fa-angle-double-down fa-2x";
        this.arrowUp = "fa fa-angle-double-up fa-2x";
    }

    scrolled() {
        this.setState({scrolledDown: !this.scrolledDown});
    }

    onClick(){
        if(this.props.onClick){
            this.props.onClick();
        }
    }

    render(){
        return (
            <div className="hw-scrollbar">
                <div className={this.props.isFormOpened?
                    "hw-scrollbar__container hw-scrollbar__container--small":
                    "hw-scrollbar__container"}
                    onClick={this.props.toggleScroll}
                    >
                <i className={(this.props.isScrollDown)?this.arrowDown:this.arrowUp}
                onClick={this.onClick.bind(this)}></i>
                </div>
            </div>
        );
    }
}
