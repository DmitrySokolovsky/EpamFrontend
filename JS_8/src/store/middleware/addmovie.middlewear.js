import {ADD_USER_MOVIE} from "../actions"

const movieRefresh = store => next => action => {
    if(action.type===ADD_USER_MOVIE){
        var localUserMoviesSTR = localStorage.getItem("userMovies");
        let item = action.payload;
        if(!localUserMoviesSTR){
            var tempArray = [];
            tempArray.push(item);
            let tempArrayStr = JSON.stringify(tempArray);
            localStorage.setItem("userMovies",tempArrayStr);
        }
        else{
            let localUserMovies = JSON.parse(localUserMoviesSTR);
            localUserMovies.push(item);
            let arrstr = JSON.stringify(localUserMovies);
            localStorage.removeItem("userMovies");
            localStorage.setItem("userMovies", arrstr);
        }        
    }
    return next(action);
};

export default movieRefresh;