import {
    MOVIE_ADD_TO_LIB,
    MOVIE_ADDED_TO_LIB,
    TVSHOW_ADD_TO_LIB,
    TVSHOW_ADDED_TO_LIB
} from '../actions';

const addToMyLibMiddlewear = store => next => action => {
    if(action.type===MOVIE_ADD_TO_LIB){
        let myLibStr = localStorage.getItem("mylib");
        let item = action.payload;
        item.isInLibrary = true;
        if(!myLibStr){
            var tempArray = [];
            tempArray.push(item);
            let tempArrayStr = JSON.stringify(tempArray);
            localStorage.setItem("mylib",tempArrayStr);
        }else{
            var myLib = JSON.parse(myLibStr);
            myLib.push(item);
            let arrstr = JSON.stringify(myLib);
            localStorage.removeItem("mylib");
            localStorage.setItem("mylib", arrstr);
        } 
        store.dispatch({
            type: MOVIE_ADDED_TO_LIB,
            payload: item
        });
        localStorage.removeItem('movies');
        let currentMovies = store.getState().init.movies;
        let currentMoviesString = JSON.stringify(currentMovies);
        localStorage.setItem('movies', currentMoviesString);
    }

    if(action.type===TVSHOW_ADD_TO_LIB){
        let myLibStr = localStorage.getItem("mylib");
        let item = action.payload;
        item.isInLibrary = true;
        if(!myLibStr){
            var tempArray = [];
            tempArray.push(item);
            let tempArrayStr = JSON.stringify(tempArray);
            localStorage.setItem("mylib",tempArrayStr);
        }else{
            var myLib = JSON.parse(myLibStr);
            myLib.push(item);
            let arrstr = JSON.stringify(myLib);
            localStorage.removeItem("mylib");
            localStorage.setItem("mylib", arrstr);
        } 
        store.dispatch({
            type: TVSHOW_ADDED_TO_LIB,
            payload: item
        });
        localStorage.removeItem('tvshows');
        let currentShows = store.getState().initTv.tvshows;
        let currentShowsString = JSON.stringify(currentShows);
        localStorage.setItem('tvshows', currentShowsString);
    }

    return next(action);
}

export default addToMyLibMiddlewear;