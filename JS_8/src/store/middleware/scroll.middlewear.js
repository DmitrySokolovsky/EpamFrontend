import { TOGGLE_SCROLL } from "../actions";

const scroll =  store => next => action =>{
    if(action.type === TOGGLE_SCROLL){
        //class "hw-app__poster-container"
        var div = document.getElementsByClassName("hw-app__poster-container")[0];
        if(div.scrollTop>0){
            
        }      
    }
    return next(action);
}

export default scroll;