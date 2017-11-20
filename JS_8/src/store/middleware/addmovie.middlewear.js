import {ADD_USER_MOVIE} from "../actions"

const movieRefresh = store => next => action => {
    if(action.type===ADD_USER_MOVIE){
        var localUserMoviesSTR = localStorage.getItem("userMovies");
        if(!localUserMoviesSTR){
            localStorage.setItem("userMovies", "");
        }
        let localUserMovies = [];
        let item = action.payload;
        localUserMovies.push(item);
        let arrstr = JSON.stringify(localUserMovies);
        localStorage.removeItem("userMovies");
        localStorage.setItem("userMovies", arrstr);
    }
    return next(action);
};

export default movieRefresh;