import React,{Component} from 'react';
import './hw-scrollbar.css';
import { connect } from 'react-redux';

import {
    toggleScroll
} from "../../store/actions";

export class ScrollBarMDB extends Component{
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
                <div className={this.props.isFormOpened?
                    "hw-scrollbar__container hw-scrollbar__container--small":
                    "hw-scrollbar__container"}
                    onClick={this.props.toggleScroll}
                    >
                <i className={this.arrowDown}></i>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    var arrowDown = state.scroll.arrowDown;
    return{
        arrowDown
    };
};

const mapDispatchToProps = (dispatch) =>({
    toggleScroll: dispatch(toggleScroll())
});

export const ScrollBar = connect(mapStateToProps, mapDispatchToProps)(ScrollBarMDB)

