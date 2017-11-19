import {ADD_USER_MOVIE} from "../actions"

const movieRefresh = store => next => action => {
    console.log("Тип события" + action.type);
    if(action.type===ADD_USER_MOVIE){
        let customMovies = localStorage.getItem("custom-movies");
        if(!customMovies){
            let item = action.payload;
        }
    }
    return next(action);
};

export default movieRefresh;