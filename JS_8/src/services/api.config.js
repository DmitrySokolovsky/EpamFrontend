export const apiUrl = {
    movieUrl: "https://api.themoviedb.org/3/discover/movie?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
    showUrl: "https://api.themoviedb.org/3/tv/popular?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=2",
    genreUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US"    
}

export function movieSimilarUrl(movieId){
    return `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1`
}