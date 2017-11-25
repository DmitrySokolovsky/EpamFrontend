import { ADD_TO_LIB } from '../actions';

const addToMyLibMiddlewear = store => next => action => {
    if(action.type===ADD_TO_LIB){
        let myLibStr = localStorage.getItem("mylib");
        let item = action.payload;
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
        console.log(item);
    }
    return next(action);
}

export default addToMyLibMiddlewear;