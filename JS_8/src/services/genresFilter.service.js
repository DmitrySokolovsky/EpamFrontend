export function findGenres(genreCollection,movieGenresIds){
    var resultArr = [];
    for(let i = 0;i<genreCollection.length;i++){
        for(let j = 0;j<movieGenresIds.length;j++){
            if(genreCollection[i].id==movieGenresIds[j]){
                resultArr.push(genreCollection[i].name);
            }
        }
    }
    return resultArr;
}

export function contains(where,what) {
    if(!what){
        return true;
    }
    let whatArray = [];

    whatArray = what.map((v)=> {return +v});
    
    let tempArray = [];

    for(let i =0;i<whatArray.length;i++){
         if(where.indexOf(whatArray[i]) !==-1) tempArray.push('1');
         else tempArray.push('');
      }
      for(let j = 0; j<tempArray.length;j++){
          if(tempArray[j] == '') return false;
      }
   return true;
}