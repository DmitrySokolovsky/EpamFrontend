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

export function searcher(where, config, itemsType) {
    let genresForSearch;    
    let titleForSearch;
    let descriptionForSearch;
    let adultForSearch;

    if(itemsType==='movie'){
        genresForSearch = config.genresMovieSearch;    
        titleForSearch = config.titleMovieSearch;
        descriptionForSearch = config.overviewMovieSearch;
        adultForSearch = config.adultMovieSearch;
    }

    if(itemsType==='show'){
        genresForSearch = config.genresShowSearch;    
        titleForSearch = config.titleShowSearch;
        descriptionForSearch = config.overviewShowSearch;
        adultForSearch = config.adultShowSearch;
    }    
    
    let searched = where.filter((item)=>{
        return contains(item.genre_ids, genresForSearch);
    })
    .filter((item) => {
        console.log(item);
        return item.name.indexOf(titleForSearch)!==-1;
    })
    .filter((item) => {
        console.log(item);
        return item.description.indexOf(descriptionForSearch)!==-1;
    })
    .filter((item) => {
        console.log(item);
        return item.adult == adultForSearch;
    });

    return searched;
}