import React,{Component} from 'react';
import '../../css/font-awesome.min.css'
import './hw-sidebar.css';

//fa fa-window-close-o
class SideBar extends Component{
    constructor(props){
        super(props);
        this.logosList = [
            { 
                className:'fa fa-film fa--padding',
                classNameHide: 'fa fa-film',
                name: 'Movies'
            },
            { 
                className:'fa fa-television fa--padding',
                classNameHide: 'fa fa-television',
                name: 'TV Shows'
            },
            {
                className:'fa fa-book fa--padding', 
                classNameHide: 'fa fa-book',
                name: 'My Library' 
            },
            {
                className:'fa fa-user-circle fa--padding',
                classNameHide: 'fa fa-user-circle',
                name: 'Support'
            }
        ];
        this.state = {isOpened: true};
        this.closeIcon = 'fa fa-window-close-o fa-2x fa--padding';
        this.logoClass = 'hw-side-bar__text hw-side-bar__text--big';
        this.hideClass = 'hw-side-bar__hide';
    }

    toggleState(){
        this.setState({isOpened: !this.state.isOpened});
    }

    render(){
        return(
            <div className="hw-side-bar hw-side-bar__container">
                <div className="hw-side-bar__menu-logo" onClick={this.toggleState.bind(this)}>
                <i className={(this.state.isOpened) ?"fa fa-bars fa--padding" :"fa fa-bars fa-2x"}></i>
                <i className={(this.state.isOpened) ? this.closeIcon :this.hideClass}></i>
                <p className={(this.state.isOpened) ? this.logoClass :this.hideClass}>Logo</p>
                </div>
                <div className="hw-side-bar__menu-container">
                <div className="hw-side-bar__vertical-container">
                {this.logosList.map((item,index)=>{
                    return (
                        <div className="hw-side-bar__menu-item">
                        <i className={(this.state.isOpened)?item.className:item.classNameHide}></i><p className={(this.state.isOpened) ?"hw-side-bar__text" :this.hideClass}>{item.name}</p>
                        </div>
                    );
                })}
                </div>
                </div>
        </div>);
    }
}

export default SideBar;