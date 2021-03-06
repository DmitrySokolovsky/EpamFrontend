import {
  movieSimilarUrl,
  showSimilarUrl,
  getNextPartMovieLink,
  getNextPartShowLink
} from './api.config'

export class DataServise {
  constructor() {}

  // gets data in app starting
  getData(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(xhr.responseText);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
      xhr.send();
    });
  }

  //gets similar item's data
  getSimilarMovieData(movieId) {
    let url = movieSimilarUrl(movieId);
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(xhr.responseText);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
      xhr.send();
    });
  }

  getSimilarShowData(showId) {
    let url = showSimilarUrl(showId);
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(xhr.responseText);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
      xhr.send();
    });
  }

  getNextMoviePartData(n){
    let url = getNextPartMovieLink(n);
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(xhr.responseText);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
      xhr.send();
    });
  }


getNextShowPartData(n){
  let url = getNextPartShowLink(n);
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
      if (this.status == 200) {
        resolve(xhr.responseText);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}
}
