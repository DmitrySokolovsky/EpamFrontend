//links that I used while app starts
export const apiUrl = {
    movieUrl: "https://api.themoviedb.org/3/discover/movie?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
    showUrl: "https://api.themoviedb.org/3/tv/popular?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1",
    genreUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US"    
}

// generates link for similar items in item card
export function movieSimilarUrl(movieId){
    return `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1`
}

export function showSimilarUrl(showId){
    return `https://api.themoviedb.org/3/tv/${showId}/similar?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1`
}

// this was no nessesary but I made iternal scroll =)
//this funcs generates next page-link 
export function getNextPartMovieLink(n) {
    return `https://api.themoviedb.org/3/discover/movie?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${n}`;
}

export function getNextPartShowLink(n) {
    return `https://api.themoviedb.org/3/tv/popular?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=${n}`;
}