import { ADD_USER_TVSHOW } from "../actions";

const tvshowRefresh = store => next => action => {
    if(action.type===ADD_USER_TVSHOW){
        var localUserTvShowSTR = localStorage.getItem("userTvShow");
        let item = action.payload;
        if(!localUserTvShowSTR){
            var tempArray = [];
            tempArray.push(item);
            let tempArrayStr = JSON.stringify(tempArray);
            localStorage.setItem("userTvShow",tempArrayStr);
        }
        else{
            var localUserTvShow = JSON.parse(localUserTvShowSTR);
            localUserTvShow.push(item);
            let arrstr = JSON.stringify(localUserTvShow);
            localStorage.removeItem("userTvShow");
            localStorage.setItem("userTvShow", arrstr);
        }        
    }
    return next(action);
};

export default tvshowRefresh;