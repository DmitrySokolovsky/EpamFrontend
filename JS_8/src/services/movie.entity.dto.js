export class MovieEntity {
    constructor(entity) {
        this.id = entity.id || '';
        this.name = entity.title || '';
        this.description = entity.overview || '';
        this.poster = 'https://image.tmdb.org/t/p/w500' + entity.poster_path || '';
        this.adult = entity.adult || '';
        this.genre_ids = entity.genre_ids || '';
        this.vote = entity.vote_average || '';
        this.isInLibrary = false;
    }
}