export class TvShowEntity {
    constructor(entity) {
        this.id = entity.id || '';
        this.name = entity.name || '';
        this.description = entity.overview || '';
        this.poster = 'https://image.tmdb.org/t/p/w500' + entity.poster_path || '';
        this.genre_ids = entity.genre_ids || '';
        this.vote = entity.vote_average || '';
        this.isInLibrary = false;
        this.type = 'tvshow';
    }
}