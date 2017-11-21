import { 
    TOGGLE_SCROLL,
    SCROLL_UP,
    SCROLL_DOWN,
    SCROLLING
} from "../actions";
var s = 0;
const onScroll =  store => next => action =>{
    if(action.type===SCROLLING){
        var div = document.getElementsByClassName("hw-app__poster-container")[0];
        var currentScroll = div.scrollTop;
        if(currentScroll>s){
            console.log(currentScroll);
            store.dispatch({
                type: SCROLL_UP
             })
        }
        else{
            store.dispatch({
                type: SCROLL_DOWN
             })
        }
        s=currentScroll;
    }
    
    return next(action);
};
export default onScroll;