import {
    ADD_USER_MOVIE,
    CLOSE_FORM
} from "../actions";
import {setLocal, setLocalRemoveLast} from '../../services/local-saver.service';

const movieRefresh = store => next => action => {
    if(action.type===ADD_USER_MOVIE){
        var localUserMoviesSTR = localStorage.getItem("userMovies");
        let item = action.payload;
        if(!localUserMoviesSTR){
            var tempArray = [];
            tempArray.push(item);
            setLocal(tempArray, "userMovies");
        }
        else{
            let localUserMovies = JSON.parse(localUserMoviesSTR);
            localUserMovies.push(item);
            setLocalRemoveLast(localUserMovies, "userMovies");
        }  
        store.dispatch({
            type: CLOSE_FORM
        });
    }
    
    
    return next(action);
};

export default movieRefresh;