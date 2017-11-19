import { TOGGLE_FORM, MOVIE_DATA_INIT, GET_MOVIE_DATA } from "../actions";
import { LocalSaver } from "../../services/local-saver.service";

let localSaver = new LocalSaver();

const logger = store => next => action => {
    console.log("Тип события" + action.type);
    if(action.type===MOVIE_DATA_INIT){
        console.log("INIT!!!");
        var data = localSaver.getMoviesfromLocal();
        console.log(data);
        store.dispatch({
            type: GET_MOVIE_DATA,
            payload: data
        });
    }
    console.log(store.getState())
    return next(action);
};

export default logger;
