import {
    ADD_USER_MOVIE,
    CLOSE_FORM
} from "../actions";
import {setLocal, setLocalRemoveLast} from '../../services/local-saver.service';

const movieRefresh = store => next => action => {
    if(action.type===ADD_USER_MOVIE){
        let localMoviesSTR = localStorage.getItem("movies");
        let localMoviesArray = JSON.parse(localMoviesSTR);
        let item = action.payload;
        item.type = 'movie';
        item.isInLibrary = false;
        localMoviesArray.unshift(item);
        setLocalRemoveLast(localMoviesArray, 'movies');
        store.dispatch({
            type: CLOSE_FORM
        });
    }   
    
    return next(action);
};

export default movieRefresh;