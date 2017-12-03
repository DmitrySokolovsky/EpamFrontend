
//RENAMING!!!!
//find genres to show in item card - returns name according to ID
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

// finds out is one array contains all items of another one
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

// logic for advanced search
export function searcher(where, config, itemsType) {
    let genresForSearch;    
    let titleForSearch;
    let descriptionForSearch;
    let adultForSearch;
    let voteForSearch;

    if(itemsType==='movie'){
        genresForSearch = config.genresMovieSearch;    
        titleForSearch = config.titleMovieSearch;
        descriptionForSearch = config.overviewMovieSearch;
        adultForSearch = config.adultMovieSearch;
        voteForSearch = config.voteMovieSearch;
    }

    if(itemsType==='show'){
        genresForSearch = config.genresShowSearch;    
        titleForSearch = config.titleShowSearch;
        descriptionForSearch = config.overviewShowSearch;
        adultForSearch = config.adultShowSearch;
        voteForSearch = config.voteShowSearch;
    }    
    
    let searched = where.filter((item)=>{
        return contains(item.genre_ids, genresForSearch);
    })
    .filter((item) => {
        return item.name.indexOf(titleForSearch)!==-1;
    })
    .filter((item) => {
        return item.description.indexOf(descriptionForSearch)!==-1;
    })
    .filter((item) => {
        return item.adult == adultForSearch;
    })
    .filter((item) => {
        return item.vote >= voteForSearch;
    });

    return searched;
}