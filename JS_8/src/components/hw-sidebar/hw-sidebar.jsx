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
                name: 'Movies'
            },
            { 
                className:'fa fa-television fa--padding',
                name: 'TV Shows'
            },
            {
                className:'fa fa-book fa--padding', 
                name: 'My Library' 
            },
            {
                className:'fa fa-user-circle fa--padding',
                name: 'Support'
            }
        ];
    }
    render(){
        return(
            <div className="hw-side-bar hw-side-bar__container">
                <div className="hw-side-bar__menu-logo">
                <i className="fa fa-bars fa--padding"></i>
                <i className="fa fa-window-close-o fa-2x fa--padding"></i>
                <p className="hw-side-bar__text hw-side-bar__text--big">Logo</p>
                </div>
                <div className="hw-side-bar__menu-container">
                <div className="hw-side-bar__vertical-container">
                {this.logosList.map((item)=>{
                    return (
                        <div className="hw-side-bar__menu-item">
                        <i className={item.className}></i><p className="hw-side-bar__text">{item.name}</p>
                        </div>
                    );
                })}
                </div>
                </div>
        </div>);
    }
}

export default SideBar;