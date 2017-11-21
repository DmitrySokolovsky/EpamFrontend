import { 
    TOGGLE_SCROLL,
    SCROLLING
 } from "./scrollactions.type";

export function toggleScroll(){
    return{
        type: TOGGLE_SCROLL
    }
}

export function scrolling(){
    return{
        type: SCROLLING
    }
}
