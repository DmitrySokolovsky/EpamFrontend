import React,{Component} from 'react';
import './hw-scrollbar.css';

class ScrollBar extends Component{
    constructor(props){
        super(props);
        this.arrowDown = "fa fa-angle-double-down fa-2x";
        this.arrowUp = "fa fa-angle-double-up fa-2x";
        this.state = {scrolledDown: true};
    }

    scrolled() {
        this.setState({scrolledDown: !this.scrolledDown});
    }

    render(){
        return (
            <div className="hw-scrollbar">
                <div className="hw-scrollbar__container">
                <i className={this.arrowDown}></i>
                </div>
            </div>
        );
    }
}

export default ScrollBar;