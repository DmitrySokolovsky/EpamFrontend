import { TOGGLE_SCROLL } from "../actions";

const scroll =  store => next => action =>{
    if(action.type === TOGGLE_SCROLL){
        //class "hw-app__poster-container"
    }
    return next(action);
}

export default scroll;