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