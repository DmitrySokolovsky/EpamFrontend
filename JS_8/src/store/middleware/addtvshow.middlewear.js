import { ADD_USER_TVSHOW } from "../actions";

const tvshowRefresh = store => next => action => {
    if(action.type===ADD_USER_TVSHOW){
        console.log("!!!!111");
        var localUserTvShowSTR = localStorage.getItem("userTvShow");;
        if(!localUserTvShowSTR){
            localStorage.setItem("userTvShow", "");
        }
        console.log("1");
        let localUserTvShow = [];
        console.log("2");
        let item = action.payload;
        console.log("!!!!");
        console.log(item);
        localUserTvShow.push(item);
        let arrstr = JSON.stringify(localUserTvShow);
        localStorage.removeItem("userTvShow");
        localStorage.setItem("userTvShow", arrstr);
    }
    return next(action);
};

export default tvshowRefresh;