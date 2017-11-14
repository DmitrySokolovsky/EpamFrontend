import React,{Component} from 'react';
import './hw-scrollbar.css';

export class ScrollBar extends Component{
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
                <div className={this.props.isFormOpened?"hw-scrollbar__container hw-scrollbar__container--small":"hw-scrollbar__container"}>
                <i className={this.arrowDown}></i>
                </div>
            </div>
        );
    }
}

