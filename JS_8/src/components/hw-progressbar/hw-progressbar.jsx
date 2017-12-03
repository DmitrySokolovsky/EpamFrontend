import React,{Component} from 'react';
import {connect} from "react-redux";
import './hw-progressbar.css';

export class ProgressBar extends Component{
    constructor(props){
        super(props);
    }
    
    // logic that calculates the range - page and element coorda were used
    onRangeChange(event){
        if(this.props.onRangeChange){
            let x = event.clientX;
            let outerCoords = this.outer.getBoundingClientRect();
            let outerPageX = outerCoords.left;
            let range = x-outerPageX; 
            let outerDivWidth = +(this.props.styleConfigOuter.width.slice(0,-2));
            let res = 100*range/outerDivWidth;
            if(res>100){
                res=100;
            }
            let rangePercent = Math.round(res) / 10;
            this.inner.style.width = res+'%';
            this.props.onRangeChange(rangePercent);
        }
    }

    render(){
        return (
            <div className="hw-progressbar hw-progressbar__container">
                <div className="hw-progressbar__outer"
                    style={this.props.styleConfigOuter}
                    onClick={(event)=>this.onRangeChange(event)}
                    ref={div=>{this.outer = div}}>
                    <div className="hw-progressbar__inner" 
                    style={this.props.styleConfigInner}
                    ref={div=>{this.inner = div}}></div>
                </div>
            </div>
        );
    }
}