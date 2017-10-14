var argArray = [];
function argFunc(arg) {    
    if(arg){
        for(var i = 0;i<arguments.length;i++){
            argArray.push(arguments[i]);
        }        
        return null;
    }
    if(!arg){
        console.log(argArray);
    }
}

argFunc("String",1,2,3,3);
argFunc("Epam","Front","end","training","2017","rulls",":-)");
argFunc();
