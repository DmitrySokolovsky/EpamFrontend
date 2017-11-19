import {ADD_USER_MOVIE} from "../actions"

const movieRefresh = store => next => action => {
    console.log("Тип события" + action.type);
    if(action.type===ADD_USER_MOVIE){
        var localUserMoviesSTR = localStorage.getItem("userMovies");
        if(!localUserMoviesSTR){
            localStorage.setItem("userMovies", "");
        }
        let localUserMovies = JSON.parse(localUserMoviesSTR);
        let item = action.payload;
        localUserMovies.push(item);
        var arrstr = JSON.stringify(localUserMovies);
        localStorage.removeItem("userMovies");
        localStorage.setItem("userMovies", arrstr);
    }
    return next(action);
};

export default movieRefresh;